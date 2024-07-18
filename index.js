const bg = document.getElementById("hero-image");
const title = document.getElementById("hero-title");
const body = document.getElementById("body");

window.addEventListener('scroll', ()=>{
    const value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    title.style.top = value * 0.9 + 'px';
});