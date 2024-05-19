function sidebarOpen() {
  const openButton = document.querySelector('#burger-button')
  const closeButton = document.querySelector('#close-button')
  const sidebar = document.querySelector('.sidebar')
  const screen = document.querySelectorAll('.screen')
  let switcher = true

  function openMenuButton() {
    if (switcher) {
      Object.assign(sidebar.style, {
        display: 'block',
        position: 'absolute',
        top: '0'
      })

      screen.forEach((i) => (i.style.opacity = '.3'))
    } else {
      sidebar.style.display = 'none'
    }

    switcher = !switcher
  }
  function closeMenuButton() {
    sidebar.style.display = 'none'
    screen.forEach((i) => (i.style.opacity = '1'))
    switcher = !switcher
  }

  openButton.addEventListener('click', openMenuButton)
  closeButton.addEventListener('click', closeMenuButton)

  console.log(window.screen.width)
}

export default sidebarOpen
