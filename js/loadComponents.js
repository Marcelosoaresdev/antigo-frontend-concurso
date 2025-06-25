document.addEventListener('DOMContentLoaded', () => {
  const includes = document.querySelectorAll('[data-include-html]');
  const promises = Array.from(includes).map(async (el) => {
    const file = el.getAttribute('data-include-html');
    try {
      const resp = await fetch(file);
      if (!resp.ok) throw new Error('Network error');
      el.innerHTML = await resp.text();
    } catch (err) {
      el.innerHTML = '<p>Erro ao carregar ' + file + '</p>';
    }
    el.removeAttribute('data-include-html');
  });

  Promise.all(promises).then(() => {
    if (window.AOS) AOS.refresh();
    if (window.feather) feather.replace();
  });
});
