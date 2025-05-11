// let tasks = ["Read Quran", "Practice JavaScript", "Make Dua"];

// // ✅ Show all tasks
// console.log("📋 Your Tasks:");
// for (let i = 0; i < tasks.length; i++) {
//   console.log(`${i + 1}. ${tasks[i]}`);
// }

// // ✅ Add a new task
// let newTask = prompt("Add a new task:");
// tasks.push(newTask);

// // ✅ Remove a task
// let removeIndex = parseInt(prompt("Enter task number to remove:")) - 1;
// tasks.splice(removeIndex, 1);

// // ✅ Show updated tasks
// console.log("✅ Updated Task List:");
// tasks.forEach((task, index) => {
//   console.log(`${index + 1}. ${task}`);
// });

const todoAddForm = document.querySelector("#todoaddform");

const addTodo = (e) => {
  e.preventDefault();
  const inputTodo = todoAddForm.querySelector("input");
  const ulEl = document.querySelector("ul");
  const liEl = document.createElement("li");
  liEl.innerText = inputTodo.value;

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "remove";
  //   removeBtn.classList.add("removebtn-class");
  liEl.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    liEl.remove();
  });

  ulEl.appendChild(liEl);
  const newArry = ulEl.children;

  //   removeBtn.addEventListener("click", () => {
  //     for (i = 0; i < newArry.length - 1; i++) {
  //       const element = newArry[i];
  //     }
  //   });

  inputTodo.value = "";
};

todoAddForm.addEventListener("submit", addTodo);
