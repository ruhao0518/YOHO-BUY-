define(['jquery'],function () { 
    return{
        fangdajing:!function () { 
            $('.min img').first().show().siblings('img').hide();
            $('.pull-left-tab img').on('mouseover',function () { 
                $('.min img').eq($(this).index()).show().siblings('img').hide();
             });
            

        }(  )
    }
 })