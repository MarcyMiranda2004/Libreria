// rimuovi.js
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTitle = document.getElementById("search-title").value.trim().toLowerCase();
    const libreria = JSON.parse(localStorage.getItem("libreria")) || [];
    const searchResults = libreria.filter(libro => libro.titolo.toLowerCase().includes(searchTitle));

    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ''; // Pulisce i risultati precedenti

    if (searchResults.length > 0) {
        searchResults.forEach((libro) => {
            const resultDiv = document.createElement("div");
            resultDiv.className = "book";
            resultDiv.innerHTML = `
                <img class="dorso" src="${libro.dorso}" alt="Dorso del Libro">
                <img class="copertina" src="${libro.copertina}" alt="Copertina del Libro">
                <p>${libro.titolo}</p>
                <button class="remove" data-title="${libro.titolo}">Rimuovi</button>
            `;

            // Gestisce la rimozione del libro
            const removeButton = resultDiv.querySelector(".remove");
            removeButton.addEventListener("click", function () {
                const titoloDaRimuovere = removeButton.getAttribute("data-title");

                // Trova il libro da rimuovere usando il titolo
                const index = libreria.findIndex(libro => libro.titolo === titoloDaRimuovere);

                if (index !== -1) {
                    libreria.splice(index, 1); // Rimuove il libro dall'array
                    localStorage.setItem("libreria", JSON.stringify(libreria)); // Aggiorna il localStorage
                    searchResultsContainer.removeChild(resultDiv); // Rimuove il libro dai risultati
                    alert(`Il libro "${titoloDaRimuovere}" è stato rimosso.`);
                }
            });

            searchResultsContainer.appendChild(resultDiv);
        });
    } else {
        searchResultsContainer.innerHTML = "<p>Nessun libro trovato con quel titolo.</p>";
    }
});
