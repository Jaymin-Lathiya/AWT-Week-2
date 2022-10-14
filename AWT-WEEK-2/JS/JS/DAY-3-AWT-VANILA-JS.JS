function externalalert(){
    alert("Valid Click");
}
function externalconfrim()
  {
    if(confirm("Are you sure..?")){
        alert("Yes");
    }
    else{
        alert("Nooo");
    }
  }

  function externalprompt(){
  var fname=prompt("Enter first name");
  var lname=prompt("Enter last name");
  var f1name=prompt("Enter Father's name");
  var age=prompt("Enter age");
          var add=prompt("Enter address")
          alert("Name:"+fname+" "+lname+" "+f1name+"\r\n"+"Age:"+age+"\r\n"+"Address:"+add);
        }

// form validation basic sytax
<form name="myform" method="post" action="abc.jsp" onsubmit="return validateform()" >  
Name: <input type="text" name="name"><br/>  
Password: <input type="password" name="password"><br/>  
<input type="submit" value="register">  
</form>  
 
