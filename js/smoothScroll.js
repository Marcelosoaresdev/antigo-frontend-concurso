document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // impede o # de aparecer na URL

      const id = this.getAttribute("href").substring(1);
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });

        // Remove o hash da URL sem recarregar a página
        history.replaceState(null, null, window.location.pathname);
      }
    });
  });
});
