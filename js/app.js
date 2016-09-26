//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Append image
$overlay.append($image);

//Append caption

$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#gallery a").click(function(event){
  event.preventDefault();
  //Update overlay with the image linked in the link
  var imageLocation = $(this).attr("href");
//Update the overlay with the image linked in the link
  $image.attr("src", imageLocation);
  //Show the overlay.
  $overlay.show();


  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  $overlay.hide();
});

// // ********Validation for form**********
//
// function passwordEvent () {
//   if($(this).val().)
// }
//
// // *******Form Submission to Database *******
//
$('button').click(function() {
  $('.submitButton').toggleClass("successful_submission").html("<p>Success!</p>")
  console.log("This is working");
});
//
$('form').submit(function(evt){
  evt.preventDefault();
    var url = $(this).attr("action");
    var formData = $(this).serialize();
    $.post(url, formData, function(response) {
      $('.submitButton').html("<p>Form Submitted!</p>").fail(function (jqXHR){
        var errorMessage = "<p>Sorry, there's been an error. Notify Kelly.</p>";
        $('.submit').html("Sorry! " + jqXHR.statusText + " error.</p>");
      });
    });
});

//
// *******Instagram Feed ***********

// $(document).ready(function() {
// var accessToken = '1355396613.ff351b0.8bbfbcd309e241a39c458a07a7e374a9';
// var userID = ff351b0ad1b54019a7e1eaca81e73eda;
// $(".instagram.search").instagram({
// userID = userID,
// show: 15,
// accessToken: accessToken
//   });
// });
