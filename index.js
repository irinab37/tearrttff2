// Helper function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to generate a random number between min and max
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to shuffle an array
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // Using the helper functions
  console.log(calculateCircleArea(5)); // Output: ~78.54
  console.log(isEven(7)); // Output: false
  console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10
  console.log(shuffleArray([1, 2, 3, 4, 5])); // Output: Array with shuffled elements