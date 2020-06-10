function translate( aSentence){
  if((aSentence === "a")||(aSentence === "i")||(aSentence === "o")||(aSentence === "u")||(aSentence ==="e")){
    return "1" ;
  }else { 
    return "2";
  }
}

$(document).ready(function() {
  $("form#myForm").submit(function(event) {
    event.preventDefault();
    let sentence = $("#user-input").val();
    let output = translate(sentence);

    $("#results").text(output);
  });
});

