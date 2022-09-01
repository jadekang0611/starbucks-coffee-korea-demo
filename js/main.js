const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      // hide the badges
      //   badgeEl.style.display = 'none';
      // gsap.to(에니메이션이 들어가는 요소, 지속시간, 옵션 )
      gsap.to(badgeEl, 0.5, {
        opacity: 0,
        display: 'none',
      });
      //
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // show the badges
      //   badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.5, {
        opacity: 1,
        display: 'block',
      });
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

// _.throttle(함수, 몇초의 한번 씩 함수가 시작해야 할지를 정하는 시간)

toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.9, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// SWIPER INITIALIZATION
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = true;
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (!isHidePromotion) {
    promotionEl.classList.add('show');
    promotionToggleBtn.classList.add('rotate');
  } else {
    // promotionEl.style.display = 'block';
    promotionEl.classList.remove('show');
    promotionToggleBtn.classList.remove('rotate');
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObj(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}

floatingObj('.floating1', 1, 15);
floatingObj('.floating2', 0.5, 15);
floatingObj('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('#year');
thisYear.textContent = new Date().getFullYear();
