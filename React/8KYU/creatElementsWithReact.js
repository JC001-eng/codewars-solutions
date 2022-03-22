var React = require("react");

function createElement(content = 'Hello World', tag = 'div', props = {}) {
  // create a react element here
  return React.createElement(tag, props, content);
}

function createUnorderedList(list = []) { 
  // create a react unordered list with children list items created form the list argument
  return React.createElement('ul', {}, list.map((str, i) => 
    React.createElement('li', {key : +i}, str)
  ));
}

//https://www.codewars.com/kata/55aac03755b0264947000138/train/javascript