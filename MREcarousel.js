$(document).ready(function() { 

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#img1').attr('src','https://kritikagarg.github.io/Unnecessary-Archival-Replay-Requests/img/1.jpg')
  $('#img2').attr('src','https://kritikagarg.github.io/Unnecessary-Archival-Replay-Requests/img/2.jpg') 
  $('#img3').attr('src','https://kritikagarg.github.io/Unnecessary-Archival-Replay-Requests/img/3.jpg') 

  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 1000);





 });
