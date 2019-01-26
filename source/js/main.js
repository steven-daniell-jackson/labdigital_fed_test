$(document).ready(function () {
  
  // Set default Happiness
  happiness_step_value(2);
  

   // On SVG click - change step
  $(".svg__right__caret > svg").click(function () {
    happiness_step_value(1);
  });
  
  $(".svg__left__caret > svg").click(function () {
    happiness_step_value(-1);
  });
  
   // On Input slider - change step
  $("#happiness__input__slider").change(function () {
    happiness_step_value();
  });
  

  // Log Form information
  $('form#contact-form').submit(function(e){
    e.preventDefault()
    
     // Log Inputs
    $('#contact-form input').each(function( index ) {
      
      let input_id = $(this).attr('id');
      if (input_id) console.log(input_id+ ' : ' +this.value);
      
    });
    
    // Log Select
    console.log ("Selection Option: " + $('#contact-form select').val());
    
    // Log Happiness Input
    let range = document.getElementById('happiness__input__slider');
    switch(parseInt(range.value)) {
      case 0:
      console.log ("How happy are you right now? : Bad");
      break;
      case 1:
      console.log ("How happy are you right now? : Average");
      break;
      default:
      console.log ("How happy are you right now? : Excellent");
    };
    
  });
  
  });
  
  // Happiness Input and Step function
  function happiness_step_value(step) {
    let range = document.getElementById('happiness__input__slider');
    let step_value = range.value;
    let max_step_value = 2;
    let min_step_value = 0;
    
    if (step) {
      range.stepUp(step);
      step_value = parseInt(step_value) + parseInt(step);
    }
    
    if (step_value > max_step_value) {
      step_value = max_step_value;
    } else if (step_value < min_step_value) {
      step_value = min_step_value;
    }
    
    $('[data-happiness]').hide();
    $('[data-happiness=' + step_value + ']').show();
    
  }