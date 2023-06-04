function changeTextAndColor() {
    var colors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107'];
    var quotes = [
      'The only way to do great work is to love what you do.',
      'Believe you can and you’re halfway there.',
      'Don’t wait. The time will never be just right.',
      'Success is not the key to happiness. Happiness is the key to success.',
      'Success usually comes to those who are too busy to be looking for it.'
    ];
    
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    document.body.style.backgroundColor = randomColor;
    document.getElementById('demo').innerText = randomQuote;
 
