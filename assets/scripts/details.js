const params = new URLSearchParams(document.location.search)
const id = params.get("id")

const eventos = data.events.filter(event => event.id == id);

const cardDetails = document.getElementById("event-details")
cardDetails.innerHTML = `
        <div class="row">
            <div class="col">
                <div class="img-events-details">
                    <img src="${eventos.image}" alt=${eventos.name}>
                </div>              
            </div>
            <div class="col">
                <div class="card-event-text">
                    <div class="card-body">
                        <h5 class="card-title">${eventos.name}</h5>
                        <p class="card-text">${eventos.description}</p>
                        <p class="card-text">Date:${eventos.date}</p>
                        <p class="card-text">Categorie:${eventos.category}</p>
                        <p class="card-text">Place:${eventos.place}</p>
                        <p class="card-text">Capacity:${eventos.capacity}</p>
                        <p class="card-text">Assistance:${eventos.assistance}</p>
                        <p class="card-text">$${eventos.price}</p>
                        <p class="card-text">
                            <a href="./index.html"class="btn btn-secondary">
                            Volver al inicio</a>
                        </p>
                    </div>
                </div>              
            </div>
        </div>
    `


    