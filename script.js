const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

let ticketPrice = Number.parseInt(movieSelect.value);

const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
// get indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats]
    .indexOf(seat))

    //save indexes in to localstorage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}


// seat click event
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')

        updateSelectedCount(e.target)
    }
})

const setMovieData = (index, value) => {
    localStorage.setItem('selectedMovieIndex', index);
    localStorage.setItem('selectedMoviePrice', value)
}
// movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = e.target.value
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount()

})



