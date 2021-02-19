var translate = function () {
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

  function loadLanguageFile() {
    let rawFile = new XMLHttpRequest()
    rawFile.open("GET", "../i18n.json", false)
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
              translate(["ar","de", "en","es", "es-MX", "fr", "hi", "id", "it", "jp", "kr", "ms", "pt-PT", "pt-BR", "ru", "th", "tr", "zh-Hans", "zh-Hant", "vi"])

              const onlyCali = document.getElementById('only-cali')
              if (selectedLang.name === "English" && !onlyCali.classList.contains('active')) {
                onlyCali.classList.add('active')
              } else if (selectedLang.name !== "English" && onlyCali.classList.contains('active')) {
                onlyCali.classList.remove('active')
              }
            })
            langBoxElm.appendChild(item)
          })
          translate(["ar","de", "en","es", "es-MX", "fr", "hi", "id", "it", "jp", "kr", "ms", "pt-PT", "pt-BR", "ru", "th", "tr", "zh-Hans", "zh-Hant", "vi"])

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

  return {
    loadLanguageFile: loadLanguageFile,
  }
}();

window.onload = function () {
  translate.loadLanguageFile()
}
