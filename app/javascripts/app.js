import $ from 'jquery';
import dragula from 'dragula';
import html2canvas from 'html2canvas';


function makeElement( data ) {
  var newNode = document.createElement('div');
  var $newNode = $(newNode);

  var url = 'bootstrap.php [data-template=' + data + ']';

  $newNode.load(url, function() {

    //add contenteditable attribute to elements with direct text descendents
    $newNode.find('*').each(function(index, element){

      var $el = $(element);
      //get direct text children
      var text = $el.clone().children().remove().end().text();
      if (text.trim()) element.contentEditable = true;
      //allow escape key to remove focus from element that is being edited
      $el.on('keydown', function(e){ if (e.which === 27) $(this).blur(); });

    });

    //finally, if $newNode is a grid row, add it to the containers list
    if ($newNode.find(".grid-row")){
      addDraggableContainers($newNode.find(".grid-row > div").get());
    }

  });
  return newNode;
}

var drake = dragula([document.querySelector('#left'), document.querySelector('#right')], {
  copy: function (el, source) {
    return source === document.querySelector('#right')
  },
  accepts: function (el, target) {
    return target !== document.querySelector('#right')
  },
  removeOnSpill: true,
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

function addDraggableContainers(elementList){
  [].push.apply(drake.containers, elementList);
}

$('.btn-reset').on('click', function() {
  alert('Are you sure you want to destroy the prototype? A bit harsh eh.');
});

/*
allow user to download a png of the prototype
 */
$('#img-download').on('click', function(){
  var $holderDiv = $('.holder-div');
  var $prototypeEl = $('.prototype__scroll')
                      .clone()
                      .addClass("snapshot")
                      .css({overflow: 'visible', 'background-color' : 'white', 'padding' : '20px'})
                      .appendTo($holderDiv);

  html2canvas( $prototypeEl.get()[0], {
    onrendered: function(canvas) {
      //remove the clone
      $holderDiv.empty();
      // from http://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas
      var a = document.createElement('a');
       document.body.appendChild(a);
       a.href = canvas.toDataURL();
       a.download = 'wireframe.png';
       a.click();
       document.body.removeChild(a);
    }
  });
})

/*
append drag and drop buttons based on the templates in bootstrap.php
 */
var $templateContainer = $('<div/>');
var $itemContainer = $('.components');

$templateContainer.load('bootstrap.php #snippet-container', function(){


  $templateContainer.find('#snippet-container > *').each(function(index, element){

      var $el = $(element);

      if (!$el.data('template')) return;

      var $itemParent = $('<div/>')
      .addClass('item')
      .attr('data-elem',  $el.data('template'))
      .appendTo($itemContainer);

      $('<div/>')
      .addClass('item__description')
      .text(function(){
        var text = $el.data('template').replace(/-/g, ' ');
        text = text[0].toUpperCase() + text.slice(1);
        return text;
      })
      .appendTo($itemParent);

    });

  });
