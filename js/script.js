document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  const submitBtn = document.getElementById("submit-btn");
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const telefoneInput = document.getElementById("telefone");

  // Máscara de telefone com IMask
  const mask = IMask(telefoneInput, {
    mask: "(00) 00000-0000",
  });

  function validarCampos() {
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.replace(/\D/g, ""); // remove não números

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const telefoneValido = telefone.length === 11;

    if (nome && emailValido && telefoneValido) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  [nomeInput, emailInput, telefoneInput].forEach((input) => {
    input.addEventListener("input", validarCampos);
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.replace(/\D/g, "");

    try {
      const response = await fetch(
        "https://backend-concurso.onrender.com/create-preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, telefone }),
        }
      );

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Erro ao iniciar pagamento");
        console.log(data);
      }
    } catch (error) {
      alert("Erro na conexão com o servidor");
      console.error(error);
    }
  });
});
