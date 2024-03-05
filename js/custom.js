// Start Close Links Menu Bar
    // const toggle = document.getElementById('toggle');
    // const sidebar = document.getElementById('sidebar');
// End Close Links Menu Bar





// Start Current Year
const newYear = new Date();
const currentYear = newYear.getFullYear();

document.querySelector("#currentYear").innerHTML = currentYear;
// End Current Year





// Start Loading

setTimeout(() => {
    const loadingPage = document.getElementById('preload');

    loadingPage.style.display = 'none';
    // loadingPage.style.transition = 'all 0.2s ease-out'
}, 1000);