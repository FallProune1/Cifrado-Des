const droparea = document.querySelector(".droparea");
const removeButton = document.querySelector(".Botoneslol button:nth-child(1)");
const downloadButton = document.querySelector(".Botoneslol button:nth-child(2)");
let uploadedFile;

droparea.addEventListener("dragover", (e) => {
  e.preventDefault();
  droparea.classList.add("hover");
});

droparea.addEventListener("dragleave", () => {
  droparea.classList.remove("hover");
});

droparea.addEventListener("drop", (e) => {
    e.preventDefault();
  
    const file = e.dataTransfer.files[0];
    uploadedFile = file;
    return upload(file);
  });

removeButton.addEventListener("click", () => {
  uploadedFile = null;
  droparea.innerText = "Suelta tus arquivos aquí";
  droparea.setAttribute("class", "droparea"); // Restablece la clase original
});

downloadButton.addEventListener("click", () => {
  if (!uploadedFile) {
    alert("No hay archivo para descargar");
    return;
  }

  const url = URL.createObjectURL(uploadedFile);
  const a = document.createElement('a');
  a.href = url;
  a.download = uploadedFile.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

const upload = (file) => {
  droparea.setAttribute("class", "droparea valid");
  droparea.innerText = "Added " + file.name;
};
