$(document).ready(function(){
    $("#password_error_message").hide();
    var error_password = false;
    
    function check_password() {
        var password_length = $("#form_password").val().length
        if(password_length < 8) {
            $("#password_error_message").html("Atleast 8 characters");
            $("#password_error_message").show();
            $("#form_password").css("border-bottom","2px solid #f90a0a");
            error_password = true;
        } else {
            $("#password_error_message").hide();
            $("form_password").css("border-bottom","2px solid #34f458");
        }
    }
});