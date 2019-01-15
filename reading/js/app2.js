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
  
// create the list of books
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

// set up write-to google sheets
var $form = $('form#book-suggestion'),
    url = 'https://script.google.com/macros/s/AKfycbx8weRS0fi1STZPKYfvy2WVUnVYwv7FBuIB4yYKi7uBbkOAyPw/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  $('#thanks').removeClass('hidden');
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})

// clear form after submissions
document.getElementById("submit-form").onclick = function () {
    document.getElementById("book-suggestion").reset();
}


// $("#sidebar_img").hover(function(){
//   $("#sidebar_img").src="../media/everything.jpg";
// })



// fade cover

$(document).ready(function(){
    let img = $("#bg img");
    let text = $("#intro");
    // let title = $('header h1')

    let h = window.innerHeight;
    $(window).on('scroll', function () {
        let st = $(this).scrollTop();
        
        $('#bg').css({
              'opacity': 1 - st / 300,
              'margin-left': - (st / 2)
          })
        
        text.css({
           'opacity': 1 - st / 300
        })
        if (st > h * .9) {
          $('#bg').css({
            'width': '30%',
            'opacity': 1,
            'margin-left': 0
          })
        }
          
         else {
        //  
          $('#bg').css({
            
            'margin-left': - (st / 2)
          }, setTimeout(function(){
            $('#bg').css({
              'width': '60%'
            },0)
          }))
        }

        
    })
  })

