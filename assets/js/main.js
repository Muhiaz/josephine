

const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');


for(let i=0;i<fills.length;i++){
	const fill = fills[i];
    fill.addEventListener('dragstart',function(){
    	draggedItem = fill;
    	setTimeout(function(){
    		fill.style.display = 'none';
    	},0)
    });
    fill.addEventListener('dragend',function(){
    	setTimeout(function(){
    		draggedItem.style.display = 'block';
    		draggedItem.style.display = null;
    	},0)
    });


function dragStart(){
	this.className += ' hold';
	setTimeout(()=>(this.className = 'invisible'),0);
	console.log('start');
}

function dragEnd(){
	this.className = 'fill';
}

for(let j=0;j<empties.length; j++){
	const empty = empties[j];
	empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

function dragOver(e){
	e.preventDefault();
}

function dragEnter(e){
	e.preventDefault();
	this.className += ' hovered';
}
function dragLeave(){
	this.className = 'empty';
}

function dragDrop(){
	this.className = 'empty';
	this.append(draggedItem);
}
}



const fillas = document.querySelectorAll('.filla');
const emptieas = document.querySelectorAll('.emptya');


for(let i=0;i<fillas.length;i++){
	const fill = fillas[i];
    fill.addEventListener('dragstart',function(){
    	draggedItem = fill;
    	setTimeout(function(){
    		fill.style.display = 'none';
    	},0)
    	
    });
    fill.addEventListener('dragend',function(){
    	setTimeout(function(){
    		draggedItem.style.display = 'block';
    		draggedItem.style.display = null;
    	},0)
    });


function dragStart(){
	this.className += ' hold';
	setTimeout(()=>(this.className = 'invisible'),0);
	console.log('start');
}

function dragEnd(){
	this.className = 'fill';
}

for(let j=0;j<emptieas.length; j++){
	const empty = emptieas[j];
	empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

function dragOver(e){
	e.preventDefault();
}

function dragEnter(e){
	e.preventDefault();
	this.className += ' hovered';
}
function dragLeave(){
	this.className = 'empty';
}

function dragDrop(){
	this.className = 'empty';
	this.append(draggedItem);
}
}


const sliders = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
for(i=0;i<sliders.length; i++){
	i+=1;
}

prev.addEventListener('click',()=>{
	prevSlide();
});
next.addEventListener('click',()=>{
	nextSlide();
});


function prevSlide(){
	if(index==0){
		index = sliders.length - 1;
	}
	else{
		index--;
	}
	changeSlide();
}

function nextSlide(){
	if(index==sliders.length - 1){
		index = 0;
	}
	else{
		index++;
	}
	changeSlide();
}
function changeSlide(){
	for(i=0;i<sliders.length; i++){
		sliders[i].classList.remove('active');
	}
	sliders[index].classList.add('active');
}
