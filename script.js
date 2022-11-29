
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.notes').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);

    $('.notes').addClass('display');

    setTimeout(function () {
      $('.notes').removeClass('display');
    }, 5000);
  });

  function hourUpdater() {
    var currentHour = dayjs().hour();

    $('.time').each(function () {
      var hour = parseInt($(this).attr('id').split('-')[1]);

      if (hour < currentHour) {
        $(this).addClass('past');
      } else if (hour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  setInterval(hourUpdater, 15000);

  $('#1st .notes').val(localStorage.getItem('1st'));
  $('#2nd .notes').val(localStorage.getItem('2nd'));
  $('#3rd .notes').val(localStorage.getItem('3rd'));
  $('#4th .notes').val(localStorage.getItem('4th'));
  $('#5th .notes').val(localStorage.getItem('5th'));
  $('#6th .notes').val(localStorage.getItem('6th'));
  $('#7th .notes').val(localStorage.getItem('7th'));
  $('#8th .notes').val(localStorage.getItem('8th'));
  $('#9th .notes').val(localStorage.getItem('9th'));
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});

