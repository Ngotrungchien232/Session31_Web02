document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");

  openModal.onclick = () => (modal.style.display = "flex");
  closeModal.onclick = () => (modal.style.display = "none");
});
