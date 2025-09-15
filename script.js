function sendWhatsApp(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  const numero = "5567992699299"; // <-- Substitua pelo número oficial da Enam Tech
  const texto = `Olá, eu sou ${nome},%0A${mensagem}`;
  const url = `https://wa.me/${numero}?text=${texto}`;
  window.open(url, "_blank");
}

