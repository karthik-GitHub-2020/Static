/*var browserhgt = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;*/

var body = document.body,
    html = document.documentElement;

var browserhgt = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var pghgt = browserhgt - 100;

document.getElementById("pgwrapper").style.minHeight = pghgt + "px";

function editForm(){
	this.style.display='none';
	var input = document.getElementsByClassName('form-input'); 
			for (var i = 0; i < input.length; i++) { 
				input[i].disabled = false; 
			} 
	document.getElementById('frmsavebtn').style.display='block';
}

/*function saveForm(){
	var input = document.getElementsByClassName('form-input'); 
			for (var i = 0; i < input.length; i++) { 
				input[i].disabled = true; 
			} 
	document.getElementById('frmsavebtn').style.display='none';
}*/
function createnew(){
	
	var input = document.getElementsByClassName('form-input'); 
			for (var i = 0; i < input.length; i++) { 
				input[i].disabled = false; 
				input[i].value = ''; 
			}	
			document.getElementById("stnameid").focus();
}

function showdrop() {
  var showdp = document.getElementById("showdropmenu");
  if (showdp.style.display === "block") {
    showdp.style.display = "none";
  } else {
    showdp.style.display = "block";
  }
   setTimeout(function () {
        showdp.style.display='none';
    }, 10000);
    return false;
}
//var today = new Date();
//document.getElementById('lastlog').innerHTML = "Last Login On: " +'<br>'+ today;

/* to show custom fields*/
function showcustfield(){
	document.getElementById('poptitle').innerHTML = "New Custom Field";
	document.getElementById("extFields").style.display="none";
	document.getElementById("createfield").style.display="block";
}
/* EOF custom fields*/

/*Modal Popup*/
var modalBtns = [...document.querySelectorAll(".mpopup")];
modalBtns.forEach(function(mpbtn){
  mpbtn.onclick = function() {
    var modal = mpbtn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(mpbtn){
  mpbtn.onclick = function() {    
	var modal = mpbtn.closest('.modal');
	 modal.style.display = "none";
  }
});
var closemdl = [...document.querySelectorAll(".clsmdl")];
closemdl.forEach(function(mpbtn){
  mpbtn.onclick = function() {
    var modal = mpbtn.closest('.modal');
    modal.style.display = "none";
  }
});
window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}


/* Academic year */
var curyear = new Date().getFullYear();
var min = curyear,
    max = curyear + 4,
    select = document.getElementById('acdyrs');

for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

function remove(el) {  
  var element = el;
  element.remove();
}

function focustxt() {
     document.getElementById("tchrnameid").focus();
}
function stufocus() {
     document.getElementById("stnameid").focus();
}


function showsrchtxt(){
	var showtxt = document.getElementById('srchtext');
	showtxt.style.background="#e9e9e9";
	showtxt.style.width='165px';
	showtxt.style.borderBottom="2px solid #e0e0e0";
	showtxt.style.padding ="2px 8px";
	showtxt.style.outline ="none";
}

function showedit(){
	document.getElementById('editform').style.display='flex';
}

