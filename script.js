const DISCORD_INVITE = 'https://discord.gg/XX5uxcBQx';
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
// Keep all service/product requests directed to the current YOTO Discord invite.
document.querySelectorAll('a[href*="discord.gg/"]').forEach(link => {
  link.href = DISCORD_INVITE;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
