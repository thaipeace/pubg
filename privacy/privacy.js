function prMove(seq) {
  var offset2 = $("#pr" + seq).offset();
  $('html, body').animate({ scrollTop: offset2.top - 150 }, 400);
}