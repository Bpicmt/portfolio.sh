

// Toggle menu

const ham = document.querySelector(".hamberger");
const menu = document.querySelector("#menu");
const menu_item = document.querySelectorAll("#menu li a");

ham.addEventListener('click', ()=> {
    ham.classList.toggle('active');
    menu.classList.toggle('active');
})

menu_item.forEach((item)=>{
    item.addEventListener("click", ()=> {
        ham.classList.toggle('active');
        menu.classList.toggle('active');
    })
})


/************** Nav-bar bg-change **************/

const nav_bg = document.querySelector("#header .nav-bar");
const span_color = document.querySelector("#span_color");

document.addEventListener("scroll", ()=> {
    var scroll = window.scrollY;
    if (scroll>100) {
        nav_bg.style.backgroundColor = "#ff4900";
        span_color.style.color = "#fff";
    }
    else {
        nav_bg.style.backgroundColor = "#1521288a";
        span_color.style.color = "#ff4900";
    }
})








// const hamberger = document.querySelector(".hamberger");
// const menu = document.querySelector(".nav-list ul");
// const menu_item = document.querySelectorAll(".nav-list ul li a");

// hamberger.addEventListener("click", ()=> {
//     hamberger.classList.toggle("active");
//     menu.classList.toggle("active");
// })

// menu_item.forEach(item=>{
//     item.addEventListener("click", ()=>{
//         hamberger.classList.toggle("active");
//         menu.classList.toggle("active");
//     })
// })
