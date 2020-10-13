/* EXERCISE 5: 
                Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the child to the UL
            */

const addNewTask = () => {
  let textInp = document.getElementById("newTask");
  let ulElement = document.getElementById("myTaskList");
  let liElement = document.createElement("li");
  liElement.innerHTML = textInp.value;
  if (textInp.value !== "") {
    ulElement.appendChild(liElement);
  } else {
    console.log("Nothing has been typed");
  }
  textInp.value = "";
};

/* EXERCISE 6: 
                Create a method "removeLast" which removes the last item from the task list
            */
const removeLast = () => {
  let liElement = document.querySelectorAll("#myTaskList li");
  let liElement2 = liElement.length - 1;
  liElement[liElement2].parentNode.removeChild(liElement[liElement2]);
};
/* EXERCISE 7: 
                Create a method "removeFirst" which removes the first item from the task list
            */
const removeFirst = () => {
  let liElement = document.querySelectorAll("#myTaskList li");
  let liElement2 = liElement[0];
  liElement2.parentNode.removeChild(liElement2);
};

/* EXERCISE 8: 
               Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string

               */
const getTasksAsArray = () => {
  let myArray = [];
  let allElements = document.querySelectorAll("#myTaskList li");
  for (i = 0; i < allElements.length; i++) {
    myArray.push(allElements[i].innerText);
  }
  return myArray;
};

getTasksAsArray();
/* EXERCISE 9:
               Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
               onchange event listener ad applies it as background to every list item
            */
const changeTaskBackgroundColor = () => {
  let colpick = document.querySelector("#colorPicker");
  let liElement = document.querySelectorAll("#myTaskList li");
  for (i = 0; i < liElement.length; i++) {
    liElement[i].style.backgroundColor = colpick.value;
  }
};
/* EXTRA */

/* EXERCISE 10: 
               Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
               Use your spare time to beautify your task list with CSS.
               Suggestion:
               - Break the code into many function for semplicity 
               - Reuse the functions previously created
            */
const bubblesort = () => {
  let tasks = document.querySelectorAll("#myTaskList li");
  let myArray = [];
  for (let i = 0; i < tasks.length; i++) {
    myArray.push(tasks[i].innerText);
  }
  myArray.sort();

  for (let i = 0; i < tasks.length; i++) {
    tasks[i].innerText = myArray[i];
  }
};
