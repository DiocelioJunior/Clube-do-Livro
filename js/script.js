// Declaração global da variável books
const books = {
    book1: { 
        nome: "The Guardians",
        descricao: "...",
        autor: "Diocelio Jr.",
        capa: "./assets/img/TheGuardians.png"
    },
    book2: { 
        nome: "Título do Livro 2",
        descricao: "...",
        autor: "Autor do Livro 2",
        capa: "./assets/img/book2.jpg"
    },
    book3: { 
        nome: "Título do Livro 3",
        descricao: "Descrição do Livro 3",
        autor: "Autor do Livro 3",
        capa: "./assets/img/book3.jpg"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const cardBooks = document.getElementById("card-books");
    
    let count = 0;

    for (let key in books) {
        if (typeof books[key] === "object") {
            count++; 
        }
    }

    for (let i = 1; i <= count; i++) {
        cardBooks.innerHTML += `
            <div class="card" id="card${i}" style="background-image: url(${books[`book${i}`].capa});">
                <div class="card-txt">
                    <h2>${books[`book${i}`].nome}</h2>
                    <p>${books[`book${i}`].descricao}</p>
                    <p>Autor: ${books[`book${i}`].autor}</p>
                </div>
            </div>
        `;
    }

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function() {
            const cardId = card.id;

            if(cardId === "card1"){ 
                console.log(cardId)
                window.location.href = './The_Guardians.html'
            }

            if(cardId === "card2"){ 
                console.log(cardId)
                window.location.href = ''
            }

            if(cardId === "card3"){ 
                console.log(cardId)
                window.location.href = ''
            }
            
        });
    });
});

window.addEventListener("load", function() {
    const bookCover = document.getElementById("book-cover");
    
    if (window.location.href.endsWith("The_Guardians.html")) {
        bookCover.style.backgroundImage = `url('${books["book1"].capa}')`;
    } else {
        console.log("A página 'The Guardians' não foi carregada.");
    }
});
