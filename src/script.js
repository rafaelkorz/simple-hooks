// let score = 33

// if (score > 90) {
//   console.log('A');
// } else if (score >= 80 && score <= 89) {
//   console.log('B');
// } else if (score >= 70 && score <= 79) {
//   console.log('C');
// } else if (score >= 60 && score <= 69) {
//   console.log('D');
// } else if (score < 60) {
//   console.log('F');
// }

// let family = {
//   incomes: [250,23,22,85,98],
//   expenses: [250,26,4,84,93]
// }

// function calculateBalance(values) {
//   let total = 0;

//   for (let value of values) {
//     total += value
//   }
//   return total
// }

// let incomes = calculateBalance(family.incomes)
// let expenses = calculateBalance(family.expenses)

// console.log('A familia está com o saldo ' + (incomes - expenses < 0 ? 'negativo' : 'positivo'))
// console.log(`O saldo é de  ${incomes - expenses}`)

// const booksByCategory = [
//   {
//       category: "Riqueza",
//       books: [
//         {
//           title: "Os secredos da mente milionaria",
//           author: "T. Harv Eker",
//         },
//         {
//           title: "O homem mais rico da babilonia",
//           author: "Geogio S Clason",
//         },
//         {
//           title: " Pai rico pai pobre",
//           author: "Geogio S Clason",
//         },                
//       ]
//   },
//   {
//     category: "Inteligência Emocional",
//     books: [
//       {
//         title: "Você i insubstituivel",
//         author: "Augusto Cuty",
//       },
//       {
//         title: "Ansiedade - Como enfrentar o mal do século",
//         author: "Augusto Curu",
//       },
//       {
//         title: " Os 7 habitos das pessoas  altamentos eficazes",
//         author: "Stephen R. Covey",
//       },                
//     ]    
//   }
// ]
// console.log(`Número de categorias = ${booksByCategory.length}`)

// for (let category of booksByCategory) {
//   console.log('Total de livros categoria: ', category.category)
//   console.log(category.books.length)
// }

// countOfAuthor();

// function countOfAuthor() {
//   let books = [];

//   for(let category of booksByCategory){
//     for(let book of category.books) {
//       if (book.author.indexOf(book) === -1) {
//         books.push(book.title)
//       }
//     }
//   }

//   console.log(`Total de Autores ${books.length}`)
// }

// booksOfAuthor('Geogio S Clason');

// function booksOfAuthor(author) {
//   let books = [];

//   for(let category of booksByCategory){
//     for(let book of category.books) {
//       if (book.author === author) {
//         books.push(book.title)
//       }
//     }
//   }

//   console.log(`Livros do autor ${author}: ${books.join(', ')}`)
// }


const nomes = ['Rafael', 'Pedro', 'Mária']

const retornoNomes = nomes.forEach((nomeAtual) => {
  console.log(nomeAtual)
  return nomeAtual
})

console.log(retornoNomes)