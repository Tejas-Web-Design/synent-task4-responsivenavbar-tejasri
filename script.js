/* =========================
MOBILE NAVIGATION
========================= */

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

if(hamburger){

hamburger.addEventListener(
"click",
()=>{

navLinks.classList.toggle("active");

hamburger.classList.toggle("open");

});

}

/* CLOSE MENU WHEN LINK CLICKED */

document
.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener(
"click",
()=>{

navLinks.classList.remove("active");

hamburger.classList.remove("open");

});

});

/* =========================
DARK / LIGHT MODE
========================= */

const themeToggle =
document.getElementById("themeToggle");

const body =
document.body;

/* LOAD SAVED THEME */

if(localStorage.getItem("theme")
=== "light"){

body.classList.add("light-mode");

themeToggle.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener(
"click",
()=>{

body.classList.toggle(
"light-mode"
);

if(body.classList.contains(
"light-mode"
)){

localStorage.setItem(
"theme",
"light"
);

themeToggle.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem(
"theme",
"dark"
);

themeToggle.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});

