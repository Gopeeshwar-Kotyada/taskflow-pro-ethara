const api = "http://localhost:5000/api/auth";

function showLogin(){
    document.getElementById("loginForm").style.display="block";
    document.getElementById("registerForm").style.display="none";
}

function showRegister(){
    document.getElementById("loginForm").style.display="none";
    document.getElementById("registerForm").style.display="block";
}

document.getElementById("registerForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const data = {
        name: document.getElementById("regName").value,
        email: document.getElementById("regEmail").value,
        password: document.getElementById("regPassword").value,
        role: document.getElementById("regRole").value
    };

    const res = await fetch(`${api}/register`,{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById("message").innerText = result.message;
});

document.getElementById("loginForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const data = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    };

    const res = await fetch(`${api}/login`,{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if(result.token){
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        window.location.href="dashboard.html";
    }else{
        document.getElementById("message").innerText = result.message;
    }
});