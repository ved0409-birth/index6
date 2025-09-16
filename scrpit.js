// TravelBriefing API API Example
const response = await fetch('https://travelbriefing.org/api', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);

fetch('https://travelbriefing.org/api/your_api_key/country?cc=NL')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  fetch(`https://travelbriefing.org/api/your_api_key/country?cc=ES`)
  .then(response => response.json())
  .then(data => {
    // Do something with the response data
  })
  .catch(error => console.error(error));
