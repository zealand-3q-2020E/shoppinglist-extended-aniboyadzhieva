//Write your Typescript code here

//add unhealthy item
document.getElementById("AddUnhealthyButton").addEventListener('click', addUnhealthyItem);
let input = document.getElementById("newUnhealthyItem");
let unhealthyList = document.getElementById("listUnhealthy"); 

function addUnhealthyItem(e:MouseEvent)
{
  console.log("in the addUnhealthyItem function");
  let inputText = (<HTMLInputElement>input).value;

  console.log("input:" + inputText);

  let newLi = document.createElement('li');
  let newText = document.createTextNode(inputText)
  newLi.appendChild(newText)
  newLi.setAttribute('class', 'unhealthy')
  unhealthyList.appendChild(newLi)
}

//add healthy item
document.getElementById("AddHealthyButton").addEventListener('click', addHealthyItem)
let input2 = document.getElementById("newHealthyItem")
let healthyList = document.getElementById("list")

function addHealthyItem(e:MouseEvent)
{
    console.log("in the addHealthy function")
    let inputText2 = (<HTMLInputElement>input2).value;
    console.log("input2: " + inputText2)    

    let newLi = document.createElement('li')
    let newText = document.createTextNode(inputText2)
    newLi.appendChild(newText)
    newLi.setAttribute('class', 'healthy')
    healthyList.appendChild(newLi) 

}