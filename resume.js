// Define variables
console.log("resume");

let myName = "Carrington Phillips";
let myEmail = "cphillips77@oru.edu";
let experience = "Helpdesk, Tour guide, Student";
let education = "Oral Roberts University";
let skills = [["Leadership", "Communication", "Initiative"]];
let profileImage = "4x6 portrait.png";
let linkedInURL = "https://www.linkedin.com/in/carrington-phillips-9a7685327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

console.log("Hello, my name is " + myName);

// Connect variables to the HTML
document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;
document.getElementById("profile-pic").src = profileImage;
document.getElementById("myAnchor").href = linkedInURL;
document.getElementById("myAnchor").textContent = "Visit my LinkedIn Profile";

// Skills list
let skillsList = document.getElementById("skills"); // use existing <ul>
skillsList.innerHTML = ""; // clear placeholder text

for (let i = 0; i < skills.length; i++) {
  for (let j = 0; j < skills[i].length; j++) {
    let li = document.createElement("li");
    li.textContent = skills[i][j];
    skillsList.appendChild(li);
  }
}

// Fun fact button
function showFunFact() {
  alert("Fun Fact: I love music!");
}
