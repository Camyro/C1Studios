var element = document.getElementById('menu');

firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        element.innerHTML = `
            <h1>C1 Studios</h1>
            <a href="techminds/login">
                <button>Login</button>
            </a>
        `;
    } else {
        element.innerHTML = `
            <h1>C1 Studios</h1>
            <button type="button" onclick="logout()">Sair</button>
        `;
    }
})

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}