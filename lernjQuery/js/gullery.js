import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import './style.css';


<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>


Fancybox.bind('[data-fancybox="gallery"]', {
  tpl: {
    main: `<div class="fancybox__container has-sidebar" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
    <div class="fancybox__backdrop"></div>
    <div class="fancybox__cols">
      <div class="fancybox__col">
        <div class="fancybox__carousel"></div>
        <div class="fancybox__footer"></div>
      </div>
      <div class="fancybox__col">
        <div class="fancybox__data">
          <p class="mb-4 text-lg font-semibold">Hello</p>
          <p class="mb-4">
            Here you can place any content such as advertisement or gallery description.
          </p>
          <p class="mb-4">
            You can dynamically update this content using callbacks.
          </p>
          <p class="font-semibold" id="fancybox_title"></p>
        </div>
      </div>
    </div>
  </div>`,
  },

  idle: false,
  compact: false,
  dragToClose: false,

  showClass: 'f-fadeIn',
  hideClass: 'f-fadeOut',

  Images: {
    zoom: false,
  },

  Thumbs: {
    type: 'classic',
  },

  Toolbar: {
    parentEl: (toolbar) => {
      return toolbar.instance.container.querySelector('.fancybox__col');
    },
    items: {
      sidebar: {
        tpl: `<button class="f-button"><svg><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></button>`,
        click: (toolbar) => {
          toolbar.instance.container.classList.toggle('has-sidebar');
        },
      },
    },
    display: {
      left: ['infobar'],
      middle: [],
      right: ['sidebar', 'thumbs', 'close'],
    },
  },

  on: {
    'Carousel.ready Carousel.change': (fancybox) => {
      const titleVal = fancybox.getSlide().triggerEl.dataset.title;
      const titleEl = document.getElementById('fancybox_title');
      if (titleEl) {
        titleEl.innerHTML = titleVal;
      }
    },
  },
});


