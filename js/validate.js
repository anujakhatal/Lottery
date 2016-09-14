document.querySelector("input").addEventListener("keypress", function (evt) {
	$('.alert-warning').hide();
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

function handleChange(input) {
    if (input.value < 1) {
    	 input.value = "";
    	 $('.alert-warning').fadeIn(200);
    	 $('.alert-warning').text("Please enter a value more than 0");
    }
    if (input.value > 50) {
    	input.value = "";
    	$('.alert-warning').fadeIn(200);
    	$('.alert-warning').text("Please enter a value upto 50");
    }
  }
$(document).ready(function() {
    $('#1').blur(function() {
        if ($(this).val() == $('#2').val() || $(this).val() == $('#3').val() || $(this).val() == $('#4').val() || $(this).val() == $('#5').val() || $(this).val() == $('#6').val()) {
            $('.alert-warning').fadeIn(200);
            $('.alert-warning').text("Please enter unique numbers only");
            $(this).val('');
        }
        if($(this).val() == " ") {
        	 $('.alert-warning').text("Please enter unique numbers only");
        }
    });
    $('#2').blur(function() {
        if ($(this).val() == $('#1').val() || $(this).val() == $('#3').val() || $(this).val() == $('#4').val() || $(this).val() == $('#5').val() || $(this).val() == $('#6').val()) {
            $('.alert-warning').fadeIn(200);
            $('.alert-warning').text("Please enter unique numbers only");
            $(this).val('');
        }
    });
    $('#3').blur(function() {
        if ($(this).val() == $('#1').val() || $(this).val() == $('#2').val() || $(this).val() == $('#4').val() || $(this).val() == $('#5').val() || $(this).val() == $('#6').val()) {
            $('.alert-warning').fadeIn(200);
            $('.alert-warning').text("Please enter unique numbers only");
            $(this).val('');
        }
    });
    $('#4').blur(function() {
        if ($(this).val() == $('#1').val() || $(this).val() == $('#2').val() || $(this).val() == $('#3').val() || $(this).val() == $('#5').val() || $(this).val() == $('#6').val()) {
            $('.alert-warning').fadeIn(200);
            $('.alert-warning').text("Please enter unique numbers only");
            $(this).val('');
        }
    });
    $('#5').blur(function() {
        if ($(this).val() == $('#1').val() || $(this).val() == $('#2').val() || $(this).val() == $('#3').val() || $(this).val() == $('#4').val() || $(this).val() == $('#6').val()) {
            $('.alert-warning').fadeIn(200);
            $('.alert-warning').text("Please enter unique numbers only");
            $(this).val('');
        }
    });
    $('#6').blur(function() {
        if ($(this).val() == $('#2').val() || $(this).val() == $('#3').val() || $(this).val() == $('#4').val() || $(this).val() == $('#5').val() || $(this).val() == $('#1').val()) {
            $('.alert-warning').fadeIn(200);
            $('.alert-warning').text("Please enter unique numbers only");
            $(this).val('');
        }
    });
});