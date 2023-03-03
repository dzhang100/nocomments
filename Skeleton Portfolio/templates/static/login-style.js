// function to open the sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}
// function to close the sidebar
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}


(function(){
  // Initialize EmailJS with your user ID
  emailjs.init("_uRPpIN9nwMs99Co0"); //private key

  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Generate the email parameters
    var emailParams = {
      from_name: document.getElementById('name').value, //get the name within form
      from_email: document.getElementById('email').value, //get the email within form
      message: document.getElementById('message').value //get the message within the form
    };
    // Send the email
    emailjs.send('service_h946l08', 'template_kyi8yoj', emailParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
      }, function(error) { //code to display an error
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again later.');
      });
    });
  })();



var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

// var input = document.getElementById("note");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("submit").click();
//   }
// });


function deleteNote(noteId){
  fetch('/delete-note', {
    method: 'POST',
    body: JSON.stringify({noteId:noteId})
  }).then((_res) => {
    window.location.href = '/notes';
  });
}

