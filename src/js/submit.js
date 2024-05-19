function submitOpen() {
  const submitStatus = document.querySelectorAll('#submit-status')
  const closeSubmit = document.querySelector('#submit-close')
  const submit = document.querySelector('.submit')
  const screen = document.querySelectorAll('.screen')
  let switcher = true

  function openFeedbackButton() {
    if (switcher) {
      Object.assign(submit.style, {
        display: 'block',
        position: 'absolute',
        top: '0'
      })

      screen.forEach((i) => (i.style.opacity = '.3'))
    } else {
      submit.style.display = 'none'
    }

    switcher = !switcher
  }
  function closeFeedbackButton() {
    submit.style.display = 'none'
    screen.forEach((i) => (i.style.opacity = '1'))
    switcher = !switcher
  }

  submitStatus.forEach((i) => i.addEventListener('click', openFeedbackButton))
  closeSubmit.addEventListener('click', closeFeedbackButton)

  console.log(window.screen.width)
}

export default submitOpen
