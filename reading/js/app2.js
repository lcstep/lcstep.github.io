let sheetData =
  "https://spreadsheets.google.com/feeds/list/1Qw7VnlojnNQ1Nj6bsAxZqKd5DYFcRkMCZv94bBIZESY/od6/public/values?alt=json";
let books = [];

fetch(sheetData)
  .then(res => res.json())
  .then(data => render(data));

function render(data) {
  let entries = data.feed.entry;
  console.log('entries', entries)
  entries.forEach(book => {
    let eachBook = new Book(
      book.gsx$title.$t,
      book.gsx$author.$t,
      book.gsx$status.$t,
      book.gsx$image.$t
    );
    books.push(eachBook);
  });

  function Book(title, author, status, image) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.image = image;
  }
  console.log(books)
  books.forEach(book =>
    newBook(
      book.title, 
      book.author, 
      book.status, 
      book.image
    )
  );
}

function newBook(title,author,status,image) {
  let list = $('#book-list ul')
  list.append(
    $("<li/>", {class: `${status}`, text: `${title}, ${author}`})
      .mouseover(function(){
          if( status === 'read'){
            $("#bg img").attr('src', `${image}`)
          }
      })
      .mouseout(function(){
        $("#bg img").attr('src', 'media/heart.jpg')
      })
    )
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



// fade cover

$(document).ready(function(){
    let img = $("#bg img");
    let text = $("#intro");
    // let title = $('header h1')
    let lastScrollTop = 0;
    let h = window.innerHeight;
    $(window).on('scroll', function () {
        let st = $(this).scrollTop();
        
        if ( st > lastScrollTop) {

        }
        $('#bg').css({
              'opacity': 1 - st / 300,
              'margin-left': - (st / 8)
          })
        
        text.css({
           'opacity': 1 - st / 300
        })
        if (st > h) {
          $('#bg').css({
            'width': '30%',
            'opacity': 1,
            'margin-left': 0
          })
        }
          
         else if (st < h * .5) {
        //  
          $('#bg').css({
            'margin-left': - (st / 8),
            'opacity': 1 - st / 300
          }, setTimeout(function(){
           
            $('#bg').css({
              'width': '60%'

            },4000)
          }))

        }
        
        
    })
  })

