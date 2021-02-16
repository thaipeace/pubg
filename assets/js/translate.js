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
          defaultLang = lang.english

          const langBoxElm = document.getElementById("language-box")
          Object.keys(lang).forEach(key => {
            let item = document.createElement('div')
            item.innerHTML = lang[key].name
            item.addEventListener('click', (e) => {
              selectedLang = lang[e.target.innerText.toLowerCase()]
              translate()
              const onlyCali = document.getElementById('only-cali')
              if (selectedLang.name === "English" && !onlyCali.classList.contains('active')) {
                onlyCali.classList.add('active')
              } else if (selectedLang.name !== "English" && onlyCali.classList.contains('active')) {
                onlyCali.classList.remove('active')
              }
            })
            langBoxElm.appendChild(item)
          })

          const langElm = document.getElementById("language")
          langElm.addEventListener('click', () => {
            toggle(langBoxElm)
          })
        }
      }
    }
    rawFile.send(null);
  }

  function translate() {
    const items = document.querySelectorAll("[t]")
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
