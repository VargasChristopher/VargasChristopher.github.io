$('.menu').on('click', function (){
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
});

$('.nav a').on('click', function (){
  $(this).removeClass('active');
  $('overlay').removeClass('menu-open');
});

$('.button').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
});

function openForm() {
  document.getElementById("id01").style.display = "block";
}

function closeForm() {
  document.getElementById("id01").style.display = "none";
}

function openForm2() {
document.getElementById("id01").style.display = "none";
document.getElementById("id02").style.display = "block";
}

function closeForm2() {
  document.getElementById("id02").style.display = "none";
}

function openForm3() {
document.getElementById("id01").style.display = "none";
document.getElementById("id03").style.display = "block";
}

function closeForm3() {
  document.getElementById("id03").style.display = "none";
}

function openForm4() {
document.getElementById("id01").style.display = "none";
document.getElementById("id04").style.display = "block";
}

function closeForm4() {
  document.getElementById("id04").style.display = "none";
}

function openForm5() {
document.getElementById("id01").style.display = "none";
document.getElementById("id05").style.display = "block";
}

function closeForm5() {
  document.getElementById("id05").style.display = "none";
}

function openForm6() {
document.getElementById("id01").style.display = "none";
document.getElementById("id06").style.display = "block";
}

function closeForm6() {
  document.getElementById("id06").style.display = "none";
}

function openFormPt() {
closeForm6();
document.getElementById("idPt").style.display = "block";
}

function closeFormPt() {
  document.getElementById("idPt").style.display = "none";
}

function openFormReg() {
closeFormPt();
document.getElementById("idReg").style.display = "block";
}

function closeFormReg() {
  document.getElementById("idReg").style.display = "none";
}

function openFormResults() {
closeFormReg();
document.getElementById("idRes").style.display = "block";
}

function closeFormResults() {
  document.getElementById("idRes").style.display = "none";
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
