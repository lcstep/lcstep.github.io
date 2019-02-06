let sheetData =
  "https://spreadsheets.google.com/feeds/list/1Qw7VnlojnNQ1Nj6bsAxZqKd5DYFcRkMCZv94bBIZESY/od6/public/values?alt=json";
let books = [];
let categories = [];
fetch(sheetData)
  .then(res => res.json())
  .then(data => render(data));

function render(data) {
  let entries = data.feed.entry;
  //console.log('entries', entries)
  entries.forEach(book => {
    let eachBook = new Book(
      book.gsx$title.$t,
      book.gsx$author.$t,
      book.gsx$status.$t,
      book.gsx$image.$t,
      book.gsx$review.$t,
      book.gsx$category.$t
    );
    books.push(eachBook);
  });

  function Book(title, author, status, image, review, category) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.image = image;
    this.review = review;
    this.category = category;
  }
  console.log(books);
  books.forEach(book =>
    newBook(
      book.title,
      book.author,
      book.status,
      book.image,
      book.review,
      book.category
    )
  );
  books.forEach(book => categories.push(book.category));
  categories.sort();
  //console.log('categories', categories)
  uniqueCategories = [...new Set(categories)];
  // console.log('unique', uniqueCategories)
  uniqueCategories.forEach(category =>
    $("#filter ul").append(
      $("<li />", { text: `${category}`, id: `${category}` })
    )
  );
  $("#filter ul").append($("<li />", { text: "all", id: "reset" }));
}

function newBook(title, author, status, image, review, category) {
  $(".image-load").append(
    $("<img />", { src: `${image}` }).css("display", "none")
  );

  let list = $("#book-list ul");
  list.append(
    $("<li/>", { class: `${status} ${category}`, text: `${title}, ${author}` })
      .mouseover(function() {
        if (status === "read") {
          $(".list-area aside div.image").css(
            "background-image",
            "url(" + `${image}` + ")"
          );
          if (image === "") {
            $(".list-area aside div.image").css(
              "background-image",
              "url(https://lcstep.github.io/reading/media/fallback.jpg)"
            );
          }
        }
      })

      .click(function() {
        if (status === "read") {
          hideBookList();

          $(".list-area").append(
            $("<div />", { class: "detail" })
              .append(
                $("<a/>", { text: "x" }).click(function() {
                  hideBookInfo();
                })
              )
              .append($("<h1>", { text: `${title}` }))
              .append($("<h2>", { text: `${author}` }))
              .append($("<p/>", { text: `${review}` }))
              .hide()
              .fadeIn(2000)
              .css("display", "flex")
          );
        }
      })
  );
}

function hideBookList() {
  $(".form").hide();
  $("footer").hide();
  $("#book-list").hide();
  $(".list-area aside").css({
    flex: "50%"
  });
}

function hideBookInfo() {
  $(".detail").fadeOut(600);
  $("#book-list").fadeIn(600);
  $(".list-area aside").css({
    flex: "30%"
  });
  $(".form").fadeIn(600);
  $("footer").fadeIn(600);
}

$("#filter ul").on("click", "li", function() {
  console.log("testing");
  let text = $(this).text();
  console.log(text);
  $("#book-list ul li").hide();
  $(`#book-list ul li.${text}`).fadeIn(300);
  if (text == "all") {
    $("#book-list ul li").fadeIn(300);
  }
  $("html, body").animate({
      scrollTop: $("#book-list").offset().top
    },
    0
  );
});

// set up write-to google sheets
var $form = $("form#book-suggestion"),
  url =
    "https://script.google.com/macros/s/AKfycbx8weRS0fi1STZPKYfvy2WVUnVYwv7FBuIB4yYKi7uBbkOAyPw/exec";

$("#submit-form").on("click", function(e) {
  e.preventDefault();
  $("#thanks").removeClass("hidden");
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  })
    .success
    // do something
    ();
});

// clear form after submissions
document.getElementById("submit-form").onclick = function() {
  document.getElementById("book-suggestion").reset();
};

// fade cover

function showAside() {
  $(".list-area aside").css({
    opacity: 1,
    transform: "translateX(0)"
  });
}

function hideAside() {
  $(".list-area aside").css({
    transform: "translateX(-60px)",
    opacity: 0
  });
}

$(document).ready(function() {
  let img = $("#bg img");
  let text = $("#intro");
  // let title = $('header h1')
  let lastScrollTop = 0;
  let h = window.innerHeight;

  $(window).on("scroll", function() {
    let st = $(this).scrollTop();
    $("#bg").css({
      opacity: 1 - st / 300
      
    });
    if ($(window).width() > 800) {
      $("#bg").css({
     
      "margin-left": -(st / 8)
    });
      if ($(".detail").is(":visible")) {
        // showAside();
      } else if (st > h) {
        showAside();
      } else {
        hideAside();
      }
    }
  });
});
