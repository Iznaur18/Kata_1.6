function feedbackOpen() {
  const openStatus = document.querySelectorAll('#repair-status')
  const closeStatus = document.querySelector('#feedback-close')
  const feedback = document.querySelector('.feedback')
  const screen = document.querySelectorAll('.screen')
  let switcher = true

  function openFeedbackButton() {
    if (switcher) {
      Object.assign(feedback.style, {
        display: 'block',
        position: 'absolute',
        top: '0'
      })

      screen.forEach((i) => (i.style.opacity = '.3'))
    } else {
      feedback.style.display = 'none'
    }

    switcher = !switcher
  }
  function closeFeedbackButton() {
    feedback.style.display = 'none'
    screen.forEach((i) => (i.style.opacity = '1'))
    switcher = !switcher
  }

  openStatus.forEach((i) => i.addEventListener('click', openFeedbackButton))
  closeStatus.addEventListener('click', closeFeedbackButton)

  console.log(window.screen.width)
}

export default feedbackOpen
