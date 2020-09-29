//Write your Typescript code here

document.getElementById("AddButton").addEventListener('click', addItem);
let input = document.getElementById("newItem");
let unhealthyList = document.getElementById("listUnhealthy"); 

function addItem(e:MouseEvent)
{
  console.log("in the addItem function");
  let inputText = (<HTMLInputElement>input).value;

  console.log("input:" + inputText);

  let newLi = document.createElement('li');
  let newText = document.createTextNode(inputText)
  newLi.appendChild(newText)
  newLi.setAttribute('class', 'unhealthy')
  unhealthyList.appendChild(newLi)
}