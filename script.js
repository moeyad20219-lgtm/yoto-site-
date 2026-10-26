const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toast = document.getElementById('toast');
let toastTimer;
document.getElementById('year').textContent = new Date().getFullYear();
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
}));
function showToast(message) {
  toast.textContent = message; toast.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 4500);
}
document.querySelectorAll('.buy-button').forEach(button => button.addEventListener('click', () => {
  showToast('طلبك: ' + button.dataset.product + ' — انضم إلى Discord للتأكد من التفاصيل وطريقة الدفع والاستلام.');
  setTimeout(() => window.open('https://discord.gg/XX5uxcBQx', '_blank', 'noopener,noreferrer'), 450);
}));
