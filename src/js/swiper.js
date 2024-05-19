function swiperLogic() {
  const swiper = new Swiper('.swiper-brand', {
    direction: 'horizontal',
    loop: false,

    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    breakpoints: {
      768: {
        toggle: false,
        loop: false,
        spaceBetween: 'auto',
        slidesPerView: 'auto',
        centeredSlides: false
      }
    }
  })

  window.addEventListener('DOMContentLoaded', function () {
    let brandButton = document.querySelector('.brand__btn__show')
    let brandMain = document.querySelector('.brand__items')
    let brandBtnArrow = document.querySelector('.brand__btn__arrow')
    brandBtnArrow.style.transform = 'rotate(0deg)'
    brandMain.style.height = '170px'
    let brandSwitcher = false

    brandButton.addEventListener('click', function () {
      if (brandSwitcher) {
        brandButton.textContent = 'Показать все'
        brandMain.style.height = '170px'
        brandBtnArrow.style.transform = 'rotate(0deg)'
      } else {
        brandButton.textContent = 'Скрыть'
        brandMain.style.height = 'auto'
        brandBtnArrow.style.transform = 'rotate(180deg)'
      }
      brandSwitcher = !brandSwitcher
    })
  })
}
export default swiperLogic
