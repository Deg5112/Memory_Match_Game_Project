//clock
var clockInterval;
function clock(startVal){
    var val = startVal;//doc ready. val is 60
    $('.game-board .row').css('background-color', 'rgba(13, 255, 255, 0.2)');

    clockInterval = setInterval(function(){
        if(val>55) {//greater than 45
            val = val - 1;//-1
            $('.game-board .row').css('background-color', 'rgba(0, 0, 0, 0.74)');
            $('#deadline').next().text(val);//add that to clock

        }else if(val >35 && val <= 55){ //greater than 20
            val = val - 1;//-1
            $('.game-board .row').css('background-color', 'rgba(95, 26, 236, 0.41)');
            $('#deadline').next().text(val);//add that to clock

        } else if(val > 11 && val <= 35) {
            val = val - 1;//-1
            $('.game-board .row').css('background-color', 'rgba(13, 255, 255, 0.2)'); //greater than 10 background green
            $('#deadline').next().text(val);//add that to clock

        } else if(val > 10 && val <= 11) {
            val = val - 1;//-1
            $('.game-board .row').css('background-color', 'rgba(0, 0, 0, 0.74)'); //greater than 10 background green
            $('#deadline').next().text(val);//add that to clock

        }else if(val <=10 && val > 0) {  //less than ten.. pulse red and black
            val = val - 1;//-1
            $('#deadline').next().text(val);//add that to clock
            $('.game-board .row').addClass('warning');


        } else if(val < 1){//if 0
            $('.game-board .row').removeClass('warning');
            var x = confirm('play again?');
            if(x){
                $('#round').next().text('A');
                val = 60;
            }
        }
    }, 1000);

    $('#settings_input').on('change', function(){
        clearInterval(clockInterval);
        var settingsVal = $('#settings_input').val();
        var newVal;
        switch(settingsVal){
            case '1':
                newVal = 60;
                break;
            case '2':
                newVal = 45;
                break;
            case '3':
                newVal = 30;
                break;
        }
        start = newVal;//make global start variable to new Val also
        newGame(newVal);
    });

}
