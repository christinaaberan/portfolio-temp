var arr1 = ['default','ghub'];
var arr2 = ['html5','css3'];
var arr3 = ['photoshop','indesign'];
var arr4 = ['aftereffects'];
var idx;


var shape = document.querySelectorAll(".circle");
function changeShape(group){
	for(var i=0; i<shape.length; i++){
		idx = Math.floor(Math.random() * group.length);
		shape[i].classList.remove('default','ghub','html5','css3','photoshop','indesign', 'aftereffects');
		shape[i].classList.add(group[idx]);
		console.log(group[i]);
	}

}
