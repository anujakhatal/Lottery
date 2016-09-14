$('#show').click(function() {
  /*var flag=true;
  $('input').each(function(){
    if ($('input:text').is(":empty")) {
      console.log("going here");
       $('.alert-warning').text("Please enter all 6 numbers");
       flag=false;
    }
  });
     if(flag==false) {
      return false;
     }  */
    var winningAmount=0;
    $('section.enter-numbers').hide();
    $('section.display-numbers').fadeIn(700);
    $('.calculate-result').fadeIn(700);
    //Get all input in an array 
    var lottery_numbers = [];
    $('input').each(function() {
        lottery_numbers.push($(this).val());
    });
    for (var i = 0; i < lottery_numbers.length; i++) {
        $(".display-array").append('<div class="col-md-2"><span>' + lottery_numbers[i] + '</span></div>');
    }
    //Get json data from data.json file
    $.getJSON("js/data.json", function(json) {
        //Count lenght of json object
        var fullLength = (json.lottery).length;
        
        for (var i = 0; i < fullLength; i++) {
            var checkResult = json.lottery[i].Results.split(" ");
            var lucky = 0;
            var beforeOct13 = "30/09/13";
            var beforeOct15 = "30/09/15";
            var date = json.lottery[i] .date;
            //var year = date.substring(date.lastIndexOf("/")+1);
            for (j = 0; j <= 5; j++) {
                for (k = 0; k <= 5; k++) {
                    if (lottery_numbers[j] == checkResult[k]) {
                        lucky = lucky + 1;
                    }
                }
            }
            if (lucky != 0) {
                if (lucky == 6) {
                    var jackpot = parseInt((json.lottery[i].Jackpot).replace(/\D/g, ''));
                    $('.tableBody').append('<tr><td>' + json.lottery[i].date + '</td><td>' + json.lottery[i].Jackpot + '</td></tr>');
                    winningAmount = parseInt(winningAmount) + jackpot;
                } else if (lucky == 3) {
                    $('.tableBody').append('<tr><td>' + json.lottery[i].date + '</td><td> £25 </td></tr>');
                    winningAmount += 25;
                } else if (lucky == 2) {
                    $('.tableBody').append('<tr><td>' + json.lottery[i].date + '</td><td> £10 </td></tr>');
                    winningAmount += 10;
                }
            }
        }
        console.log(winningAmount);
    $('.result').text('£' + winningAmount);
    });
    setTimeout(function (){
      $('.calculate-result').hide();
      $('section.result-won').fadeIn(700);
    }, 4000);
    
    
});