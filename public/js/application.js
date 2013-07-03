$(document).ready(function(){
  $('#get_color').on('click', function(){
    $.ajax({
      url: '/color',
      method: 'post'
    }).done(function(response){
      $('#color_me').children().eq(response.cell).css('background-color', response.color);      
    });
  });
});
