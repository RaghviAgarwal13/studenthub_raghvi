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
         <div class="github-card">

            <img
            src="${data.avatar_url}"
            alt="${data.login}">

            <h2>${data.login}</h2>

            <p>
            👥 Followers: ${data.followers}
            </p>

            <p>
            ➡️ Following: ${data.following}
            </p>

            <p>
            📁 Public Repositories:
            ${data.public_repos}
            </p>

            <p>
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
