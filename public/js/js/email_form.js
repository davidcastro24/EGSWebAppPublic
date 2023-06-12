$(document).ready(function () {

  $("#contact-form").submit(function (event) {
    event.preventDefault();
    var formData = {
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      mobile: $("input[name=mobile]").val(),
      message: $("textarea[name=message]").val(),
    };

    
    emailjs.send("evolve_service", "evolve_01", formData).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        //alert('Your message has been sent successfully!');
        swal({
          title: "Email has been sent",
          text: "Thanks for reaching out, we'll contact you as soon as possible",
          icon: "success"
        });
        $("#contact-form")[0].reset();
      },
      function (error) {
        console.log("FAILED...", error);
        swal({
          title: "Oh No!",
          text: "Email couldn't be sent, we apologize for the inconvenience, please try again later.",
          icon: "error"
        });
      }
    );
  });
});

