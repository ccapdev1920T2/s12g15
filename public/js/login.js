$(document).ready(function () {

    $('#email').keyup(function () {
        
        var email = $('#email').val();

        $.get('/checkEmail', {email: email}, function (result) {

            if(result.email == email) {
                $('#error').text('');
                $('#submit').prop('disabled', false);
            }

            else {
                $('#error').text('Email is not yet Registered! Please use a registered Email or register this Email');
                $('#submit').prop('disabled', true);
            }
        });
    });

});