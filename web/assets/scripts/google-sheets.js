// SCRIPT ADAPTED FROM https://wiki.base22.com/display/btg/Send+data+to+Google+docs+using+a+web+form+and+AJAX
// thanks to the original author:
// Ernesto Rivera
// 7/20/2017

// send http post request (to spoof a submission from the real google form)
    function postContactToGoogle(){
        // $('#first-name').val()... not sure why the '#' but it references id="first-name" or name="first-name" I think.
        var firstname = $('#first-name').val();
        var lastname = $('#last-name').val();
        var email = $('#email').val();
        if ((firstname !== "") && (lastname !== "") && ((email !== "") )) {
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
        }
        else {
            //Error message
        }
    }