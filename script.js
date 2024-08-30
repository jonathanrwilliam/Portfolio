//Function to hide scroll icon

document.addEventListener('DOMContentLoaded', function () {
  const scrollIndicator = document.getElementById('scroll-indicator');

  function handleScroll() {
    if (window.scrollY > 0) {
      scrollIndicator.classList.add('hidden');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
});

//Translation

document.addEventListener('DOMContentLoaded', function () {
  const btnLanguage = document.querySelector('.btn-language');
  const btnLanguageIcon = btnLanguage.querySelector('.icon-language');

  i18next.use(i18nextHttpBackend).init({
    lng: 'en',
    debug: true,
    backend: {
        loadPath: '/Portfolio/locales/{{lng}}/translation.json'
    }
}, function(err, t) {
    updateContent();
});

  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      const key = element.getAttribute('data-i18n');
      element.textContent = i18next.t(key);
    });
  }

  btnLanguage.addEventListener('click', function () {
    const newLang = i18next.language === 'en' ? 'pt' : 'en';
    i18next.changeLanguage(newLang, function (err, t) {
      updateContent();
      btnLanguage.childNodes[1].textContent = newLang.toUpperCase();
    });
  });
});


//Download CV

document.addEventListener('DOMContentLoaded', function() {
  var btnDownload = document.getElementById('btn-download');
  var btnLanguage = document.getElementById('btn-language');

  btnDownload.addEventListener('click', function() {

      var language = btnLanguage.textContent.trim();
      
      var pdfUrl;
      if (language === 'EN') {
          pdfUrl = 'documents/JonathanWilliam-EN.pdf';
      } else {
          pdfUrl = 'documents/JonathanWilliam-PT.pdf';
      }
      
      var tempLink = document.createElement('a');
      tempLink.style.display = 'none';
      tempLink.href = pdfUrl;
      tempLink.setAttribute('download', `JonathanWilliam-${language}.pdf`);
      
      document.body.appendChild(tempLink);
      
      tempLink.click();
      
      document.body.removeChild(tempLink);
  });
});

//show text block

document.addEventListener('DOMContentLoaded', function() {
  const textBlocks = document.querySelectorAll('.text-block');

  function checkVisibility() {
      const windowHeight = window.innerHeight;
      textBlocks.forEach(block => {
          const rect = block.getBoundingClientRect();
          if (rect.top < windowHeight && rect.bottom > 0) {
              block.classList.add('visible');
          } else {
              block.classList.remove('visible');
          }
      });
  }

  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
});