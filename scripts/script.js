function handleOnFocus(x){
	x.style.backgroundColor="yellow";
}
function handleOnBlur(x){
	x.style.backgroundColor="white";

}


function validateLogin(){	

valid = true;

          if (document.getElementById("Username").value.length < 4 || document.getElementById("Username").value == "")        
          {
              valid = false;
              document.getElementById("errUsername").innerHTML = "ERROR: Make sure username not empty and at least 4 characters. !";
              document.getElementById("errUsername").style.display = "inline";
          }
          else
          {
              document.getElementById("errUsername").innerHTML = "";
              document.getElementById("errUsername").style.display = "none";
          }

           if (document.getElementById("Password").value.length < 6 || document.getElementById("Password").value == "")        
          {
              valid = false;
              document.getElementById("errPassword").innerHTML = "ERROR: Make sure username not empty and at least 6 characters. !";
              document.getElementById("errPassword").style.display = "inline";
          }
          else
          {
              document.getElementById("errPassword").innerHTML = "";
              document.getElementById("errPassword").style.display = "none";
          }

           if (valid == false)
          {
               return false;    // don't submit the form data to the server because of any validation error(s)
          }
          else
          {
               return true;     // submit the form data to the server because all data looks correct without errors
          }
        

}



/* ...................................feedback............................................. */

function onKeyFunction(){

valid = true;

          if ( document.getElementById("name").value.match(/[0-9]/gi))        

          {
              valid = false;
              document.getElementById("errNameDigit").innerHTML = "ERROR: Name field should not contain any digits. !";
              document.getElementById("errNameDigit").style.display = "inline";
          }
          else
          {
              document.getElementById("errNameDigit").innerHTML = "";
              document.getElementById("errNameDigit").style.display = "none";
          }     
  if (valid == false)
          {
               return false;    // don't submit the form data to the server because of any validation error(s)
          }
          else
          {
               return true;     // submit the form data to the server because all data looks correct without errors
          }


}

function validatedFeedback(){	

valid = true;
  if (onKeyFunction() == false){
              valid = false;
          }
  else{
              valid = true;
         }

          if (document.getElementById("name").value == "")        
          {
              valid = false;
              document.getElementById("errNameEmpty").innerHTML = "ERROR: Name field is empty. !";
              document.getElementById("errNameEmpty").style.display = "block";
          }
          else
          {
              document.getElementById("errNameEmpty").innerHTML = "";
              document.getElementById("errNameEmpty").style.display = "none";
          }

           if (document.getElementById("name").value.length < 6 )        
          {
              valid = false;
              document.getElementById("errNameSix").innerHTML = "ERROR: Name field should be at least 6 characters. !";
              document.getElementById("errNameSix").style.display = "block";
          }
          else
          {
              document.getElementById("errNameSix").innerHTML = "";
              document.getElementById("errNameSix").style.display = "none";
          }

          if (document.getElementById("phone").value == "")        
          {
              valid = false;
              document.getElementById("errPhoneEmpty").innerHTML = "ERROR: Phone field is empty. !";
              document.getElementById("errPhoneEmpty").style.display = "block";
          }
          else
          {
              document.getElementById("errPhoneEmpty").innerHTML = "";
              document.getElementById("errPhoneEmpty").style.display = "none";
          }

          
           if (document.getElementById("phone").value.search(/^(9665)[0-9]{8}$/) != 0)        
          {
              valid = false;
              document.getElementById("errPhoneForm").innerHTML = "ERROR: Phone field should be exactly 12 digits only and start with 9665. !";
              document.getElementById("errPhoneForm").style.display = "block";
          }
          else
          {
              document.getElementById("errPhoneForm").innerHTML = "";
              document.getElementById("errPhoneForm").style.display = "none";
          }

           if (document.getElementById("email").value == "")        
          {
              valid = false;
              document.getElementById("errEmailEmpty").innerHTML = "ERROR: Email field is empty. !";
              document.getElementById("errEmailEmpty").style.display = "block";
          }
          else
          {
              document.getElementById("errEmailEmpty").innerHTML = "";
              document.getElementById("errEmailEmpty").style.display = "none";
          }

          if (document.getElementById("email").value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != 0)
          {
              valid = false;
              document.getElementById("errEmailForm").innerHTML = "ERROR: Provide a correct email address !";
              document.getElementById("errEmailForm").style.display = "block";
          }
          else
          {
              document.getElementById("errEmailForm").innerHTML = "";
              document.getElementById("errEmailForm").style.display = "none";
          }  


          if (document.getElementById("subject").value == "")        
          {
              valid = false;
              document.getElementById("errSubject").innerHTML = "ERROR: Subject field is empty. !";
              document.getElementById("errSubject").style.display = "block";
          }
          else
          {
              document.getElementById("errSubject").innerHTML = "";
              document.getElementById("errSubject").style.display = "none";
          }

           if (document.getElementById("topic").value == "Please select a topic...")        
          {
              valid = false;
              document.getElementById("errTopic").innerHTML = "ERROR: Select a topic. !";
              document.getElementById("errTopic").style.display = "block";
          }
          else
          {
              document.getElementById("errTopic").innerHTML = "";
              document.getElementById("errTopic").style.display = "none";
          }

           if (document.getElementById("feedback").value == "")        
          {
              valid = false;
              document.getElementById("errFeedback").innerHTML = "ERROR: Feedback message field is empty. !";
              document.getElementById("errFeedback").style.display = "block";
          }
          else
          {
              document.getElementById("errFeedback").innerHTML = "";
              document.getElementById("errFeedback").style.display = "none";
          }
        


           if (valid == false)
          {
               return false;    // don't submit the form data to the server because of any validation error(s)
          }
          else
          {
               return true;     // submit the form data to the server because all data looks correct without errors
          }
        

}




