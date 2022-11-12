function validateForm(form)
{
//validation fails if first name input is blank
	let x = document.forms["myForm"]["FirstName"].value;
	let y = document.forms["myForm"]["LastName"].value;
	var z = document.forms["myForm"]["Email"].value;
	if (x === "" || y === "" || z === "") {
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
//regular expression to match only alphabetic characters
	var re = /^[A-Za-z]+$/;
//validation fails if first name input is not alphabetic characters
	if(!re.test(y)) {
		alert("Error: Names cannot contain numbers or symbols");
		return false;
	}
	else return true;
}

//notes
function validate() {
      
         if( document.myForm.Name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
         if( document.myForm.EMail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
         if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
            document.myForm.Zip.value.length != 5 ) {
            
            alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus() ;
            return false;
         }
         if( document.myForm.Country.value == "-1" ) {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
      }
