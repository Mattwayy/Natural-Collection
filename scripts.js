const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000, 
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    768: {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    },
  },
});
const newSlideHTML = `      <div class="swiper-slide swiper-slide--custom">
                           
<a href="#" class="card">
    <div class="card__container">
        <div class="image-elem"></div>
        <div class="card__content">
            <h2 class="title">
                Fig. 1 (plant)
            </h2>
            <h3 class="subtitle">
                Имеется спорная точка зрения, гласящая примерно следующее: активно
                развивающиеся страны третьего мира своевременно верифицированы.
            </h3>
            <button class="card__btn">
                <span>Подробнее</span>
            </button>
        </div>
    </div>
</a>
<a href="#" class="card">
    <div class="card__container">
        <div class="image-elem"></div>
        <div class="card__content">
            <h2 class="title">
                Fig. 2 (flower)
            </h2>
            <h3 class="subtitle">
                Прежде всего, синтетическое тестирование влечет за собой процесс
                внедрения и модернизации условий.
            </h3>
            <button class="card__btn">
                <span>Подробнее</span>
            </button>
        </div>
    </div>
</a>
<a href="#" class="card">
    <div class="card__container">
        <div class="image-elem"></div>
        <div class="card__content">
            <h2 class="title">
                Fig. 3 (leaf)
            </h2>
            <h3 class="subtitle">
                Лишь непосредственные участники прогресса неоднозначны и будут в равной
                степени предоставлены сами себе для работы.
            </h3>
            <button class="card__btn">
                <span>Подробнее</span>
            </button>
        </div>
    </div>
</a>
<a href="#" class="card">
    <div class="card__container">
        <div class="image-elem"></div>
        <div class="card__content">
            <h2 class="title">
                Fig. 4 (wood)
            </h2>
            <h3 class="subtitle">
                Базовый вектор развития не даёт нам иного выбора, кроме определения
                новых предложений.
            </h3>
            <button class="card__btn">
                <span>Подробнее</span>
            </button>
        </div>
    </div>
</a></div>`;
const newSlideHTML2 = `   
 <div class="blog-slide">
<img src="src/images/collection/flowers.png" alt="flowers-collection" class="blog-img">
</div>`;

//2# slide
if (window.innerWidth < 768) {
      
    swiper.appendSlide(newSlideHTML);
}
const swiperMobile2 = document.querySelector('.mobile-swiper2');

let swiper2;


function mobileSlider() {
    if (window.innerWidth <= 768 && swiperMobile2.dataset.mobile == 'false') {
        swiper2 = new Swiper(swiperMobile2, {
            slidesPerView: 1,
            slideClass: 'blog-slide'
        });
        swiperMobile2.dataset.mobile = "true";
        if (swiper2.slides.length < 2) { 
            swiper2.appendSlide(newSlideHTML2);
        }
        
    }
    if (window.innerWidth < 768) {
        swiperMobile2.dataset.mobile = 'false';

        if(swiperMobile2.classList.contains('swiper.container.initialized')) {
            swiperMobile2.destroy();
        }
    }
}
 
mobileSlider();
window.addEventListener('resize', () => {
    mobileSlider();
});
document.getElementById("open-popup").addEventListener("click", function() {
    document.getElementById("popup").classList.toggle("hidden");
    addOverlay(); // Call function to add overlay
  });
  
  document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("hidden");
    removeOverlay(); // Call function to remove overlay
  });
  
  function addOverlay() {
    // Create overlay element
    const overlay = document.createElement("div");
    overlay.classList.add("overlay"); // Add class for styling
    document.body.appendChild(overlay); // Append overlay to the body
  }
  
  function removeOverlay() {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.parentNode.removeChild(overlay); // Remove overlay if exists
    }
  }








