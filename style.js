

let texts = "Frontend Developer";
let animatedtexts = document.querySelector('.nameJade');
let indexChar = 0
let isForward = true;

function animate(){
    if(isForward && indexChar < texts.length){
        animatedtexts.textContent = texts.slice(0, indexChar+1);
        indexChar++;
    }else if(!isForward && indexChar > 0){
        indexChar--;
        animatedtexts.textContent = animatedtexts.textContent.slice(0, indexChar);
        
    }else{
        isForward = !isForward;
    }

    if(indexChar === texts.length){
        isForward = false;
    }else if(indexChar === 0){
        isForward = true;
       
    }

    setTimeout(animate, 200);
   
}
animate();


document.addEventListener("DOMContentLoaded", function () {
    // Show popup when the page loads
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popup").style.display = "block";

    // Close popup on button click
    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("popupOverlay").style.display = "none";
        document.getElementById("popup").style.display = "none";
    });
});



// for Email users send

(function(){
    emailjs.init("kbvhfzKBrzaar5NsR"); // Your Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let Username = document.getElementById('name');
    let Useremail = document.getElementById('email');
    let UsreMessage = document.getElementById('message');
    let buttonSend = document.getElementById('btnSend');


    let serviceID = "service_6bamp6j";  // Your Service ID
    let templateID = "template_xwlo02t"; // Your Template ID

    let templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            Swal.fire({
                title: "Success!",
                width: "200px",
                text: "Message sent successfully!",
                icon: "success",
                confirmButtonText: "OK"
            });

            Username.value = "";
            Useremail.value = "";
            UsreMessage.value= "";

            console.log("Success:", response);
        })
        .catch(function(error) {
            Swal.fire({
                icon: "error",
                width: "200px",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });

            Username.value = "";
            Useremail.value = "";
            UsreMessage.value= "";
            console.error("Error:", error);
        });
});


