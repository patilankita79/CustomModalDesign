//Get the modal element
var modal = document.getElementById('simpleModal');

//Get open modal button
var modalBtn = document.getElementById('modalBtn');

//Get the close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];



//Listen for click on modal button => opens the modal
modalBtn.addEventListener('click', openModal);

//add event listener for closing the modal
closeBtn.addEventListener('click', closeModal);

//Listen if we click outside of modal window
window.addEventListener('click', clickOutside);

//function to open the modal
function openModal() {
  //take the display value - none and set it to block
  modal.style.display = 'block';

}

//function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// function to close the modal window, if we click outside of modal window
function clickOutside(e) {
  if(e.target == modal) {
    modal.style.display = 'none';

  }
}
