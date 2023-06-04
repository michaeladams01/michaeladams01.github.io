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
  }
let model;
async function loadModel() {
    model = await tf.loadLayersModel('model/model.json');
}
loadModel();

document.getElementById('prediction-form').addEventListener('submit', async function(e) {
    e.preventDefault();  // Prevent the form from being submitted

    let numberOfBedrooms = document.getElementById('bedrooms').value;
    let sizeInSquareFeet = document.getElementById('size').value;

    // TensorFlow.js expects a 2D array as input, so we need to reshape our inputs
    let inputTensor = tf.tensor2d([numberOfBedrooms, sizeInSquareFeet], [1, 2]);

    const prediction = model.predict(inputTensor);
    let predictedPrice = prediction.dataSync()[0];
    document.getElementById('prediction').textContent = `The predicted price for a ${numberOfBedrooms} bedroom house with a size of ${sizeInSquareFeet} square feet is ${predictedPrice}`;
});

let model;
async function loadModel() {
    model = await tf.loadLayersModel('model/model.json');
}
loadModel();

// Assume you have inputs for number of bedrooms and size in square feet
let numberOfBedrooms = 3;
let sizeInSquareFeet = 2000;

// TensorFlow.js expects a 2D array as input, so we need to reshape our inputs
let inputTensor = tf.tensor2d([numberOfBedrooms, sizeInSquareFeet], [1, 2]);

async function makePrediction(inputTensor) {
    const prediction = model.predict(inputTensor);
    let predictedPrice = prediction.dataSync()[0];
    console.log(`The predicted price for a ${numberOfBedrooms} bedroom house with a size of ${sizeInSquareFeet} square feet is ${predictedPrice}`);
}

makePrediction(inputTensor);


