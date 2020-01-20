function onReady(){
  let toDos = []; //create array
  let toDoId = 1; //create array id

//said to use CAPS & _ for const, so it gets recognized
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');
//document = represents whole page

  ADD_TODO_FORM.addEventListener ('submit', (event) => { // adds event listener to submit button
     event.preventDefault (); //prevents from refreshing page with each submit

    let title = NEW_TODO_TEXT.value; // get the text (value = shows whats present in element)
    let todoObj = { //create object with its title/name and id
      name:title,
      id:toDoId
    };

    toDoId++; //adds +1 to id value

    toDos.push(title); //add to do's to array

    let newLi = document.createElement ('li'); // create a new li
    let checkbox = document.createElement('input'); // first create input before assigning type to it
    checkbox.type = "checkbox"; // set the input's type to checkbox

    let deleteBtn = document.createElement('button'); //creating delete button
    deleteBtn.textContent = 'Delete'; //naming delete button 'Delete'

    deleteBtn.addEventListener('click', function(event){ //attach event listener to listen for a click
      let buttonLiText = this.parentElement.childNodes[0].textContent; //taken from DOM
      //this.parentElement(); represents the button's <li> parent
      TODO_LIST.removeChild(this.parentElement); //delets the li

      toDos.forEach(function(currentToDo, index) { // matches current to do with array element

        if(currentToDo === buttonLiText){
          //remove from array via splice
          toDos.splice(index, 1); // index = index, 1 = how many you want to delete
        }
        //console.log(toDos); to view array
      });
    });

    newLi.textContent = title;   // set the title
    newLi.appendChild(checkbox);   // attach the checkbox to the li
    newLi.appendChild(deleteBtn); // add delete button to li so it is visable
    TODO_LIST.appendChild (newLi); // attach the li to the ul
    NEW_TODO_TEXT.value = ''; // empty the input

  });
};

window.onload = function () { //only calls onReady function once everything has loaded & ready
  onReady ();
};
