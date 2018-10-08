;;;!function ($) { 
    /* 人气单品的数据 */
    
 }(jQuery);




























;;;!function ($) { 
    //引入头部html文件
    $('.top-content').load("header.html");
    

    //轮播图
    var $bannerpic=$('.banner-pic li');
    var $bannernav=$('.banner-nav li');
    var $bannerimg=$('.banner-nav li img');
    var $num=0
    
    //鼠标滑过nav时
    $bannerimg.css({opacity: 0.8});
    $bannernav.hover(function (){
        $num=$(this).index();
        lunbotu($num); 
    },function(){
        $bannerimg.css({opacity: 0.8});
    });
    //点击箭头切换图片
    
    $('.btn-right').on('click',function () { 
        $num++;
        if($num>$bannerpic.size()-1){
            $num=0;
        }    
        lunbotu($num); 
    })
    $('.btn-left').on('click',function () { 
        $num--;
        if($num<0){
            $num=$bannerpic.size()-1;
        }    
        lunbotu($num); 
    })
    function lunbotu(num) { 
        $bannerimg.css({opacity: 0.8});
        $bannerimg.eq(num).css({opacity: 1});
        $bannerpic.eq(num).addClass('active').siblings('li').removeClass('active');
        }
    //定时器循环点击下一页
    




    //引入尾部html文件
    $('.footer-content').load("footer.html");


    /* 固定定位部分 */
    $('.download span').on('click',function () { 
        $('.download').hide();
     })
     $(document).onload
     $(document).scroll(function () { 
        if($(document).scrollTop()!=0){
            $('.erweima').show();
            $('.return-top').show();
        }else{
            $('.erweima').hide();
            $('.return-top').hide();
        }
      });
      //回到顶部
    $('.return-top').on('click',function(){
		$('html,body').animate({//赋值时考虑兼容。
			scrollTop: 0
		});
    });
    //楼梯效果
    $('.louti .last').on('click',function(){
		$('html,body').animate({//赋值时考虑兼容。
			scrollTop: 0
		});
    });
        $(document).scroll(function () { 
          if($(document).scrollTop()>400){
              $('.louti').show();
          }else{
              $('.louti').hide();
          }
       })
 }(jQuery);