let navLinks = document.querySelectorAll('.nav_links a');
console.log(navLinks);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onmouseenter = function () {
        navLinks[i].style.color = "red";
    }
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onmouseleave = function () {
        navLinks[i].style.color = "white";
    }
}