(function() {
  'use strict';

  var LANG_KEY = 'lang-preference';

  function getStoredLang() {
    return localStorage.getItem(LANG_KEY);
  }

  function getBrowserLang() {
    var lang = navigator.language || navigator.userLanguage || '';
    return lang.startsWith('fr') ? 'fr' : 'en';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }

  function toggleLang() {
    var current = document.documentElement.getAttribute('data-lang') || 'en';
    var next = current === 'en' ? 'fr' : 'en';
    localStorage.setItem(LANG_KEY, next);
    applyLang(next);
  }

  function init() {
    var stored = getStoredLang();
    var lang = stored || getBrowserLang();
    applyLang(lang);

    var toggles = document.querySelectorAll('.lang-toggle');
    toggles.forEach(function(toggle) {
      toggle.addEventListener('click', toggleLang);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
