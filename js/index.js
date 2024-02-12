fetch("https://api.escuelajs.co/api/v1/users")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mb-5">
                    <img src="${db.avatar}" class="card-img-top" alt="${db.name}">
                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Email:</strong> ${db.email}</li>
                        <li class="list-group-item"><strong>Password:</strong> Contraseña Oculta</li>
                        <li class="list-group-item"><strong>Nombre:</strong> ${db.name}</li>
                        </ul>
                </div>`
        }
        document.getElementById("lista").innerHTML = card
    })