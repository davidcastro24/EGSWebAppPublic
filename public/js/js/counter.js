$(window).scroll(function(){
    const bannerTop = $("#staff").offset().top;
    const bannerBottom = bannerTop + $("#staff").height();
    const scrollTop = $(window).scrollTop() + $(window).height();

    if($(this).scrollTop() === 0){
        console.log("here");
        $('#menu-jk').removeData('ScrollToFixed');
        $('#menu-jk').css('position', 'relative');
        $('.banner-container').css('position', 'relative');
        $('.header-container').css('position', 'absoulte');
        $('.banner-container').css('z-index',-1);
    } else if($(this).scrollTop() > 1 && !$('#menu-jk').data('ScrollToFixed')){
        $('#menu-jk').scrollToFixed();
    }


    if (scrollTop > bannerTop && scrollTop < bannerBottom) {
        const dev = $("#dev");
        const eng = $("#eng");
        const agile = $("#agile");
        const des = $("#des");

        const maxdev = 30;
        const maxeng = 25;
        const maxagile = 15;
        const maxdes = 10;

        
    
        function countUp(counter,maxCount) {
            let currentCount = 0;
            function step(){
                //console.log(currentCount);
                if (currentCount <= maxCount) {
                    counter.html(currentCount + "+");
                    currentCount+=1;
                    setTimeout(step, 15); // adjust the delay to control the speed of the animation
                }
            }

            step();
        }
    
        countUp(dev,maxdev);
        countUp(eng,maxeng);
        countUp(agile,maxagile);
        countUp(des,maxdes);

      }

});