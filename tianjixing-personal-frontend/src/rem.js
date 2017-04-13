(() => {

  function setHtmlFontSize() {
    setTimeout(() => {
      const html = document.querySelector('html')
      const clientWidth = document.documentElement.clientWidth || document.body.clientWidth
      const fontSize = clientWidth * 20 / 750
      html.style.fontSize = fontSize + 'px'
    }, 0)
  }

  setHtmlFontSize()
  window.onresize = setHtmlFontSize
})()
