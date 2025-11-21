// FILTER BUTTONS
$(".filter button").each(function() {
  $(this).on("click", function(){

    if ($(this).hasClass("active")) {
      // TOGGLE TO ALL IF CLICKED AGAIN
      $(".filter button").removeClass('active');
      $('.filterDiv').addClass('visible');
      $('.all-btn').addClass('active');

    } else if ($(this).hasClass("all-btn")) {
      // ALL FILTER CHECK
      $(".filter button").removeClass('active');

      var filtertag = $(this).attr('class');
      $('.filterDiv').addClass('visible');
      $('.filterDiv:not(.' + filtertag + ')').addClass('visible');
      $(this).addClass('active');

    } else {
      // TURN ON FILTER IF NOT SELECTED ALREADY
      $(".filter button").removeClass('active');

      var filtertag = $(this).attr('class');
      $('.filterDiv').addClass('visible');
      $('.filterDiv:not(.' + filtertag + ')').removeClass('visible');
      $(this).addClass('active');
    }

  });
});