$(document).ready(function() {
  $("form#myForm").submit(function(event) {
    event.preventDefault();
    let sentence = $("#user-input").val();
    let output = translate(sentence);

    $("#results").text(output);
  });
});

function translate( aSentence){
  return aSentence;
}