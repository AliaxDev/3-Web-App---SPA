$("#contactform").validate({
    rules: {
        name: "required",
        email: "required",
        phone: {
            required: true,
            minlength: 10,
            number: true
        }
    },
    message: {
        name: "Please enter your name",
        email: "Please enter your email id",
        phone: {
            required: "Please enter mobile no.",
            minlength: "Please enter valid mobile no."
        }
    },
    /* 
    submitHandler: function() {
        $.ajax({
            url: 'sendform.js',
            data: $('#contactform').serialize(),
            type: 'POST',
            beforeSend: function() {
                $("#loading-image").show();
                },
            success: function(data) {
                //alert('mail send');
             $("#loading-image").hide();  
             $("#success").show().fadeIn(1000);
             $('#contactform').each(function() {
              this.reset()
             })
            },
            error: function(data) {
                alert('error send');
             $("#error").show().fadeIn(1000)
            }
           })
    }
    */
});