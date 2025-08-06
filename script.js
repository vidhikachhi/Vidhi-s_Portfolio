
  function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_smwd3ux", "template_24am6e5", parms)
      .then(() => {
        alert("Your email has been sent");
      })
      .catch((error) => {
        alert("Failed to send email: " + error);
      });
  }
 