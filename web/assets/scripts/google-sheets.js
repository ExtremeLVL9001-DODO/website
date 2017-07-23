// postContactToGoogle SCRIPT ADAPTED FROM https://wiki.base22.com/display/btg/Send+data+to+Google+docs+using+a+web+form+and+AJAX
// thanks to the original author:
// Ernesto Rivera
// 7/20/2017

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// send http post request (to spoof a submission from the real google form)
function postContactToGoogle(){
    // $('#first-name').val()... not sure why the '#' but it references id="first-name" or name="first-name" I think.
    var firstname = $('#first-name').val();
    var lastname = $('#last-name').val();
    var email = $('#email').val();
    
    //validate input
    if (firstname == ""){
        //signupError is defined in animation-controls.js
        signupError("Please Enter a First Name",0)
        return
    }
    else if(lastname == ""){
        signupError("Please Enter a Last Name ",1)
        return
    }
    else if(email == ""){
        signupError("Please Enter an Email",2)
        return
    }
    else if (validateEmail(email) != true){
        signupError("Please Enter a Valid Email",2)
        return
    }
    signupError("",-1);
    
    $.ajax({
        // url is the literal url of the google form
        // entry.xxxx is some sort of special number that is unique to each input
        // find entry.xxxx by submitting the form and then looking at the "formResponse" http post. 
        // the numbers should be in a header called "Form Data"
        url: "https://docs.google.com/forms/d/e/1FAIpQLSc8AFQ4O6UzBfvxPfnfASKVQ3HQQXrANum4gky4otsVE5g38w/formResponse",
        data: {"entry.1710055267" : firstname, "entry.1673971303" : lastname, "entry.1642420953": email},
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function (){
                
                $('#first-name').val("");
                $('#last-name').val("");
                $('#email').val("");
                //Success message
            },
            200: function (){
                $('#first-name').val("");
                $('#last-name').val("");
                $('#email').val("");
                //Success Message
            }
        }
    });
    
    signupSuccess(); // defined in animation-controls.js
}