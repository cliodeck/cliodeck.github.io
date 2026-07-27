(function() {
  'use strict';

  // The address never appears as a literal `mailto:` in the served HTML: it is
  // reassembled here from two data attributes. That defeats the harvesters that
  // scrape raw markup, which is the bulk of them. Readers without JavaScript
  // keep the `(at)` spelling in the page, still usable by a human.
  function init() {
    var slots = document.querySelectorAll('[data-email-user][data-email-domain]');

    slots.forEach(function(slot) {
      var address = slot.getAttribute('data-email-user') + '@' +
                    slot.getAttribute('data-email-domain');

      // Two kinds of slot. A link already written into the page — the header
      // one — keeps its label and only has its target swapped: without
      // JavaScript it leads to the Contact section, which spells the address.
      if (slot.tagName === 'A') {
        slot.href = 'mailto:' + address;
        return;
      }

      var link = document.createElement('a');
      link.href = 'mailto:' + address;
      link.textContent = address;

      slot.textContent = '';
      slot.appendChild(link);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
