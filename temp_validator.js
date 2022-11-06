function validateForm()
{
	var validFirstName = false;
	var validLastName = false;
	var re = /^[A-Za-z]+$/; //regular expression to match only alphabetic characters
	var validEmail = false;
	var userEmail = document.getElementById("Email").value;
	var atpos = userEmail.indexOf("@");
	var dotpos = userEmail.lastIndexOf(".");
	var validPhone = false;
	var phone = document.getElementById("Phone").value;
	var validUsername = false;
	var validPassword = false;
	var errormsgs ="";
	
	//validate FirstName field is not empty, has no more than 20 characters using alphabetic characters only
	if (myForm.FirstName.value.length > 20 || myForm.FirstName.value===null || myForm.FirstName.value==="" || !re.test(myForm.FirstName))
			errormsgs += "<p>First name is required and must be no more than 20 characters. No numbers or special characters allowed.</p>";
				else
					validFirstName = true;
				
	//validate LastName field is not empty, has no more than 50 characters using alphabetic characters only
	if (myForm.LastName.value.length > 50 || myForm.LastName.value===null || myForm.LastName.value==="" || !re.test(myForm.LastName))
			errormsgs += "<p>Last name is required and must be no more than 50 characters. No numbers or special characters allowed.</p>";
				else
					validLastName = true;
				
	//validate Email field has a valid formatted email address
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length)
			errormsgs += "<p>Invalid email</p>";
				else
					validEmail = true;
				
	//validate Phone field is not empty, has no more than 15 characters and is only numerical values
	if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
			errormsgs += "<p>Invalid phone number.</p>";
				else
					validPhone = true;
				
	//validate Username field is not empty, has no more than 12 characters
	if (myForm.Username.value.length > 12 || myForm.Username.value===null || myForm.Username.value==="")
			errormsgs += "<p>Username is required and must be no more than 12 characters.</p>";
				else
					validUsername = true;
				
	//validate Password field is not empty, has no more than 7 characters
	if (myForm.Password.value.length > 7 || myForm.Password.value===null || myForm.Password.value==="")
			errormsgs += "<p>Password is required and must be no more than 7 characters.</p>";
				else
					validPassword = true;
	
	document.getElementById("errormsgs").innerHTML = errormsgs;
	
	return (validFirstName && validLastName && validEmail && validPhone && validUsername && validPassword);
	}

