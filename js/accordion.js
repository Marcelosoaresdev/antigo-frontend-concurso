function toggleAccordion(header) {
  const item = header.parentElement;
  const body = header.nextElementSibling;
  const icon = header.querySelector(".accordion-icon");

  const isOpen = header.classList.contains("active");

  // Fecha todos
  document
    .querySelectorAll(".accordion-header")
    .forEach((h) => h.classList.remove("active"));
  document.querySelectorAll(".accordion-body").forEach((b) => {
    b.style.maxHeight = null;
    b.classList.remove("open");
  });

  if (!isOpen) {
    header.classList.add("active");
    body.classList.add("open");
    body.style.maxHeight = body.scrollHeight + "px";
  }
}
