/********* create variables *********/
const costPerDayFull = 35; // Cost for a full day
const costPerDayHalf = 20; // Cost for a half day
let selectedDays = 0; // To track the number of selected days
let currentRate = costPerDayFull; // Start with the full day rate
let dayElements = document.querySelectorAll('.day-selector li'); // All day buttons
let calculatedCostElement = document.getElementById('calculated-cost'); // The cost display element
let clearButton = document.getElementById('clear-button'); // The clear days button
let fullDayButton = document.getElementById('full'); // The full day button
let halfDayButton = document.getElementById('half'); // The half day button

/********* colour change days of week *********/
dayElements.forEach(function(day) {
    day.addEventListener('click', function () {
        if (!day.classList.contains('clicked')) { 
            day.classList.add('clicked');
            selectedDays++; 
            recalculateTotalCost();
        }
    });
});

/********* clear days *********/
clearButton.addEventListener('click', function () {
    dayElements.forEach(function(day) {
        day.classList.remove('clicked');
    });
    selectedDays = 0;
    calculatedCostElement.innerHTML = '0';
});

/********* change rate *********/
fullDayButton.addEventListener('click', function () {
    currentRate = costPerDayFull;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    recalculateTotalCost();
});

halfDayButton.addEventListener('click', function () {
    currentRate = costPerDayHalf;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    recalculateTotalCost();
});

/********* calculate *********/
function recalculateTotalCost() {
    let totalCost = selectedDays * currentRate;
    calculatedCostElement.innerHTML = totalCost;
}


