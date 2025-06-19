function toggleDropdown(button) {
  const content = document.getElementById("dropdown-conteudo");
  const isOpen = content.classList.contains("show");

  content.classList.toggle("show");
  button.classList.toggle("open");
}

const conteudosCategoria = {
  reels: `
    <h3>Categoria 1 – REELS</h3>
    <p><strong>Objetivo:</strong> Criar um vídeo curto (Reel) com foco na venda dos minicursos da Vitis Souls.</p>
    <p><strong>Requisitos:</strong></p>
    <ul>
      <li>Duração entre 30 segundos e 1 minuto.</li>
      <li>Formatos aceitos: .mp4, .mov ou .avi.</li>
      <li>Utilizar os materiais obrigatórios fornecidos pela organização após a inscrição.</li>
      <li>Não utilizar bancos de imagens ou vídeos externos (vídeos reutilizados de outras pessoas em demais redes sociais).</li>
      <li>Não utilizar músicas protegidas por direitos autorais.</li>
      <li>Não utilizar logos ou marcas que não sejam da Vitis Souls.</li>
      <li>O conteúdo deve ser autoral e original.</li>
    </ul>
  `,
  pitch: `
    <h3>Categoria 2 – PITCH</h3>
    <p><strong>Objetivo:</strong> Apresentar uma ideia original e criativa para divulgar os minicursos da Vitis Souls.</p>
    <p><strong>Requisitos:</strong></p>
    <ul>
      <li>Apresentação em vídeo de no mínimo 1:30 e no máximo 3 minutos.</li>
      <li>Formato Horizontal 1920 x 1080.</li>
      <li>Pode ser em formato de fala direta, storytelling, roteiro teatral, entre outros.</li>
      <li>Deve conter definição de público-alvo, estratégia de divulgação, linguagem/estilo proposto.</li>
      <li>O conteúdo deve ser original e individual.</li>
      <li>Não utilizar trilhas ou conteúdos protegidos por direitos autorais.</li>
    </ul>
  `,
  designer: `
    <h3>Categoria 3 – DESIGNER</h3>
    <p><strong>Objetivo:</strong> Criar uma peça visual que represente os valores da Vitis Souls e promova seus minicursos com foco em transformação e conexão com o público jovem.</p>
    <p><strong>Requisitos:</strong></p>
    <ul>
      <li>Criar uma peça gráfica: post (formato 1080x1350px), story (1080x1920px), carrossel ou banner digital.</li>
      <li>Mínimo de 1 peça e máximo de 5 (estilo carrossel).</li>
      <li>Utilizar os elementos visuais oficiais da marca (enviados após a inscrição).</li>
      <li>Proibido o uso de imagens ou elementos de bancos pagos ou de terceiros.</li>
      <li>O material deve ser original e autoral.</li>
    </ul>
  `,
};

function abrirModal(categoria) {
  const modal = document.getElementById("modal-categoria");
  const texto = document.getElementById("modal-texto");
  texto.innerHTML = conteudosCategoria[categoria];
  feather.replace();
  modal.style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal-categoria").style.display = "none";
}

document.addEventListener("click", function (event) {
  const modal = document.getElementById("modal-categoria");
  const content = document.querySelector(".modal-content");

  if (
    modal.style.display === "flex" &&
    !content.contains(event.target) &&
    !event.target.closest(".categoria-card")
  ) {
    fecharModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-btn");

  submitBtn?.addEventListener("click", function () {
    // Redireciona direto para o backend que faz o redirect seguro
    window.location.href = "https://backend-concurso.onrender.com/redirect-to-checkout";
  });
});