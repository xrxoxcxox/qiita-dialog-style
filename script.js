const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const dialog = document.getElementById("dialog");

openButton.addEventListener("click", function onOpen() {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

closeButton.addEventListener("click", function onClose() {
  dialog.close();
});
