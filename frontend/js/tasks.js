const token = localStorage.getItem("token");

async function createTask(){
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDesc").value;
    const dueDate = document.getElementById("taskDate").value;
    const priority = document.getElementById("taskPriority").value;

    const projectRes = await fetch("https://taskflow-pro-ethara-production.up.railway.app/api/projects/all",{
        headers:{ "Authorization":`Bearer ${token}` }
    });

    const projects = await projectRes.json();
    const projectId = projects[0]._id;

    const res = await fetch("https://taskflow-pro-ethara-production.up.railway.app/api/tasks/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            description,
            project: projectId,
            dueDate,
            priority
        })
    });

    const result = await res.json();
    alert(result.message);
    fetchTasks();
}

async function fetchTasks(){
    const res = await fetch("https://taskflow-pro-ethara-production.up.railway.app/api/tasks/all",{
        headers:{ "Authorization":`Bearer ${token}` }
    });

    const tasks = await res.json();

    let output = "";
    tasks.forEach(task=>{
        output += `
        <div class="col-md-4">
            <div class="project-card">
                <h5>${task.title}</h5>
                <p>${task.description}</p>
                <small>Status: ${task.status}</small><br>
                <small>Priority: ${task.priority}</small><br>
                <small>Due: ${task.dueDate ? task.dueDate.substring(0,10) : "N/A"}</small><br>
                <span class="badge-priority">${task.priority}</span>
            </div>
        </div>`;
    });

    document.getElementById("taskContainer").innerHTML = output;
}

function logout(){
    localStorage.clear();
    window.location.href="index.html";
}

fetchTasks();