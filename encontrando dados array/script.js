const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",

            },

        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce é insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade, como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "OS 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log(totalCategories);
for(let category of booksByCategory) {
    console.log("Total de livros da categoria: ", category.category);
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores:", authors.length)
}
countAuthors()

function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }
    console.log("Total de livros do Augusto Cury: ", books)
}
booksOfAugustoCury()
