document
  .getElementById("book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dorso = document.getElementById("dorso").value;
    const copertina = document.getElementById("copertina").value;
    const titolo = document.getElementById("titolo").value;

    const nuovoLibro = { dorso, copertina, titolo };

    let libreria = JSON.parse(localStorage.getItem("libreria")) || [];

    libreria.push(nuovoLibro);

    localStorage.setItem("libreria", JSON.stringify(libreria));

    alert("Libro aggiunto con successo!");
    document.getElementById("book-form").reset();
  });
