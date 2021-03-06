// information to reach API
const apiKey = 'b4db48776a924990b6f43ce5c264a091';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async()=>{
  const urlToShorten = inputField.value
const data = JSON.stringify({destination: urlToShorten})
try{
  const response = await fetch(url, 
  {
    method:'POST',
    body: data,
    headers:{
      'Content-type': 'application/json',
'apikey': apiKey
    }
  })
  if(response.ok){
    const jsonResponse = await response.json()
    renderResponse(jsonResponse)
  }
}catch(error){
  console.log(error)
}
}
// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

//helper functions
// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
      responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
    }
  }
  
  // Manipulates responseField to render an unformatted response
  const renderRawResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){  
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
      // Adds line breaks for JSON
      //replaces commas with comma, space new line and 
      let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
      structuredRes = `<pre>${structuredRes}</pre>`;
      responseField.innerHTML = `${structuredRes}`;
    }
  }
  