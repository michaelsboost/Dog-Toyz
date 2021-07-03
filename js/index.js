//  Version: 0.0.1
//  Dog Toyz, copyright (c) by Michael Schwartz
//  Distributed under the MIT license: https://github.com/michaelsboost/Dog-Toyz/blob/gh-pages/LICENSE
//  This is Dog Toyz (https://michaelsboost.github.io/Dog-Toyz), Play dog toy sounds with this app for fun with your dog 😊.

// variables
var audioElement = document.createElement('audio'),
    prev         = document.getElementById('prev'),
    next         = document.getElementById('next');
    
// function to see if selection has any surrounding elements
function selectionSurroundings() {
  // is first child
  if ($(".active").is(":visible")) {
    if (!$(".active").is(":first-child")) {
      prev.setAttribute('disabled', false)
    } else {
      prev.setAttribute('disabled', true)
    }

    // is last child
    if (!$(".active").is(":last-child")) {
      next.setAttribute('disabled', false)
    } else {
      next.setAttribute('disabled', true)
    }
  }

  // hide all toys except the active one
  $('svg g g').addClass('hide');
  $('.active').removeClass('hide');
};
selectionSurroundings();

// change dog toy via next/prev buttons
prev.onclick = function() {
  audioElement.pause();
  audioElement.currentTime = 0.0;
  
  // if disabled ignore
  if (this.getAttribute('disabled', false)) {
    $(".active").prev().addClass("dogToyz-selected");
    $(".active").removeClass("active");
    $(".dogToyz-selected").addClass("active", "").removeClass("dogToyz-selected");

    selectionSurroundings();
  }
};
next.onclick = function() {
  audioElement.pause();
  audioElement.currentTime = 0.0;
  
  // if disabled ignore
  if (this.getAttribute('disabled', false)) {
    $(".active").next().addClass("dogToyz-selected");
    $(".active").removeClass("active");
    $(".dogToyz-selected").addClass("active", "").removeClass("dogToyz-selected");

    selectionSurroundings();
  }
};

// play audio
$("#toys > g").click(function() {
  audioElement.pause();
  audioElement.currentTime = 0.0;
  audioElement.src = this.getAttribute('data-sound');
  audioElement.play();
});