const dzTheme = () => {
  document
    .querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a')
    .forEach((el, key, parent) => {
      const elClone = el.cloneNode(true)
      el.parentNode.replaceChild(elClone, el)
      elClone.addEventListener('click', function() {
        if (this.parentElement.classList.contains('open')) {
          this.parentElement.classList.remove('open')
        } else {
          this.parentElement.parentElement
            .getElementsByTagName('li')[0]
            .classList.remove('open')
          this.parentElement.classList.add('open')
        }
      })
    })
}

const headerFix = () => {
  window.addEventListener('scroll', function () {
    const menu = document.querySelector('.sticky-header')
    if (menu) {
      const top = window.pageYOffset || document.documentElement.offsetTop
      if (top > menu.offsetTop) {
        menu.classList.add('is-fixed')
      } else {
        menu.classList.remove('is-fixed')
      }
    }
  })
}

const scrollTop = () => {
  const scrollTop = document.querySelector('button.scroltop')
  if (scrollTop) {
    scrollTop.addEventListener('click', function () {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
    window.addEventListener('scroll', function () {
      const top = window.pageYOffset || document.documentElement.scrollTop
      if (top > 900) {
        scrollTop.classList.add('fade-in')
      } else {
        scrollTop.classList.remove('fade-in')
      }
    })
  }
}

(function () {
  dzTheme()
  headerFix()
  scrollTop()
})()
