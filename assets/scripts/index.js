const card = document.querySelector('#event')

const filterCheckbox = document.getElementsByClassName("checkFilter")

const searchInput = document.getElementById("searchInput")

let cardsEvents = addCardsEvents(data.events)
card.innerHTML = cardsEvents
function addCardsEvents(arrayEvents) {
    let cardsEvents = ''
    for (const events of arrayEvents){
        cardsEvents += `<div class="col-lg-3 col-md-6 col-sm-12 p-1">
            <div class="card">
                <img src="${events.image}" class="card-img-top" alt="${data.events.name}">
                <div class="card-body">
                    <h5 class="card-title">${events.name}</h5>
                    <p class="card-text">${events.description}</p>
                    <div class="card-details">
                        <p class="card-text">U$S ${events.price}</p>
                        <a href="./details.html?id=${events.id}" class="btn btn-secondary">View more</a>
                    </div>                  
                </div>
            </div>
        </div>`
    }
    return cardsEvents 
}