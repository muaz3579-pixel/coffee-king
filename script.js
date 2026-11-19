const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

// Footer year
$('#yr').textContent = new Date().getFullYear();

// Mobile menu
const burger = $('#burger'), list = $('#menuList');
burger.addEventListener('click', () => {
  const open = list.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
$$('#menuList a').forEach(a => a.addEventListener('click', () => {
  list.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

// Menu tabs
$$('.tab').forEach(t => t.addEventListener('click', () => {
  $$('.tab').forEach(x => x.setAttribute('aria-selected', x === t));
  $$('.panel').forEach(p => p.classList.toggle('on', p.id === t.dataset.p));
}));

// Scroll reveal
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
}), { threshold: .15 });
$$('.rev').forEach(el => io.observe(el));

// Contact form validation
const form = $('#form'), ok = $('#ok');
const rules = {
  name: v => v.trim().length < 2 && 'Please enter your full name.',
  email: v => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) && 'Please enter a valid email address.',
  message: v => v.trim().length < 10 && 'Message should be at least 10 characters.'
};
const check = k => {
  const input = document.getElementById(k), msg = rules[k](input.value) || '';
  $('#e-' + k).textContent = msg;
  input.setAttribute('aria-invalid', !!msg);
  return !msg;
};
Object.keys(rules).forEach(k => document.getElementById(k).addEventListener('input', () => check(k)));
form.addEventListener('submit', e => {
  e.preventDefault();
  if (Object.keys(rules).map(k => check(k)).every(Boolean)) { ok.classList.add('on'); form.reset(); }
});