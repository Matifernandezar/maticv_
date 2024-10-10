let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll ('header nava'); 

window.onscroll = () => {
    sections.forEach(sec => {
   let top = window.scrollY;
   let offset = sec.offsetTop - 150;
   let height = sec.offsetHeight;
   let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(Links => {
         Links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ' ]').classList.add
            ('active')
        })
    }
})
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
document.querySelector(".bxl-gmail").addEventListener("click", function() {
    const email = "matifernandez178c@gmail.com"; // Tu correo
    const subject = "Contacto"; // Asunto del correo
    const body = "Hola Matías...."; // Cuerpo del correo

    // Redirige al esquema mailto
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
