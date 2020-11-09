// MENU SHOP
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
// REMOVE MENU
const navLink = document.querySelectorAll('.nav_link')
const navMenu= document.getElementById('nav-menu')
function linkAction(){
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))
//CHANGE COLOR HEADER
window.onscroll = () => {
    const nav = document.getElementById("header");
    if (this.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  };

//SCROLL TOP
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset < 100) {
    toTop.classList.remove("active");
  } else {
    toTop.classList.add("active");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// SLIDE
try{
    const slides = document.querySelector(".slider").children;
    const indicatorImg = document.querySelector(".slider-indicator").children;
    
        for(let i = 0; i<indicatorImg.length; i++){
            indicatorImg[i].addEventListener("click",function(){
                for(let j = 0; j<indicatorImg.length; j++) {
                    indicatorImg[j].classList.remove("active");
                }
                this.classList.add("active");
                const id = this.getAttribute("data-id");
                for(let j=0; j<slides.length;j++){
                    slides[j].classList.remove("active")
                }
                slides[id].classList.add("active");
                
            })
        }
    
}catch{
    
}







