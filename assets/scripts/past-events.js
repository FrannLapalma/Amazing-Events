const card = document.querySelector('#event')

let cardsEvents = ''
for (const events of data.events){
    if(data.currentDate > events.date){
    cardsEvents += `
    <div class="col-lg-3 col-md-6 col-sm-12 p-1" >
        <div class="card">
            <img src="${events.image}" class="card-img-top" alt="${events.name}">
            <div class="card-body">
                <h5 class="card-title">${events.name}</h5>
                <p class="card-text">${events.description}</p>
                <div class="card-details">
                    <a href="#" class="card-link">$${events.price}</a>
                    <a href="details.html" class="btn btn-secondary">View more</a>
                </div>                  
            </div>
        </div>
    </div>
    `
    }
card.innerHTML = cardsEvents
}