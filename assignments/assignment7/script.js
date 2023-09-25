/* Navigation*/
window.onload=()=>{
    // Get references to elements
    const exercise1MenuItem = document.getElementById('exercise1');
    const exercise2MenuItem = document.getElementById('exercise2');
    const exercise1Content = document.getElementById('exercise1Content');
    const exercise2Content = document.getElementById('exercise2Content');
    // Function to show Exercise 1 content and hide Exercise 2 content
    function showExercise1() {
        exercise1Content.style.display = 'block';
        exercise2Content.style.display = 'none';
    }
    // Function to show Exercise 2 content and hide Exercise 1 content
    function showExercise2() {
        exercise1Content.style.display = 'none';
        exercise2Content.style.display = 'block';
    }
    // Initially show Exercise 1 content
    showExercise1();
    // Add click to the menu items
    exercise1MenuItem.addEventListener('click', showExercise1);
    exercise2MenuItem.addEventListener('click', showExercise2);
};


/*Who is the oldest code*/
const fundraising = () => {
    // Get values from input fields
    const age1 = parseInt(document.getElementById("text-age1").value);
    const name1 = document.getElementById("text-name1").value;
    const age2 = parseInt(document.getElementById("text-age2").value);
    const name2 = document.getElementById("text-name2").value;
    const age3 = parseInt(document.getElementById("text-age3").value);
    const name3 = document.getElementById("text-name3").value;

    // Sets the errors
    const error = document.getElementById("error-num");
    const orderDiv = document.getElementById("coffee-order");

    // Hide error and order elements initially
    error.classList.add("hidden");
    orderDiv.classList.add("hidden");

    // Checks for errors via an if statement
    if (isNaN(age1) || isNaN(age2) || isNaN(age3)) {
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid number";
    }
    else if (age1 < 0 || age2 < 0 || age3 < 0) {
        error.classList.remove("hidden");
        error.innerHTML = "* Negative Number";
    }
    else if (age1 === 0 && age2 === 0 && age3 === 0) {
        error.classList.remove("hidden");
        error.innerHTML = "* Can't order zero coffees";
    }
    
    // Display ages and names
    else {
        orderDiv.innerHTML = `List of names and ages: ${name1} (${age1}), ${name2} (${age2}), ${name3} (${age3}).`;
        orderDiv.classList.remove("hidden");
    }
}
