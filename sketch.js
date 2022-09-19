const container = document.querySelector('#container');
const gridnum = document.querySelector('#gridnum')
const button = document.querySelector('#button')
button.addEventListener('click',createGrid)
button.grids = gridnum.value;


function createGrid(evt){

  container.replaceChildren();
  button.grids = gridnum.value;
  if(evt.currentTarget.grids  > 100){
    alert("number must be less than 100")
    return;
  }
  var grid = [];
  console.log(`round is ${evt.currentTarget.grids}`)
  for(i = 0; i < evt.currentTarget.grids*2; i++){
 
    grid[i] = document.createElement('div');
    grid[i].classList.add('squares'); 
    grid[i].setAttribute('style', 'height: 10px');
    //grid[i].textContent = i + "";
    grid[i].addEventListener('mouseenter',changeColor);
      
    container.appendChild(grid[i]);
    
  }
}



function changeColor(){
  this.setAttribute('style', 'color: blue; background: white; height: 10px');       
}