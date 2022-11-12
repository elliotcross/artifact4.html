function validateForm(form)
{
//validation fails if input in any fields is blank
	let x = document.forms["myForm"]["FirstName"].value;
	let y = document.forms["myForm"]["LastName"].value;
	let z = document.forms["myForm"]["EMail"].value;
	let f = document.forms["myForm"]["Phone"].value;
	let g = document.forms["myForm"]["Username"].value;
	let h = document.forms["myForm"]["Password"].value;
	let k = document.forms["myForm"]["Address"].value;
	let m = document.forms["myForm"]["Country"].value;
	if (x === "" || y === "" || z === "" || f === "" || g === "" || h === "" || k === "" || m === "-1") {
		alert("Error: All fields are required");
		return false;
	}
//validation fails if first name input is longer than 20 characters
	if (x.length > 20) {
		alert("Error: First name cannot be more than 20 characters");
		return false;
	}
//regular expression to match only alphabetic characters
	var re = /^[A-Za-z]+$/;
//validation fails if first name input is not alphabetic characters
	if(!re.test(x)) {
		alert("Error: Names cannot contain numbers or symbols");
		return false;
	}
	
//validation fails if last name input is longer than 50 characters
	if (y.length > 50) {
		alert("Error: Last name cannot be more than 50 characters");
		return false;
	}

//validation fails if last name input is not alphabetic characters
	if(!re.test(y)) {
		alert("Error: Names cannot contain numbers or symbols");
		return false;
	}
	
//validation fails if email is incorrect format
	
         atpos = z.indexOf("@");
         dotpos = z.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter valid email");
            return false;
         }

//validation fails if phone is non-numeric characters or more than 15 characters
	if (isNaN(f) || f.length >15 || phone===null) {
		alert("Error: Phone must contain numbers only, no more than 15 characters");
		return false;
	}
	
//validation fails if username is longer than 12 characters
	
//validation fails if password is longer than 7 characters
	
//State required if Country is USA
	
//Zipcode required if Country is USA. Zipcode max 5 digits.

	else return true;
}

