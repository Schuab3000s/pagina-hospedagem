document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:3000/reservas")
      .then(response => response.json())
      .then(reservas => {
        const tbody = document.getElementById("reservas-table-body");
        reservas.forEach(reserva => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${reserva.nome}</td>
            <td>${reserva.email}</td>
            <td>${reserva.dataEntrada}</td>
            <td>${reserva.dataSaida}</td>
            <td>${reserva.adultos}</td>
            <td>${reserva.criancas}</td>
            <td>${reserva.observacoes}</td>
          `;
          tbody.appendChild(row);
        });
      })
      .catch(error => console.error("Erro ao buscar as reservas:", error));
  });