const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./lib/shapes.js");

// Function to generate the final SVG and save it. 
function generateSVG(results) {
  let finalShape;

  if (results.shape === 'square') {
    finalShape = new Square(results);
  } else if (results.shape === 'triangle') { 
    finalShape = new Triangle(results);
  } else if (results.shape === 'circle') {
    finalShape = new Circle(results);
  } 

  // Converts input text to uppercase and sets the SVG file's name. 
  const text = results.text.toUpperCase();
  const fileName = `${text}.svg`;

  // If the shape is a triangle, the text needs to be moved down to fit in the shape.
  if(results.shape === 'triangle') {
    var textTag= `<text x="100" y="180" text-anchor="middle" font-size="80" fill="${results.textColor}">${text}</text>`;
  } else {
    var textTag= `<text x="100" y="120" text-anchor="middle" font-size="80" fill="${results.textColor}">${text}</text>`;
  }

  // Sets size of SVG
  const svgTag = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">`;

  // Combines all parameters to create the final SVG.
  const completeSVG = svgTag + finalShape.render() + textTag + `</svg>`;

  // Writes SVG to file. 
  fs.writeFile(fileName, completeSVG, (err) => {
    if (err) throw err;
    console.log('Logo has been generated and saved!');
  });
}

// Function to prompt the user for input.
function prompter(){
  inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Hello. What text would you like to use? Up to 3 characters.'
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color would you like the text to be?'
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Please choose your shape.',
          choices: ['square', 'triangle', 'circle']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What color would you like the shape to be?'
        }
      ])
      .then((results) => {
        // Validation for text length
        if (results.text.length > 3) {
          console.log('Please enter text with 3 characters or less.');
          return prompter();
        } else {
        generateSVG(results);
        }
      });
}

// Calls the prompter function to start the application. 
prompter();