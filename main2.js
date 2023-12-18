import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', function(){
  var card = documentElementById("card");
  var cardIcon = documnet.querySelector(".bx-card-alt");

  cardIcon.onclick = function(){
    card.style.display = "block";
  };
  window.onclick = function(event){
    if(event.target == card){
      card.style.display = "none";
    }
  }

}
)
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let section=document.querySelectorAll('.section');
  let navlink=document.querySelectorAll('.header .navbar a');
  window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navlink.forEach(Links=>{
                links.classList.remove('active')
                document.querySelectorAll('header nav a[href*= '+id+']').classList.add('active');
            })
        }
    })
        
  }