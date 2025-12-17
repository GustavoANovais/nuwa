document.addEventListener("DOMContentLoaded", () => {
  const verMaisBtn = document.getElementById("verMaisBtn");
  const colecao = document.getElementById("colecao");

  verMaisBtn.addEventListener("click", () => {
    colecao.scrollIntoView({ behavior: "smooth" });
  });
});