$(document).ready(function ()
{
    var buzzer = $("#buzzer")[0];
    var count = parseInt($("#num").html());
    var breakTime = parseInt($("#breaknum").html());
    console.log(count);
    $("#reset").hide();
    $("#start").click(function ()
    {
        var counter = setInterval(timer, 1000);
        count *=60; 
        function timer()
        {
            $("#start,#plusFiveSession,#plusFiveBreak,#minusFiveSession,#minusFiveBreak,#breaknum,#title1").hide();
            $("#timeType").show();
            $("#timeType").html("Session :");
            count -= 1;
            if (count === 0)
            {
                buzzer.play();
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
                breakTime*=60;
                $("#num").hide();
            }
            if(count%60>=10)
            {
                $("#num").html(Math.floor(count/60)+":"+count%60);
            }
            else
            {
                $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
            }

            function breakTimer()
            {
                
                $("#timeType").html("Break :");
                $("#breaknum").show();
                
                $("#timeType").show();
                breakTime-= 1;
                if (breakTime === 0)
                {
                    clearInterval(startBreak);
                    buzzer.play();
                    $("#reset").show();
                }
            if(breakTime%60>=10)
            {
                $("#breaknum").html(Math.floor(breakTime/60)+":"+breakTime%60);
            }
            else
            {
                $("#breaknum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
            }
            }

        }

    });
    $("#reset").click(function(){
        count = 25;
        breakTime =25;
        $("#timeType").css("display","none");
        $("#start,#plusFiveSession,#plusFiveBreak,#minusFiveSession,#minusFiveBreak,#breaknum,#title1,#num").show();
        $("#breaknum").html(breakTime);
        $("#num").html(count);
        
        $("#reset").hide();
    });
    $("#minusFiveSession").click(function ()
    {
        if (count > 5)
        {
            count -= 5;
            $("#num").html(count);
        }

    });
    $("#plusFiveSession").click(function ()
    {

        count += 5;
        $("#num").html(count);


    });
    $("#minusFiveBreak").click(function ()
    {
        if (breakTime > 5)
        {
            breakTime -= 5;
            $("#breaknum").html(breakTime);
        }

    });
    $("#plusFiveBreak").click(function ()
    {

        breakTime += 5;
        $("#breaknum").html(breakTime);


    });
});