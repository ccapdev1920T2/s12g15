$(document).ready(function () {

    $('#cpword').keyup(function() {
        var pw = $('#pword').val(); 
        var cpw = $('#cpword').val(); 

        if (pw != cpw) {
            $('#error').text('Password and Confirm Password do not match.');
            $('#submit').prop('disabled', true);
        }
        else
        {
            $('#error').text('');
            $('#submit').prop('disabled', false);
        }
    });
  
    $('#email').keyup(function () {
        
        var email = $('#email').val();

        $.get('/checkEmail', {email: email}, function (result) {

            if(result.email == email) {
                $('#error').text('Email already registered. Please use another Email.');
                $('#submit').prop('disabled', true);
            }

            else {
                $('#error').text('');
                $('#submit').prop('disabled', false);
            }
        });
    });

    $('#uname').keyup(function () {
        
        var uname = $('#uname').val();

        $.get('/checkUname', {uname: uname}, function (result) {

            if(result.uname == uname) {
                $('#error').text('Username already registered. Please use another Username.');
                $('#submit').prop('disabled', true);
            }

            else {
                $('#error').text('');
                $('#submit').prop('disabled', false);
            }
        });
    });
   
    $('input[type="checkbox"]').click(function(){
           
        var checkbox = $("#cbox").val();

        if($('#cbox').prop("checked") == true){
            $('#error').text('');
            $('#submit').prop('disabled', false);
        }
            
        else if($('#cbox').prop("checked") == false){
                $('#error').text('Please Agree to the Terms and Conditions');
                $('#submit').prop('disabled', true);
        }
        
    });
        
});