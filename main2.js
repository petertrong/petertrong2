import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', function(){
  var card = documentElementById("card");
  var cardIcon = documnet.querySelector(".bx-card-alt");
  var cardTitle = this.documentElement("card2");
  var cardIcon2 = document.querySelector(".btn");

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

  document.getElementById('loginBtn').addEventListener('click', function() {
    // Thêm lớp 'loading' vào nút khi nhấp
    this.classList.add('loading');

    // Thêm lớp 'active' vào Newton's Cradle khi nhấp
    document.getElementById('newtonsCradle').classList.add('active');

    // Tạm dừng hiệu ứng trong khoảng thời gian animation (1.2s trong trường hợp này)
    setTimeout(function() {
      // Chuyển hướng đến trang login (hoặc thực hiện các hành động khác)
      window.location.href = "login.html";

      // Xóa lớp 'loading' khỏi nút sau khi chuyển hướng
      document.getElementById('loginBtn').classList.remove('loading');
      
      // Xóa lớp 'active' khỏi Newton's Cradle
      document.getElementById('newtonsCradle').classList.remove('active');
    }, 1200); // 1200 milliseconds là thời gian của hiệu ứng Newton's Cradle
  });


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
