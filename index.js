function theBeatlesPlay(musicians,instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    var str = musicians[i] + " plays " + instruments[i];
    arr.push(str);

  }
  return arr;
}
function johnLennonFacts(facts){
    var arr = [];
    var i = 0;
    while (i < facts.length){
      var str = facts[i] + "!!!";
      arr.push(i);
      i++;
    }
    return arr;
}
