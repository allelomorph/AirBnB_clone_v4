$(document).ready(function () {
  const amenities = {};
  $('input:checkbox').click(function () {
    $(this).each(function () {
      if (this.checked) {
        amenities[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenities[$(this).data('id')];
      }
    });
    if (Object.values(amenities).length > 0) {
      $('.amenities h4').text(Object.values(amenities).join(', '));
    } else {
      $('.amenities h4').html('&nbsp');
    }
  });
});

$.get('http://localhost:5001/api/v1/status/')
  .done(function (data, status) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    }
  })
  .fail(function () {
    $('#api_status').removeClass('available');
  });