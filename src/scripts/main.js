'use strict';

let savedScrollY = 0;

const lockScroll = () => {
  if (document.body.classList.contains('page--locked')) {
    return;
  }

  savedScrollY = window.scrollY;
  document.body.style.top = `-${savedScrollY}px`;
  document.body.classList.add('page--locked');
};

const unlockScroll = () => {
  if (!document.body.classList.contains('page--locked')) {
    return false;
  }

  document.body.classList.remove('page--locked');
  document.body.style.top = '';

  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, savedScrollY);
  document.documentElement.style.scrollBehavior = '';

  return true;
};

const createModalWindow = () => {
  const modal = document.createElement('div');

  modal.className = 'modal';

  const overlay = document.createElement('div');

  overlay.className = 'modal__overlay';

  const dialog = document.createElement('div');

  dialog.className = 'modal__dialog';

  const closeBtn = document.createElement('button');

  closeBtn.className = 'modal__close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '×';

  const title = document.createElement('h3');

  title.className = 'modal__title';
  title.textContent = 'Реєстрація';

  const modalForm = document.createElement('form');

  modalForm.className = 'modal__form';

  const nameLabel = document.createElement('label');

  nameLabel.className = 'visually-hidden';
  nameLabel.htmlFor = 'modal_name';
  nameLabel.textContent = "Ваше ім'я";

  const nameInput = document.createElement('input');

  nameInput.className = 'modal__input';
  nameInput.id = 'modal_name';
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = "Ім'я";
  nameInput.required = true;

  const emailLabel = document.createElement('label');

  emailLabel.className = 'visually-hidden';
  emailLabel.htmlFor = 'modal_email';
  emailLabel.textContent = 'Ваша електронна пошта';

  const emailInput = document.createElement('input');

  emailInput.className = 'modal__input';
  emailInput.id = 'modal_email';
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Email';
  emailInput.required = true;

  const submitBtn = document.createElement('button');

  submitBtn.className = 'button';
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Відправити';

  modalForm.appendChild(nameLabel);
  modalForm.appendChild(nameInput);
  modalForm.appendChild(emailLabel);
  modalForm.appendChild(emailInput);
  modalForm.appendChild(submitBtn);

  dialog.appendChild(closeBtn);
  dialog.appendChild(title);
  dialog.appendChild(modalForm);

  modal.appendChild(overlay);
  modal.appendChild(dialog);

  document.body.appendChild(modal);

  let closeTimeout = null;

  const open = () => {
    clearTimeout(closeTimeout);
    modal.classList.add('modal--open');
    lockScroll();
  };

  const close = () => {
    modal.classList.remove('modal--open');

    closeTimeout = setTimeout(unlockScroll, 500);
  };

  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close();
    }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    nameInput.value = '';
    emailInput.value = '';

    close();
  });

  return {
    open, close,
  };
};

const setupModalForButtons = () => {
  const buttons = document.querySelectorAll('.events__button, .header__button');

  if (!buttons.length) {
    return;
  }

  const modal = createModalWindow();

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      modal.open();
    });
  });
};

const setupMenuScrollLock = () => {
  const applyScrollLock = () => {
    if (window.location.hash === '#menu') {
      lockScroll();

      return;
    }

    const wasLocked = unlockScroll();

    const targetId = window.location.hash.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;

    if (wasLocked && target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.addEventListener('hashchange', applyScrollLock);
  applyScrollLock();
};

document.addEventListener('DOMContentLoaded', () => {
  setupModalForButtons();
  setupMenuScrollLock();
});
