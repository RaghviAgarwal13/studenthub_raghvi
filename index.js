// quotes
const quotes = [
{
text:"Don't watch the clock; do what it does. Keep going.",
author:"Sam Levenson"
},
{
text:"Success is the sum of small efforts repeated daily.",
author:"Robert Collier"
},
{
text:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt"
},
{
text:"Learning never exhausts the mind.",
author:"Leonardo da Vinci"
}
];

const quoteBtn = document.getElementById("newQuote");

quoteBtn.addEventListener("click", () => {

const random =quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").textContent =`"${random.text}"`;

document.getElementById("author").textContent =`- ${random.author}`;

});