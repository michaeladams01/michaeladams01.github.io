function changeTextAndColor() {
    var colors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107'];
    var quotes = [
      'The only way to do great work is to love what you do.',  
      'Believe you can and you’re halfway there.',  
      'Don’t wait. The time will never be just right.',  
      'Success is not the key to happiness. Happiness is the key to success.',  
      'Success usually comes to those who are too busy to be looking for it.',
      'The harder you work for something, the greater you’ll feel when you achieve it.',
      'Do what you can with all you have, wherever you are.',
      'You are never too old to set another goal or to dream a new dream.',
      'To see what is right and not do it is a lack of courage.'
    ];
    
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    document.body.style.backgroundColor = randomColor;
    document.getElementById('demo').innerText = randomQuote;

    
  }
  document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
  
  
