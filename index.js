const inquirer = require('inquirer');
const fs = require('fs');


function generateSVG(results) {
  let finalShape;

  if (results.shape === 'square') {
    finalShape = new Square(results);
  } else if (results.shape === 'triangle') { 
    finalShape = new Triangle(results);
  } else if (results.shape === 'circle') {
    finalShape = new Circle(results);
  } 
  
  console.log(finalShape);
}

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
          choices: ['square', 'triange', 'circle']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What color would you like the shape to be?'
        }
      ])
      .then((results) => {
        console.log(results);
        generateSVG(results);
      });
}