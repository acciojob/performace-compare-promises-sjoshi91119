// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Select the output elements
const outputAll = document.querySelector("#output-all");
const outputAny = document.querySelector("#output-any");

// Function to fetch the API data and return the time taken
function fetchData(url) {
  const startTime = performance.now(); // Start the timer
  return fetch(url)
    .then((response) => response.json())
    .then(() => performance.now() - startTime); // Return the time taken
}

// Use Promise.all to fetch data from all APIs
Promise.all(apiUrls.map(fetchData))
  .then((times) => {
    // Display the times in the output element
    times.forEach((time) => {
      outputAll.innerHTML += `<tr><td>${time.toFixed(2)} ms</td></tr>`;
    });
  })
  .catch((error) => console.error(error));

// Use Promise.any to fetch data from APIs until one succeeds
Promise.any(apiUrls.map(fetchData))
  .then((time) => {
    // Display the time in the output element
    outputAny.innerHTML += `<tr><td>${time.toFixed(2)} ms</td></tr>`;
  })
  .catch((error) => console.error(error));


// You can write your code here
