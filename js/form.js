document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-btn");

  submitBtn?.addEventListener("click", function () {
    // Redireciona direto para o backend que faz o redirect seguro
    window.location.href =
      "https://backend-concurso.onrender.com/redirect-to-checkout";
  });
});
