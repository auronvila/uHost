let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let negativeButton = document.querySelector('.modal__action--negative');
let selectPlanButtons = document.querySelectorAll('.plan .button');

selectPlanButtons.forEach(item => item.addEventListener('click', () => {
  modal.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 200)
}));

negativeButton?.addEventListener('click', closeModal)

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block'
  // backdrop.style.display = 'block'

  // backdrop.className = 'open' this will override the whole class of the backdrop
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 200)
});

backdrop.addEventListener('click', () => {
  closeModal()
})

function closeModal() {
  // backdrop.style.display = 'none'
  // modal.style.display = 'none'
  modal?.classList.remove('open');
  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 200)
}
