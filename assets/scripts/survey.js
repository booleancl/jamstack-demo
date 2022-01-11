const Survey = {
  init(){
    const myModal = new bootstrap.Modal(document.getElementById('myModal'))
    setTimeout(() => myModal.show(), 5000)
    console.log("Jamstack Rocks");
  }
}

document.addEventListener("DOMContentLoaded", () => Survey.init() )