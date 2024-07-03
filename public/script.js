const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');

const seatSelect = document.getElementById('seatClass');
let ticketPrice = +seatSelect.value;

//save the selected seat and price
function seatData(seatIndex, seatPrice) {
    localStorage.setItem('selectedSeatIndex', seatIndex);
    localStorage.setItem('selectedSeatPrice', seatPrice);
}

populateUI();

function numberOfSeats() {
    const seatsNum = document.querySelectorAll('.seat.selected');
    const totalSeats = seatsNum.length;
    count.innerText = totalSeats;
    total.innerText = totalSeats * ticketPrice;

    const seatIndex = [...seatsNum].map(function (seat) {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('seatsNum', JSON.stringify(seatIndex));
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }

        });
    }


    const selectedSeatIndex = localStorage.getItem('selectedSeatIndex');
    if (selectedSeatIndex != null) {
        seatSelect.selectedIndex = selectedSeatIndex;
    }

}

seatSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    numberOfSeats();

})


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }
    numberOfSeats();
})

numberOfSeats();

