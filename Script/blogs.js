function myFunction() {
  window.location.href = "blogs.html";
}
function blogFunction() {
  window.location.href = "index.html";
}
// Theme Color

const colors = ['light-gray', 'red', 'blue', 'green', 'yellow', 'violet'];
let colorIndex = 0;

document.getElementById("themeColor").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
})

// Date

const date = new Date();
document.getElementById("date").innerText = date.toDateString();

let taskAssigned = 6;
let taskCompletedText = document.getElementById("taskCompleted").innerText;
let taskCompleted = parseInt(taskCompletedText);

document.getElementById("taskAssigned").innerText = taskAssigned;

function completeFunction(button) {

  let confirmComplete = confirm("Congrats! Board update successfully.");

  if (confirmComplete) {

    taskAssigned = taskAssigned - 1;
    document.getElementById("taskAssigned").innerText = taskAssigned;

    if (taskAssigned === 0) {
      alert("Congrats! You have completed all the tasks.");
      button.disabled = true;
      taskCompleted = taskCompleted + 1;
      document.getElementById("taskCompleted").innerText = taskCompleted;

      button.disabled = true;

      let card = button.closest(".card-body");
      let title = card.querySelector(".card-title").innerText;

      let activityDiv = document.createElement("div");
      let activityTitle = document.createElement("p");
      let activityTime = document.createElement("p");

      activityDiv.classList.add("bg-blue-50", "p-4", "rounded-xl");
      activityTitle.innerText = `You have completed the task ${title}`;
      activityTime.innerText = `Dark mode at 12:48:15`;

      document.getElementById("activityLogs").appendChild(activityDiv);

      activityDiv.appendChild(activityTitle);
      activityDiv.appendChild(activityTime);
      return;
    }

    taskCompleted = taskCompleted + 1;
    document.getElementById("taskCompleted").innerText = taskCompleted;

    button.disabled = true;

    let card = button.closest(".card-body");
    let title = card.querySelector(".card-title").innerText;

    let activityDiv = document.createElement("div");
    let activityTitle = document.createElement("p");
    let activityTime = document.createElement("p");

    activityDiv.classList.add("bg-blue-50", "p-4", "rounded-xl");
    activityTitle.innerText = `You have completed the task ${title}`;
    activityTime.innerText = `Dark mode at 12:48:15`;

    document.getElementById("activityLogs").appendChild(activityDiv);

    activityDiv.appendChild(activityTitle);
    activityDiv.appendChild(activityTime);
  }
}

function clearHistory() {
  let confirmClear = confirm("Are you sure you want to clear history?");
  if (confirmClear) {
    document.getElementById("activityLogs").innerHTML = "";
  }
}