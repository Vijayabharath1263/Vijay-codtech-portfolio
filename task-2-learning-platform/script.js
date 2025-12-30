function login() {
  const name = document.getElementById("username").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  localStorage.setItem("studentName", name);
  showPlatform();
}

function showPlatform() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("platformSection").style.display = "block";
  document.getElementById("studentName").innerText =
    localStorage.getItem("studentName");
}

function checkAnswer(correct) {
  if (correct) {
    document.getElementById("result").innerText = "Correct Answer!";
    document.getElementById("progress").innerText = "Lesson Completed";
    localStorage.setItem("progress", "completed");
  } else {
    document.getElementById("result").innerText = "Wrong Answer. Try again!";
  }
}

window.onload = function () {
  if (localStorage.getItem("studentName")) {
    showPlatform();
    if (localStorage.getItem("progress") === "completed") {
      document.getElementById("progress").innerText = "Lesson Completed";
    }
  } else {
    document.getElementById("platformSection").style.display = "none";
  }
};
