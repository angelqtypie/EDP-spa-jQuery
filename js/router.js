
//for typing effects
var typingEffect = new Typed(".multiText",{
  strings : ["coder", "web developer", "programmer", "broke"],
  loop : true,
  typeSpeed : 100,
  backSpeed : 80,
  backDelay : 1500
});

let sections = document.querySelectorAll('section');
window.onscroll =() => {
    sections.forEach(sec => { 
let top = window.scrollY;
let offset = sec.offsetTop -150;
let height = sec.offsetHeight;

if (top >= offset && top < offset + height) {
    sec.classList.add('show-animate');
}
//if want to use repeating animatiom on scroll, use this
else {
    sec.classList.remove('show-animate');
}
    }
)}
