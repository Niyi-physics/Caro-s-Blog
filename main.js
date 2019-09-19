$(document).ready(function(){
    //login button
    $("#doo").click(function() {
        $.post("db.json", {
            email: you@example.com,
            password: 123456789
        }, function(data,status){
            $("#login").html(data);
        });
    });
    //search
    $("#search").click(function() {
        $.get("db.json", function(data,status) {
            $("text").html(data);
            alert(status);
        })
    });













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