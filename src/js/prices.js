function swiperLogic() {
  const swiper = new Swiper('.swiper-prices', {
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
}
export default swiperLogic
