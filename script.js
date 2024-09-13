document.querySelector("form").addEventListener("submit", function(event) {
   
    event.preventDefault();
    
    const formData = {
      nome: document.querySelector("#nome").value,
      email: document.querySelector("#email").value,
      dataEntrada: document.querySelector("#dataEntrada").value,
      dataSaida: document.querySelector("#dataSaida").value,
      observacoes: document.querySelector("#observacoes").value,
      adultos: document.querySelector("#adultos").value,
      criancas: document.querySelector("#criancas").value
    };
  
    fetch("http://localhost:3000/reservas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na resposta da rede.");
      }
      return response.json();
    })
    .then(data => {
      var alertaModal = new bootstrap.Modal(document.getElementById('alertaModal'));
      alertaModal.show();
      console.log("Dados enviados:", data);
    })
    .catch(error => console.error("Erro ao enviar os dados:", error));
  });
  