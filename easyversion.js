function validateForm(form)
{
//validation fails if first name input is blank
	let x = document.forms["myForm"]["FirstName"].value;
	if (x == "") {
		alert("Error: First name is required");
		return false;
	}
//validation fails if first name input is longer than 20 characters
	if (x.length > 20) {
		alert("Error: Name cannot be more than 20 characters");
		return false;
	}
//regular expression to match only alphabetic characters
	var re = /^[A-Za-z]+$/;
//validation fails if first name input is not alphabetic characters
	if(!re.test(x)) {
		alert("Error: Name cannot contain numbers or symbols");
		return false;
	}
	else return true;
}
