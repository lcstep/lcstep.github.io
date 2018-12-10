let googleSheet = "https://spreadsheets.google.com/feeds/list/1Qw7VnlojnNQ1Nj6bsAxZqKd5DYFcRkMCZv94bBIZESY/od6/public/values?alt=json"

// fetch() is a global function that makes an API call and returns JSON 

fetch(googleSheet)
  .then(response => response.json())
  .then( data => render(data))

function render(data){
  console.log(data)
}
