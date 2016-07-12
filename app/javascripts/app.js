import $ from 'jquery';
import dragula from 'dragula';


function makeElement( data ) {
  var newNode = document.createElement('div');

  var url = "bootstrap.php ." + data;

  $(newNode).load(url, function() {

  });
  return newNode;
}

dragula([document.querySelector('#left'), document.querySelector('#right')], {
  copy: function (el, source) {
    return source === document.querySelector('#right')
  },
  accepts: function (el, target) {
    return target !== document.querySelector('#right')
  },
  removeOnSpill: true
}).on('drop', function ( el ) {

    // Check to see if the element has a data attribute
    if ( $(el).attr('data-elem') ) {

      // If yes, store the elements data-elem in a vaiable
      var data = $(el).attr('data-elem');

      // Then pass variable to the makeElement() function
      // which will grab the appropriate <div> from bootstrap.php
      el.parentNode.replaceChild(makeElement( data ), el);

    }
});

$('.btn-reset').on('click', function() {
  alert('Are you sure you want to destroy the prototype? A bit harsh eh.');
})
