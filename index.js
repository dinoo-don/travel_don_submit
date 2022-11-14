function checkButton()
                  {
                     if(document.getElementById('oneWay').checked) 
                           { 
                           document.getElementById("disp").innerHTML = document.getElementById("oneWay").value  + " trip is selected"; 
                           document.getElementById("Form").style.display = "block";
                           } 
                     else if (document.getElementById('roundTrip').checked) { 
                           document.getElementById("disp").innerHTML = document.getElementById("roundTrip").value + " trip is selected";   
                           document.getElementById("Form2").style.display = "block";
                     } 
                  }     
            function validateForm()
                 {
                  let textField = document.getElementById("textField").value;
                    if ( textField == "")
                        {
                        window.alert( "Please enter in missing field");
                        return false;
                        }

                  let mymail=document.myform.myemail.value;
                  let attherate=mymail.indexOf("@");
                        let atthedot=mymail.lastIndexOf(".");
             
                    if (attherate<1 || atthedot<attherate+2 || atthedot>=mymail.length)
                        {
                        alert( "enter the correct email");
                                  return false;
                        }
               
                  let curdate= new Date();
                  let departure= Date(document.myform.mydate.value);
                        if (departure<curdate)
                        {
                            alert( "enter departure date");
                            return false;
                        }

                  let mobile1=(document.myform.mobile.value)
                        if (mobile1.length==10)
                        {
                        return true
                        }
                        else      
                        {
                           alert( "enter the correct 10 digits number");
                           return false;
                        }              
                 }