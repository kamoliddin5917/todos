confirm('FAQAT OLDINGA!!!');

var body = document.querySelector('body');
var button = document.querySelector('.light-dark_mode')

button.addEventListener('click', function () {
    body.classList.toggle("dark");
  })


var allTodos = [];

var form = document.querySelector('.form');
var input = document.querySelector('.input');
var todosWrapper = document.querySelector('.todos__wrapper');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  var inputValue = input.value;
  if (inputValue.length <= 2) {
    form.classList.add('form--invalid')
    return
  }else{
    form.classList.remove("form--invalid")
  }

  allTodos.unshift(inputValue);
  todosWrapper.innerHTML = ''
  
  for(var i = 0; i < allTodos.length; i++){
    var newBox = document.createElement("p");
    var newP = document.createElement("p");
    var newCheck = document.createElement("input");

    newP.textContent = allTodos[i];
 
    newBox.className = "todos__box";
    newP.className = "todos__text";
    newCheck.className = "todos__check";
    newCheck.type = "checkbox"

    todosWrapper.append(newBox);
    newBox.append(newCheck,newP);

 }
  input.value = ''
})
