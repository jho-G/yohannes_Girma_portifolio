
window.addEventListener("load",()=>{

    const loader =
    document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(()=>{

        loader.style.display = "none";

    },500);

});


const roles = [
    "Django Developer",
    "Backend Developer",
    "API Builder"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function typeEffect(){

    const currentRole =
    roles[roleIndex];

    if(charIndex < currentRole.length){

        typingElement.textContent +=
        currentRole.charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,70);

    }else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    const currentRole =
    roles[roleIndex];

    if(charIndex > 0){

        typingElement.textContent =
        currentRole.substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,40);

    }else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeEffect,500);
    }
}

typeEffect();


// DARK MODE

const toggleBtn =
document.getElementById("theme-toggle");

toggleBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    const isLightMode =
    document.body.classList.contains("light-mode");

    toggleBtn.textContent =
    isLightMode ? "☀️" : "🌙";

});


// MOBILE MENU

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});


// SCROLL REVEAL

ScrollReveal().reveal(
'.hero-text, .hero-image, .skill-card, .project-card, #about, #contact',
{
    distance:'60px',
    duration:1000,
    interval:200,
    origin:'bottom'
});


// EMAILJS

emailjs.init("TkGmZns9RarDVrb_g");

const form =
document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const submitBtn =
    form.querySelector("button");

    submitBtn.textContent =
    "Sending...";

    submitBtn.disabled = true;

    emailjs.sendForm(
        "service_6pzwalj",
        "template_6820rrr",
        form
    )

    .then(()=>{

        alert("Message sent!");

        form.reset();

    })

    .catch((error)=>{

        console.log(error);

        alert("Failed to send");

    })

    .finally(()=>{

        submitBtn.textContent =
        "Send Message";

        submitBtn.disabled = false;

    });

});


// CURSOR

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});
