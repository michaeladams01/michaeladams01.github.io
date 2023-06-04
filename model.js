// model.js

// load and visualize the data
// ...
async function run() {
    // Load and plot the original input data that we are going to train against.
    const data = await getData();
    const values = data.map(d => ({
      x: d.sepal_length,
      y: d.sepal_width,
    }));

    tfvis.render.scatterplot(
      {name: 'Sepal Width v Sepal Length'},
      {values}, 
      {
        xLabel: 'Sepal Length',
        yLabel: 'Sepal Width',
        height: 300
      }
    );

    // More code will be added below
}

async function getData() {
    const irisDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/training-data/iris.json');  
    const irisData = await irisDataReq.json();  
    const cleaned = irisData.map(d => ({
        sepal_length: d.sepal_length,
        sepal_width: d.sepal_width,
        species: d.species
    }))
    .filter(d => (d.sepal_length != null && d.sepal_width != null && d.species != null));

    return cleaned;
}

document.addEventListener('DOMContentLoaded', run);


// create the model
// ...
function createModel() {
    const model = tf.sequential(); 
    
    model.add(tf.layers.dense({inputShape: [2], units: 50, activation: 'relu'}));
    model.add(tf.layers.dense({units: 3, activation: 'softmax'}));
    
    return model;
}


// train the model
// ...
async function trainModel(model, inputs, labels) {
    model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.softmaxCrossEntropy,
      metrics: ['accuracy'],
    });
  
    const batchSize = 32;
    const epochs = 50;
  
    return await model.fit(inputs, labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(
        { name: 'Training Performance' },
        ['loss', 'accuracy'], 
        { height: 200, callbacks: ['onEpochEnd'] }
      )
    });
}


// make predictions
// ...
function doPrediction(model, inputData, classNames) {
    const classProbabilities = model.predict(inputData);
    classProbabilities.print();

    const classIndices = classProbabilities.argMax(-1);
    classIndices.print();

    classIndices.data().then(indices => {
        indices.forEach(index => {
            console.log(classNames[index])
        });
    });
}
