const startDate = new Date(2023, 7, 15); // 15 August 2023
const today = new Date();
const difference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById('days').textContent = difference+1;