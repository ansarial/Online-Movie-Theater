// Get DOM Element
const container = document.querySelector('.container');
// will select only row seat - to get all seats
const seats = document.querySelectorAll('.row .seat');
// will select only row seat which are not occupuied
//const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

populateUI();

var ticketPrice = movieselect.value;

// creating userdefine function
function updateSelectedCount(){
    const selectedseats = document.querySelectorAll('.row .seat.selected');
    //const seatsIndex = [...selectedseats];
    // const seatsIndex = [...selectedseats].map(function(seat){
    //     return [...seats].indexOf(seat);
        
    // }
    // );
    // making arrow function
    const seatsIndex = [...selectedseats].map(seat=> [...seats].indexOf(seat));
    console.log(seatsIndex);
    const selectedseatsCount = selectedseats.length;
    //console.log(selectedseats);
    //console.log(selectedseatsCount);
    count.innerText = selectedseatsCount;
    total.innerText = selectedseatsCount * ticketPrice;
    //localStorage.setItem('name', 'Saad');
    localStorage.setItem('selectedseats', JSON.stringify(seatsIndex));
};

// Saving 
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('SelectedMovieIndex', movieIndex);
    localStorage.setItem('SelectedMoviePrice', moviePrice);
};

// Get data from localstorage and populateUI
function populateUI(){
    // get selected seats from local storage and convert from string to array
    const selectedSeats = JSON.parse(localStorage.getItem('selectedseats'));
    // check if selected seat is not null and not empty, and if selected seats is
    //console.log(selectedSeats);
    if (selectedSeats!==null && selectedSeats.length>0){
        //console.log(selectedSeats);
        seats.forEach((seat, index)=>{
            if (selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
            }
        })
    };
    const SelectedMovieIndex = localStorage.getItem('SelectedMovieIndex');
    if (SelectedMovieIndex!==null ){
        movieselect.selectedIndex = SelectedMovieIndex;
    }
};


//Event Listner
//1. Event Listner for container to check for click on seat
container.addEventListener('click', (e)=> {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    )
    {
        //console.log(e.target);
        //e.target.classList.add{}
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
    
}
);

//2. Event Listner for movie Select
movieselect.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    //console.log(e.target.selectedIndex);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Intial count and total price
updateSelectedCount();
