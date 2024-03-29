const fill = document.querySelector(".fill");
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('touchstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('touchend', dragEnd);


//Loop through empty containers
for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);

}



function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd () {
  this.className = 'fill';
}

function dragOver (e) {
  e.preventDefault();
}

function dragEnter(e){
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop(){
  this.className = 'empty';
  this.append(fill);
}

//Touch events
fill.addEventListener('touchmove', touchLocation);

function touchLocation(e){
  let touchLocation = e.targetTouches[0];

  fill.style.left = touchLocation.pageX + 'px';
  fill.style.top = touchLocation.pageY + 'px';
}
