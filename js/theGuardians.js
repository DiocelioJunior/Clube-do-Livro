
function adicionarCapitulos(capitulos) {
    var chaptersDiv = document.getElementById("chapters");
    var chaptersHTML = "";

    capitulos.forEach(function (capitulo) {
        chaptersHTML += "<div class='chapter'>";
        chaptersHTML += "<h2>Capítulo " + capitulo.numero + ":</h2>";
        chaptersHTML += "<h3>" + capitulo.titulo + "</h3>";
        chaptersHTML += "<p>" + capitulo.texto + "</p>";
        chaptersHTML += "</div>";
        chaptersHTML += "<hr>";
    });

    chaptersDiv.innerHTML = chaptersHTML;

    const chaptersLinks = document.querySelectorAll(".chapter");
    chaptersLinks.forEach(chapter => {
        chapter.addEventListener("click", function() {
            alert("Abrir Modal");
        });
    });
}

function carregarCapitulos() {
    fetch('./TheGuardians.json')
        .then(response => response.json())
        .then(data => adicionarCapitulos(data.capitulos))
        .catch(error => console.error('Erro ao carregar os capítulos:', error));
}

window.onload = carregarCapitulos;
