const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

document.getElementById("welcomeUser").innerText = `Welcome ${user.name}`;

async function createProject(){
    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDesc").value;

    const res = await fetch("https://ethara-taskflow-api-production.up.railway.app/api/projects/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify({ title, description })
    });

    const result = await res.json();
    alert(result.message);
    fetchProjects();
}

async function fetchProjects(){
    const res = await fetch("https://ethara-taskflow-api-production.up.railway.app/api/projects/all",{
        headers:{ "Authorization":`Bearer ${token}` }
    });

    const projects = await res.json();
    document.getElementById("projectCount").innerText = projects.length;

    let output = "";
    projects.forEach(project=>{
        output += `
        <div class="col-md-4">
            <div class="project-card">
                <h5>${project.title}</h5>
                <p>${project.description}</p>
                <small>Created By: ${project.createdBy.name}</small><br>
                <span class="badge-priority">ACTIVE PROJECT</span>
            </div>
        </div>`;
    });

    document.getElementById("projectsContainer").innerHTML = output;
}

async function fetchTaskStats(){
    const res = await fetch("https://ethara-taskflow-api-production.up.railway.app/api/tasks/all",{
        headers:{ "Authorization":`Bearer ${token}` }
    });

    const tasks = await res.json();
    document.getElementById("taskCount").innerText = tasks.length;

    let completed = tasks.filter(t=>t.status==="Completed").length;
    document.getElementById("completedCount").innerText = completed;
}

function logout(){
    localStorage.clear();
    window.location.href="index.html";
}

fetchProjects();
fetchTaskStats();