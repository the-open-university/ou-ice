document.addEventListener('DOMContentLoaded', function(event) {
    const body = document.body;
    body.classList.add('fe-bdu-modal');

    // Inject modal script
    const loadDynamicScript = callback => {
        const existingScript = document.getElementById('micromodal');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/micromodal/dist/micromodal.min.js';
            script.id = 'micromodal';
            document.head.appendChild(script);

            script.onload = () => {
                if (callback) callback();
                if (window.MicroModal) {
                    //console.log('micormodal loaded');
                    window.MicroModal.init({
                        disableScroll: true,
                    });
                }
            };
        }

        if (existingScript && callback) callback();
    };

    // Inject CSS
    const loadCSS = callback => {
        const style = document.createElement('style');
        style.innerHTML = `
  .fe-bdu-modal .modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(34, 34, 34, 0.8);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 1; }
  .fe-bdu-modal .modal__container {
    background-color: #fff;
    padding: 30px;
    max-width: 744px;
    max-height: 100vh;
    border-radius: 3px;
    overflow-y: auto;
    box-sizing: border-box;
    margin: 15px; }
  .fe-bdu-modal .modal__header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center; }
  .fe-bdu-modal .modal__close {
    background: transparent;
    color: #0e56a7;
    border: 0;
    font-size: 14px;
    line-height: 22px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer; }
    .fe-bdu-modal .modal__close-inner {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center; }
      .fe-bdu-modal .modal__close-inner svg {
        margin-left: 6px; }
  .fe-bdu-modal .modal__logo {
    max-width: 77px; }
  .fe-bdu-modal .modal__heading {
    color: #0e56a7;
    font-size: 18px !important;
    line-height: 24px !important;
    margin: 17px 0 26px 0 !important;
    font-weight: normal !important; }
  .fe-bdu-modal .modal__content {
    padding: 0; }
  .fe-bdu-modal .modal__btn {
    background: #0e56a7;
    border-radius: 4px;
    transition: all 0.15s ease-out;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 0.875em;
    border: 1px solid #0e56a7;
    padding: 12px 22px;
    line-height: normal;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 22px; }
    .fe-bdu-modal .modal__btn:hover, .fe-bdu-modal .modal__btn:focus {
      text-decoration: underline; }
  .fe-bdu-modal .modal__btn-link {
    display: block;
    color: #0e56a7;
    text-decoration: underline;
    font-size: 14px;
    line-height: 22px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;}
  @media only screen and (min-width: 768px) {
    .fe-bdu-modal .modal__heading {
      font-size: 24px !important;
      line-height: 32px !important;
      margin: 25px 0 48px 0 !important; }
    .fe-bdu-modal .modal__container {
      margin: 0;
      padding: 60px; }
    .fe-bdu-modal .modal__close {
      top: 30px;
      right: 50px;
      font-size: 16px; }
    .fe-bdu-modal .modal__logo {
      max-width: inherit; }
    .fe-bdu-modal .modal__btn-link {
      font-size: 16px; }
    .fe-bdu-modal .modal__btn {
      margin-bottom: 30px; } }

@keyframes mmfadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

@keyframes mmfadeOut {
  from {
    opacity: 1; }
  to {
    opacity: 0; } }

@keyframes mmslideIn {
  from {
    transform: translateY(15%); }
  to {
    transform: translateY(0); } }

@keyframes mmslideOut {
  from {
    transform: translateY(0); }
  to {
    transform: translateY(-10%); } }
  .fe-bdu-modal .micromodal-slide {
    display: none; }
  .fe-bdu-modal .micromodal-slide.is-open {
    display: block; }
  .fe-bdu-modal .micromodal-slide[aria-hidden='false'] .modal__overlay {
    animation: mmfadeIn 0.3s cubic-bezier(0, 0, 0.2, 1); }
  .fe-bdu-modal .micromodal-slide[aria-hidden='false'] .modal__container {
    animation: mmslideIn 0.3s cubic-bezier(0, 0, 0.2, 1); }
  .fe-bdu-modal .micromodal-slide[aria-hidden='true'] .modal__overlay {
    animation: mmfadeOut 0.3s cubic-bezier(0, 0, 0.2, 1); }
  .fe-bdu-modal .micromodal-slide[aria-hidden='true'] .modal__container {
    animation: mmslideOut 0.3s cubic-bezier(0, 0, 0.2, 1); }
  .fe-bdu-modal .micromodal-slide .modal__container,
  .fe-bdu-modal .micromodal-slide .modal__overlay {
    will-change: transform;
    `;
        document.head.appendChild(style);

        style.onload = () => {
            if (callback) callback();
        };
    };

    // Build modal
    const buildModal = () => {
        const newModal = document.createElement('div');
        newModal.className = `fe-modal`;
        newModal.innerHTML = `
    <div class="modal micromodal-slide" id="modal-bdu" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-bdu-title">
        <header class="modal__header">
          <img class="modal__logo" src="https://assets.codepen.io/2087490/ou-bdu-modal-logo.jpg?format=auto" />
          <button class="modal__close" aria-label="Close modal" data-micromodal-close><span data-micromodal-close class="modal__close-inner">Close <svg data-micromodal-close width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.429 0L7 4.429 2.571 0 0 2.571 4.429 7 0 11.429 2.571 14 7 9.571 11.429 14 14 11.429 9.571 7 14 2.571z" fill="#0E56A7" fill-rule="evenodd"/></svg></span></button>
        </header>
        <main class="modal__content" id="modal-1-content">
          <h2 class="modal__heading">
            You are about to be taken to our student website where you can access information about course content and learning with The Open University.
          </h2>
          <a href="#" class="modal__btn js-modal-btn-continue" aria-label="Close and continue to student website">Continue to student website</a>
          <button type="button" class="modal__btn-link" aria-label="Close and go back to business & apprenticeships" data-micromodal-close>Back to Business & Apprenticeships</button>
        </main>
      </div>
    </div>
  </div>
  `;

        body.appendChild(newModal);
    };

    const linkModalEls = document.querySelectorAll("[data-bdu-exit='true']");
    //console.log(linkModalEls);
    linkModalEls.forEach(function(linkModalEl) {
        for (var i = 0; i < linkModalEls.length; i++) {
            linkModalEls[i].addEventListener('click', function(e) {
                const modalContinueEl = document.querySelector('.js-modal-btn-continue');
                //console.log(modalContinueEl);

                e.preventDefault();
                //console.log(this.getAttribute('href'));
                MicroModal.show('modal-bdu');

                modalContinueEl.href = this.getAttribute('href');
                return false;
            });
        }
    });

    loadDynamicScript();
    loadCSS();
    buildModal();
});
