var quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "In a gentle way, you can shake the world. - Mahatma Gandhi",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer"
];

function changeText() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("demo").innerHTML = quotes[randomIndex];
}
