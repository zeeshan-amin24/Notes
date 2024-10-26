let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".create-btn");
createBtn.addEventListener('click', () => {
  let newNote = `<p contenteditable="true" placeholder="Your Note Here...">
    <img class="delete-btn" src="https://i.imghippo.com/files/noC1035RI.png"/>
  </p>`;
  notesContainer.innerHTML += newNote;
  notesUpdate();
  deleteNotes();
  let editableNote =document.querySelectorAll('p');
  editableNote.forEach((notes)=>{
notes.addEventListener('input', () => {
    notesUpdate();
  })})
})
function deleteNotes() {
  let deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.remove();
      notesUpdate(); 
      showNotes();
    });
  });
}

function notesUpdate() {
  let notes = notesContainer.innerHTML; 
  localStorage.setItem("notes", notes);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || ""; 
  deleteNotes(); 
  let editableNote =document.querySelectorAll('p');
  editableNote.forEach((notes)=>{
notes.addEventListener('input', () => {
    notesUpdate();
  })})
}
document.addEventListener('keydown', event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});


showNotes();
