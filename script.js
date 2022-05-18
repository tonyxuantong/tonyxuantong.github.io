const folders = document.querySelectorAll('.folder');

const closeButton = () => {
  const closeButton = document.createElement('button');
  closeButton.classList.add('folder-delete-button');
  return closeButton;
}

const handleOpenFolder = (e) => {
  e.preventDefault();
  e.stopPropagation();
  if(!e.target.classList.contains('open') && e.target.classList.contains('folder')) {
    const folder = e.target;
    folder.classList.add('open');
    const cb = closeButton();
    cb.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      folder.classList.remove('open');
      cb.remove();
    });
    folder.appendChild(cb);
  }
}

folders.forEach((folder) => {
  folder.addEventListener('click', handleOpenFolder);
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}