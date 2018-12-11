let sheetData = "https://spreadsheets.google.com/feeds/list/1Qw7VnlojnNQ1Nj6bsAxZqKd5DYFcRkMCZv94bBIZESY/od6/public/values?alt=json";
let Books = [];

fetch(sheetData)
  .then(res => res.json())
  .then(data => render(data))

function render(data) {
  //console.log(data)
  let booksList = data;
   //console.log(booksList)
  let entries = booksList.feed.entry;
  //console.log(entries)
  
  entries.map(function (entry) {
    Books.push({
      //`${entry.gsx$title.$t}, ${entry.gsx$author.$t}`
      title: entry.gsx$title.$t,
      author: entry.gsx$author.$t, 
      status: entry.gsx$status.$t
      
    });
  });
  
  
  let bookList = book => `${book.title}, ${book.author}`;
  
  
function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');
    
    array.map(book => {
        var item = document.createElement('li');
        
      if (book.status === 'read') {
        item.classList = 'read';
      } else if (book.status === 'reading') {
         item.classList = 'reading';
      }
        // Set its contents:
        item.appendChild(document.createTextNode(bookList(book)));

        // Add it to the list:
        list.appendChild(item);
    });

    // Finally, return the constructed list:
    return list;
}

// Add the contents of to #book-list:
document.getElementById('book-list').appendChild(makeUL(Books));
  
  
  
}



