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
