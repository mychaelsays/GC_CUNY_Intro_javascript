$("#info").html("<p>Yuna's friends-></p>");

$.getJSON("ypoem.json", function(data){ 
  let poemText; 
  poemText = "<blockquote><p>"; 
    data.lines.map(function(line){ 
      let lineText = "";
      line.map(function(word){
      let wordString;
      wordString = word.text;
      if (word.info){
        wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " ";
    });
    
    poemText = poemText + lineText + "<br/>";
  });
 
  poemText = poemText + "</p></blockquote>";

  $("#poem").html(poemText);
 
  $("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo;
    clickedWord = $( this ).text();
    clickedInfo = $( this ).data("info");
    infoText = clickedInfo;
    $("#info").html(infoText);
  });
}); 