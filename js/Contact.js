
function validateForm() {
  var x = document.forms["myForm"]["Name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

var reg1 = /^[a-z ,.'-]+$/i;
var name = document.forms["myForm"]["Name"].value;
            if (reg1.test(name) == false) 
            {
                alert('Name cannot contain numbers or special characters');
                return false;
            }


var y = document.forms["myForm"]["Email"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
var reg2 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var email = document.forms["myForm"]["Email"].value;
            if (reg2.test(email) == false) 
            {
                alert('Invalid Email Address');
                return false;
            }
}



