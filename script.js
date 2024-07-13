// selecting popupbox,overlay,addbutton
var popupbox = document.querySelector(".popupbox")
var overlay = document.querySelector(".overlay")
var add = document.getElementById("add")
var cancel = document.getElementById("Cancel")
var container = document.querySelector("#cardBox")
var addtodo = document.getElementById("Addtodo")

const detailsForm = document.querySelector('#detailForm');
const cards = document.querySelectorAll('#card');
const deleteButtons = document.querySelectorAll('#deleteCard')


add.addEventListener("click", function () {
    popupbox.style.display = "block"
    overlay.style.display = "block"
})

cancel.addEventListener("click", function () {
    popupbox.style.display = "none"
    overlay.style.display = "none"
})



detailsForm.addEventListener("submit", function (event) {
    event.preventDefault()
    var title = document.getElementById("Title")
    var details = document.getElementById("Todo");

    const div = document.createElement("div");
    const header = document.createElement('header');
    const footer = document.createElement('footer');
    const p = document.createElement('p')
    const button = document.createElement('button');

    div.setAttribute('class', 'card text-bg-success mb-3');
    div.setAttribute('id', 'card')
    header.setAttribute('class', 'card-header h2 text-center')
    footer.setAttribute('class', 'card-body')
    p.setAttribute('class', 'card-text')
    button.setAttribute('class', 'btn btn-dark');
    button.setAttribute('id', 'deleteCard')

    button.innerText = '<i class="bi bi-trash"></i>&nbsp;delete'
    header.innerHTML = title.value;
    p.innerHTML = details.value;
    title.value = '';
    details.value = '';

    button.addEventListener('click', function () {
        div.remove();
    })


    footer.append(p);
    footer.append(button);

    div.append(header);
    div.append(footer);

    container.append(div)
    popupbox.style.display = "none"
    overlay.style.display = "none"
})


deleteButtons.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        cards[index].remove();
    })
})





