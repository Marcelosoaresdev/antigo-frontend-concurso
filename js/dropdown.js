
function toggleDropdown(button) {
  const content = document.getElementById("dropdown-conteudo");
  const isOpen = content.classList.contains("show");

  content.classList.toggle("show");
  button.classList.toggle("open");
}
