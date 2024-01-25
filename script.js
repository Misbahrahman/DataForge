let columns = 27;
let rows = 50;



let alpha_section = document.getElementById("alpha_header");

let cell = document.createElement("div");
cell.className = "iRow";
alpha_section.appendChild(cell);

let row1 = document.getElementById("row1");
for (let j = 1; j <= 50; j++) {
  let cell = document.createElement("div");
  cell.innerText = j;
  cell.className = "row1_cell";

  row1.appendChild(cell);
}

let container = document.getElementById("cells");

for (let i = 1; i < 27; i++) {
  let cell = document.createElement("div");
  cell.innerText = String.fromCharCode(64 + i);
  cell.className = "cell";

  alpha_section.appendChild(cell);

  let divEle = document.createElement("div");
  divEle.className = "cellCol";

  //Creating cells
  for (let j = 1; j <= 50; j++) {
    let cellToAdd = document.createElement("div");
    cellToAdd.className = "body_cell";
    cellToAdd.id = String.fromCharCode(64 + i) + j;
    cellToAdd.contentEditable = true;
    cellToAdd.addEventListener("focus", onFucused);
    divEle.appendChild(cellToAdd);
  }

  container.appendChild(divEle);
}

//ADDING FUNCTIONS

let selectedCell = document.getElementById("Formula_selected_cell");
let cellSelected = null;
let selectedCellId = null;

function onFucused(event) {
  selectedCellId = event.target.id;
  selectedCell.innerText = selectedCellId;
  cellSelected = event.target;
}

//Bold Func
let boldBtn = document.getElementById("bold");
boldBtn.addEventListener("change", makeBold);

function makeBold() {
  if (boldBtn.checked && cellSelected) {
    cellSelected.style.fontWeight = "bold";
  } else {
    cellSelected.style.fontWeight = "normal";
  }
}

//Italics Func


let iBtn = document.getElementById("italics");
iBtn.addEventListener("change" , makeI);

function makeI() {
  if (iBtn.checked && cellSelected) {
      cellSelected.style.fontStyle = 'italic';
  } else {
      cellSelected.style.fontStyle = 'normal';
  }
}

//underline

let uBtn = document.getElementById("underline");
uBtn.addEventListener("change", makeU);

function makeU() {
    if (uBtn.checked && cellSelected) {
        cellSelected.style.textDecoration = "underline";
    } else {
        cellSelected.style.textDecoration = "none";
    }
}

//allignments

let alignBtn = document.getElementsByClassName("alignBtn");

for(let i = 0 ; i < alignBtn.length ; i++){
  let alignment = alignBtn[i];
  alignment.addEventListener("change" , ()=>{
    cellSelected.style.display = "flex";
  if(alignment.value == "align-left"){
    cellSelected.style.justifyContent = "flex-start";
  }else if(alignment.value == "align-center"){
    cellSelected.style.justifyContent = "center";
  }else{
    cellSelected.style.justifyContent = "flex-end";
  }
  });
}


//change text colour

let colorBtn = document.getElementById("font-color");
colorBtn.addEventListener("change" , ()=>{
  cellSelected.style.color = `${colorBtn.value}`;
});


let zin = document.getElementById("Z-in");
zin.addEventListener("click" , ()=>{
  

});

let zot = document.getElementById("Z-out");
zot.addEventListener("click" , ()=>{
  let size = zot.style.fontSize;
  zot.style.fontSize = size - "+1";
});

console.log(a , c );
var a = 20;
let b = 10;
var c;
