// quotes
const quotes = [
{
text:"Don't watch the clock; do what it does. Keep going.",
author:"Sam Levenson"
},
{
text:"Success is the sum of small efforts repeated daily.",
author:"Robert Collier"
},
{
text:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt"
},
{
text:"Learning never exhausts the mind.",
author:"Leonardo da Vinci"
}
];

const quoteBtn = document.getElementById("newQuote");

quoteBtn.addEventListener("click", () => {

const random =quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").textContent =`"${random.text}"`;

document.getElementById("author").textContent =`- ${random.author}`;

});

// dark mode toggle

const darkbtn=document.getElementById("darkmodebtn");
darkbtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        darkbtn.textContent="☀️";
    }
    else{
        darkbtn.textContent="🌙";
    }
})

// github profile fetcher

const githubBtn=document.getElementById("githubBtn");
const githubInput=document.getElementById("githubInput");
const githubProfile=document.getElementById("githubProfile");
async function fetchGithubProfile(){
    const username=githubInput.value.trim();
    if(username===""){
        githubProfile.innerHTML="<p>Please enter a username.</p>";
        return;
    }
    githubProfile.innerHTML=`<p>Loading profile<p>`
    try{
        const response=await fetch( `https://api.github.com/users/${username}`);
        const data=await response.json();
        if(data.message === "Not Found"){
            githubProfile.innerHTML=`<p>User not found.<p>`;
            return;
        }
        githubProfile.innerHTML=` 
         <div class="github-card flex flex-col items-center text-center">

            <img
            src="${data.avatar_url}"
            alt="${data.login}"
            class="w-32 h-32 rounded-full mb-4">

            <h2 class="font-bold p-2">${data.login}</h2>

            <p class="mb-1">
            Followers: ${data.followers}
            </p>

            <p class="mb-1">
            Following: ${data.following}
            </p>

            <p class="mb-1">
            Public Repositories:
            ${data.public_repos}
            </p>

            <p class="mb-1">
            📍 ${data.location || "Not Available"}
            </p>

            <a
            href="${data.html_url}"
            target="_blank">

            Visit Profile

            </a>
            </div>

        `;

      }
      catch(error){
         githubProfile.innerHTML = `
            <p>Something went wrong.</p>
        `;

        console.log(error);
      }
}
githubBtn.addEventListener(
    "click",
    fetchGithubProfile
);

// TASK MANAGER

let tasks = JSON.parse(localStorage.getItem('sh_tasks')) || [];

//saving tasks into localStorage
function saveTasks() {
  localStorage.setItem('sh_tasks', JSON.stringify(tasks));
}
//redering updates the UI 
function renderTasks() {
  const list = document.getElementById('taskList');
  const noTasks = document.getElementById('noTasks');
  list.innerHTML = '';

  if (tasks.length === 0) {
    noTasks.style.display = 'block';
    return;
  }

  noTasks.style.display = 'none';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `flex items-center gap-3 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 group`;

    li.innerHTML = `
      <input
        type="checkbox"
        ${task.done ? 'checked' : ''}
        class="w-4 h-4 accent-amber-700 cursor-pointer"
        data-index="${index}"
        onchange="toggleTask(${index})"
      />
      <span class="flex-1 text-cafe-brown font-inter text-sm ${task.done ? 'line-through opacity-50' : ''}">
        ${task.text}
      </span>
      <button
        onclick="deleteTask(${index})"
        class="text-amber-300 hover:text-red-400 transition-all text-lg opacity-0 group-hover:opacity-100"
      >
        ✕
      </button>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  saveTasks();
  renderTasks();
  input.value = '';
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Add on Enter key too
document.getElementById('taskInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Load tasks on page load
renderTasks();
