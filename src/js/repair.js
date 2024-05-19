function swiperLogic() {
  const swiper = new Swiper('.swiper-repair', {
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
    let repairButton = document.querySelector('.repair__btn__show')
    let repairMain = document.querySelector('.repair__items')
    let repairBtnArrow = document.querySelector('.repair__btn__arrow')
    repairBtnArrow.style.transform = 'rotate(0deg)'
    repairMain.style.height = '170px'
    let repairSwitcher = false

    function repairShowButton() {
      if (repairSwitcher) {
        repairButton.textContent = 'Показать все'
        repairMain.style.height = '170px'
        repairBtnArrow.style.transform = 'rotate(0deg)'
      } else {
        repairButton.textContent = 'Скрыть'
        repairMain.style.height = 'auto'
        repairBtnArrow.style.transform = 'rotate(180deg)'
      }
      repairSwitcher = !repairSwitcher
    }

    repairButton.addEventListener('click', repairShowButton)
  })
}
export default swiperLogic
