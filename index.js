var index = function () {
  lang = {}
  selectedLang = {}
  defaultLang = {}

  function toggle(elm) {
    if (elm) {
      if (elm.classList.contains('active')) {
        elm.classList.remove('active')
      } else {
        elm.classList.add('active')
      }
    }
  }

  function handleAfterChangeLanguage() {
    // Hide Cali
    const onlyCali = document.getElementById('only-cali')
    if (selectedLang.code === "en" && !onlyCali.classList.contains('active')) {
      onlyCali.classList.add('active')
    } else if (selectedLang.code !== "en" && onlyCali.classList.contains('active')) {
      onlyCali.classList.remove('active')
    }

    // Highline selected language
    const langItemElms = document.querySelectorAll("#language-box > div")
    Array.from(langItemElms).forEach(item => {
      item.classList.remove('active')
      if (localStorage.getItem('lang') === item.getAttribute('t')) {
        item.classList.add('active')
      }
    })
  }

  function loadLanguageFile() {
    let rawFile = new XMLHttpRequest()
    rawFile.open("GET", "i18n.json", false)
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          let allText = rawFile.responseText
          lang = JSON.parse(allText)
          defaultLang = lang.en
          selectedLang = localStorage.getItem('lang') ? lang[localStorage.getItem('lang')] : lang.en
          translate()

          const langBoxElm = document.getElementById("language-box")
          Object.keys(lang).forEach(key => {
            let item = document.createElement('div')
            item.setAttribute('t', lang[key].code)
            item.innerHTML = `${lang[key].name}`
            item.addEventListener('click', (e) => {
              e.stopPropagation()
              selectedLang = lang[e.target.getAttribute('t')]
              localStorage.setItem('lang', selectedLang.code)
              translate()
              toggle(langBoxElm)
              translate(["ar", "de", "en", "es", "es-MX", "fr", "hi", "id", "it", "jp", "kr", "ms", "pt-PT", "pt-BR", "ru", "th", "tr", "zh-Hans", "zh-Hant", "vi"])
              handleAfterChangeLanguage()
            })
            langBoxElm.appendChild(item)
          })
          translate(["ar", "de", "en", "es", "es-MX", "fr", "hi", "id", "it", "jp", "kr", "ms", "pt-PT", "pt-BR", "ru", "th", "tr", "zh-Hans", "zh-Hant", "vi"])
          handleAfterChangeLanguage()

          const langElm = document.getElementById("language")
          langElm.addEventListener('click', () => {
            toggle(langBoxElm)
          })
        }
      }
    }
    rawFile.send(null);
  }

  function translate(keys) {
    let items = document.querySelectorAll("[t]")
    if (keys) {
      items = Array.from(items).filter(i => keys.includes(i.getAttribute("t")))
    }

    items.forEach(elem => {
      const key = elem.getAttribute("t")
      elem.innerHTML = selectedLang.data[key] ? selectedLang.data[key] : defaultLang.data[key]
    })
  }

  function init() {
    //Sticky menu onscroll
    window.addEventListener("scroll", () => {
      let top = window.scrollY
      if (top !== 0 && !document.body.classList.contains('scrolled')) {
        document.body.classList.add('scrolled')
      } else if (top === 0 && document.body.classList.contains('scrolled')) {
        document.body.classList.remove('scrolled')
      }
    }, false);

    //Show mobile menu
    const humburgerElm = document.getElementById('humburger')
    const closeMemuElm = document.getElementById('close-menu')
    const menuElm = document.getElementById('menu')
    if (humburgerElm) {
      humburgerElm.addEventListener('click', () => {
        toggle(menuElm)
      })

      closeMemuElm.addEventListener('click', () => {
        toggle(menuElm)
      })
    }

    //Onclick menu item
    if (menuElm) {
      menuElm.addEventListener('click', (e) => {
        e.stopPropagation();
        const menuItems = document.querySelectorAll('#menu a')
        menuItems.forEach(item => {
          if (e.target !== item) {
            item.classList.remove('active')
          } else if (!e.target.classList.contains('active')) {
            toggle(menuElm)
            e.target.classList.add('active')
          }
        })
      })
    }

    //Close cookie
    const cookieElm = document.getElementById('cookie')
    const cookieCloseElm = document.getElementById('cookie-close')
    cookieCloseElm.addEventListener('click', () => {
      cookieElm.classList.add('d-none')
    })

    //Onlick share
    const shareElm = document.getElementById('share')
    const modalElm = document.getElementById('modal')
    const modalContentElm = document.getElementById('modal-content')
    const modalCloseElm = document.getElementById('modal-close')
    shareElm.addEventListener('click', () => {
      toggle(modalElm)
      modalContentElm.innerHTML = ''
      const shareContent = document.createElement('div')
      shareContent.innerHTML = `
        <div>
          <div class="text-center mb-4" t="share-content">
            Share the news about<br/>PUBG: NEW STATE with your friends!
          </div>
          <div class="text-center" onclick="goToConfirm()">
            <img src="assets/fb.png" width="35" /> 
            <img src="assets/tw.png" width="35" class="mx-3" /> 
            <img src="assets/sh.png" width="35"/> 
          </div>
        </div>
      `
      modalContentElm.appendChild(shareContent)
      translate(['share-content'])
    })

    modalCloseElm.addEventListener('click', () => {
      toggle(modalElm)
    })
  }

  function adjustVideoOffset() {
    const videoWrapperElm = document.getElementById('video-wrapper')
    const videoElm = document.getElementById('video')
    const height = videoElm.offsetHeight * videoWrapperElm.offsetWidth / videoElm.offsetWidth

    videoElm.setAttribute('width', videoWrapperElm.offsetWidth)
    videoElm.setAttribute('height', height)

    const maskElm = document.getElementById('mask')
    const modalElm = document.getElementById('modal')
    const descElm = document.getElementById('desc')
    const closeVideoElm = document.getElementById('close-video')
    maskElm.addEventListener('click', () => {
      toggle(maskElm)
      toggle(descElm)
      for (var i = 0; i < modalElm.childNodes.length; i++) {
        if (modalElm.childNodes[i].className == "wrapper") {
          modalElm.childNodes[i].remove()
          break;
        }
      }
      toggle(modalElm)
      videoElm.style.zIndex = 2
      videoElm.style.position = 'relative'
      videoElm.setAttribute('src', `https://www.youtube.com/embed/YLwCfTA6LCQ?rel=0&autoplay=1&mute=true`)
      toggle(closeVideoElm)

      clickOutSide('video-wrapper', closeVideo)
    })
    
    closeVideoElm.addEventListener('click', () => {
      closeVideo()
    })
  }

  function closeVideo() {
    const videoElm = document.getElementById('video')
    const maskElm = document.getElementById('mask')
    const modalElm = document.getElementById('modal')
    const descElm = document.getElementById('desc')
    const closeVideoElm = document.getElementById('close-video')
    videoElm.setAttribute('src', '')
    toggle(modalElm)
    toggle(closeVideoElm)
    toggle(maskElm)
    toggle(descElm)
  }

  function clickOutSide(id, callback) {
    const elem = document.getElementById(id)

    document.addEventListener('click', () => {
      callback()
    })
    
    elem.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  }

  return {
    loadLanguageFile: loadLanguageFile,
    init: init,
    adjustVideoOffset: adjustVideoOffset,
    translate: translate
  }
}();

window.onload = function () {
  index.loadLanguageFile()
  index.init()
  index.adjustVideoOffset()
}

function goToConfirm() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(function () {
    const modalContentElm = document.getElementById('modal-content')
    const shareContent = document.createElement('div')
    shareContent.innerHTML = `
      <div>
        <div class="text-center mb-4" t="share-confirm">
          Copied successfully.<br/>
          Paste it wherever you would like.        
        </div>
        <div class="text-center">
          <span class="px-5 py-3 orange-bg text-dark text-uppercase"
            onclick="onConfirm()">
            <b t="confirm">confirm</b>
          </span>
        </div>
      </div>
    `

    modalContentElm.innerHTML = ""
    modalContentElm.appendChild(shareContent)
    index.translate(['share-confirm', 'confirm'])
  }, function (err) { });
}

function onConfirm() {
  document.getElementById("modal-close").click()
}

function moveTo(id) {
  const elem = document.getElementById(id)

  window.scrollTo({
    top: elem.offsetTop - 120,
    left: 0,
    behavior: 'smooth'
  });
}