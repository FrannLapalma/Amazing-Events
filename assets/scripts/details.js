const params = new URLSearchParams(document.location.search)
const id = params.get("id")

const eventos = data.events.filter(event => event._id == id);

const cardDetails = document.getElementById("event-details")
let eventDetails= "";

eventDetails += `
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="img-events-details">
                    <img src="${eventos[0].image}" alt=${eventos[0].name} class="img-details">
                </div>              
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="card-event-text">
                    <div class="card-body">
                        <h5 class="card-title">${eventos[0].name}</h5>
                        <p class="card-text">${eventos[0].description}</p>
                        <p class="card-text">Date:${eventos[0].date}</p>
                        <p class="card-text">Categorie:${eventos[0].category}</p>
                        <p class="card-text">Place:${eventos[0].place}</p>
                        <p class="card-text">Capacity:${eventos[0].capacity}</p>
                        <p class="card-text">Assistance:${eventos[0].assistance}</p>
                        <p class="card-text">$${eventos[0].price}</p>
                        <p class="card-text">
                            <a href="./index.html"class="btn btn-secondary">
                            Back to Home</a>
                        </p>
                    </div>
                </div>              
            </div>
        </div>
    `
cardDetails.innerHTML = eventDetails



