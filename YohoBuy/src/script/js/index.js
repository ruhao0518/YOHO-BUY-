define(['jquery'], function () {
    return {
        shuju: !function () {
            //引入头部html文件
            $('.top-content').load("header.html");
            /* 人气单品的数据 */
            $.ajax({
                url: 'http://10.31.162.41/YohoBuy/php/getdata.php',
                dataType: 'json'
            }).done(function (data) {

                var $data = data;
                var $str = ''
                $.each(data, function (index, item) {
                    $str += `<li><a href="#" target="_blank" title="${item.title}"><img src="${item.url}"></a></li>`
                })
                $('.hot-list').html($str);
            });
            /* 新品以及详情页的数据 */
            $.ajax({
                url: 'http://10.31.162.41/YohoBuy/php/getdata.d.php',
                dataType: 'json'
            }).done(function (data) {
                console.log(data);

                var $str = '';
                $.each(data, function (index, item) {
                    $str += `<li><a href="http://10.31.162.41/YohoBuy/src/details${item.id}.html"><img src="${item.url.split(',')[0]}"></a><a class="goodname" href="#">${item.title}</a><p>￥${item.price}</p></li>`;
                })

                $('.newgoods-ul').html($str);
            });
            //引入尾部html文件
            $('.footer-content').load("footer.html");
        }(),
        /* 轮播图数据 */
        lunbotushuju:!function () { 
            $.ajax({
                url:'http://10.31.162.41/YohoBuy/php/getdata.lunbo.php',
                dataType:'json'
            }).done(function(data){
                console.log(data)
              
                var $str=''
                var $str1='';
                $.each(data,function (index,item) { 
                    if(index==0){
                        $str+=`<li class='active'><img src="${item.url}"><a href="#" title="${item.title}"></a></li>`;
                    }else if(index==7){
                        $str+=`<li ><img src="${item.url}"><a href="#" title="${item.title}"></a></li><div class="btn-left"><span class="iconfont "></span></div>
                        <div class="btn-right"><span class="iconfont "></span></div>`;
                        
                    }else{
                        $str+=`<li><img src="${item.url}"><a href="#" title="${item.title}"></a></li>`;
                    }
                })
                $.each(data,function (index,item) { 
                    if(index==7){
                        $str1+=`<li class='last'><img src="${item.ssrc}"><a href="#"></a></li>`
                    }else{
                        $str1+=`<li><img src="${item.ssrc}"><a href="#"></a></li>`;
                    }
                 })
                $('.banner-pic').html($str);
                $('.banner-nav').html($str1);
            }); 
         }(  ),
        /* 顶部的tab切换 */
        tab:!function () { 

            $('.main-nav-list li').on('click',function () { 
                $('.header-bott ul').eq($(this).index()).show().siblings('ul').hide();
             })

         }(  ),
        
        admin:!function () { 
            function addCookie(key,value,day){
				var date=new Date();//创建日期对象
				date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
				document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
			}
			function getCookie(key){
				var str=decodeURI(document.cookie);
				var arr=str.split('; ');
				for(var i=0;i<arr.length;i++){
					var arr1=arr[i].split('=');
	 				if(arr1[0]==key){
						return arr1[1];
					}
				}
			}
			function delCookie(key,value){
				addCookie(key,value,-1);//添加的函数,将时间设置为过去时间
			}
			
			
			//显示隐藏
			$(function(){
				if(getCookie('UserName')){
					$('.admin-not-login').hide();
					$('.admin-login').show().find('span').html('Hi~'+getCookie('UserName'));
				}
				$('.admin-login a').on('click',function(){
					addCookie('UserName','',-1);
					$('.admin-login').hide();
					$('.admin-not-login').show();
				});
			});
         }(   ),
        xiaoguo: !function () {
            /* 轮播图 */
            var $bannerpic = $('.banner-pic li');
            var $bannernav = $('.banner-nav li');
            var $bannerimg = $('.banner-nav li img');
            var $num = 0
            $('.banner-pic li').first().addClass('active');
            $bannernav.last().addClass('last');
            //鼠标滑过nav时
            $bannerimg.css({ opacity: 0.8 });
            $bannernav.hover(function () {
                $num = $(this).index();
                lunbotu($num);
            }, function () {
                $bannerimg.css({ opacity: 0.8 });
            });
            //点击箭头切换图片

            $('.btn-right').on('click', function () {
                $num++;
                if ($num > $bannerpic.size() - 1) {
                    $num = 0;
                }
                lunbotu($num);
            })
            $('.btn-left').on('click', function () {
                $num--;
                if ($num < 0) {
                    $num = $bannerpic.size() - 1;
                }
                lunbotu($num);
            })
            function lunbotu(num) {
                $bannerimg.css({ opacity: 0.8 });
                $bannerimg.eq(num).css({ opacity: 1 });
                $bannerpic.eq(num).addClass('active').siblings('li').removeClass('active');
            }
            //定时器循环点击下一页
            $timer1 = setInterval(function () {
                $num++;
                if ($num > $bannerpic.size() - 1) {
                    $num = 0;
                }
                lunbotu($num);
            }, 3000);

            /* 品牌轮播 */
            var $btnleft = $('.img-brand .btn-left');
            var $btnright = $('.img-brand .btn-right');
            var $pnum = 0;
            setInterval(function () {
                $pnum -= 1150;
                if ($pnum == -2300) {
                    $('.img-brand ul').animate({
                        left: $pnum,
                    }, function () {
                        $('.img-brand ul').css({ left: 0 });
                        $pnum = 0;
                    });
                } else {
                    $('.img-brand ul').animate({
                        left: $pnum,
                    });
                }
            }, 2000)
        }(),
        /* 固定定位部分 */
        guding: !function () {
            $('.download span').on('click', function () {
                $('.download').hide();
            })
            $(document).onload
            $(document).scroll(function () {
                if ($(document).scrollTop() != 0) {
                    $('.erweima').show();
                    $('.return-top').show();
                } else {
                    $('.erweima').hide();
                    $('.return-top').hide();
                }
            });
            //回到顶部
            $('.return-top').on('click', function () {
                $('html,body').animate({//赋值时考虑兼容。
                    scrollTop: 0
                });
            });


            $(document).scroll(function () {
                if ($(document).scrollTop() > 200) {
                    $('.louti').show();
                } else {
                    $('.louti').hide();
                }
            });
        }(),
        //楼梯效果
        louti: !function () { //回到顶部
            $('.louti .last').on('click', function () {
                $('html,body').animate({//赋值时考虑兼容。
                    scrollTop: 0
                });
            });
            
            var $louceng = $('.louceng');
            var $louti = $('.louti li');
            /* $(window).on('scroll',function(){
                var $scrolltop=$(window).scrollTop();//获取滚动条的top值。
                
                //拖动滚轮，对应的楼梯添加对应的类名
                $louceng.each(function(index,element){
                    //通过遍历的方式获取每一个楼层的top值
                    var $top=$louceng.eq(index).offset().top+$(this).innerHeight()/2;
                    console.log('模块',$top);
                    console.log('滑动条',$scrolltop);
                    if($top>$scrolltop){
                        $louti.removeClass('active');//清除所有的类
                        $louti.eq($(this).index()).addClass('active');
                        return false;//阻止循环
                        //每次只能有一个满足条件添加类，其他的通过循环阻止
                    }
                });
            }); */

            $louti.not('.last').on('click',function(){
                $(this).addClass('active').siblings('li').removeClass('active');
                var $top=$louceng.eq($(this).index()).offset().top-50;
                $('html,body').animate({//赋值时考虑兼容。
                    scrollTop: $top
                });
            });
        }(),

    }
})










    /* 人气单品的数据 */
   /*  $.ajax({
		url:'http://10.31.162.41/YohoBuy/php/getdata.php',
		dataType:'json'
	}).done(function(data){
      
        var $data=data;
        var $str=''
        $.each(data,function (index,item) { 
            $str+=`<li><a href="#" target="_blank" title="${item.title}"><img src="${item.url}"></a></li>`
         })
        $('.hot-list').html($str);
    }); */

    /* 轮播图的数据 */
    /* $.ajax({
		url:'http://10.31.162.41/YohoBuy/php/getdata.lunbo.php',
		dataType:'json'
	}).done(function(data){
        console.log(data)
      
        var $str=''
        var $str1='';
        $.each(data,function (index,item) { 
            $str+=`<li ><img src="${item.url}"><a href="#" title="${item.title}"></a></li>`;
            $str1+=`<li><img src="${item.ssrc}"><a href="#"></a></li>`
         })
        $('.banner-pic').html($str);
        $('.banner-nav').html($str1);
    }); */

    /* 新品以及详情页的数据 */
   /*  $.ajax({
		url:'http://10.31.162.41/YohoBuy/php/getdata.d.php',
		dataType:'json'
	}).done(function(data){
        console.log(data);
      
        var $str='';
        $.each(data,function (index,item) { 
            $str+=`<li><a href="http://10.31.162.41/YohoBuy/src/details${item.id}.html"><img src="${item.url.split(',')[0]}"></a><a class="goodname" href="#">${item.title}</a><p>￥${item.price}</p></li>`;
         })
        
        $('.newgoods-ul').html($str);
    }); */






























    //引入头部html文件
    /* $('.top-content').load("header.html"); */


    /* 轮播图 */
    /* var $bannerpic=$('.banner-pic li');
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
    $timer1=setInterval(function () { 
            $num++;
            if($num>$bannerpic.size()-1){
                $num=0;
            }
            lunbotu($num);  
     },3000);
     */
    /* 品牌轮播 */
    /* var $btnleft=$('.img-brand .btn-left');
    var $btnright=$('.img-brand .btn-right');
    var $pnum=0;
    setInterval(function () { 
        $pnum-=1150;
        if($pnum==-2300){
            $('.img-brand ul').animate({
                left:$pnum,
            },function () { 
                $('.img-brand ul').css({left:0});
                $pnum=0;
             });
        }else{
            $('.img-brand ul').animate({
                left:$pnum,
            });  
        }
     },2000) */
     /* $btnright.on('click',function () { 
        $pnum-=1150;
        console.log($pnum)
        if($pnum==-3450){
            $('.img-brand ul').animate({
                left:$pnum,
            },function () { 
                $('.img-brand ul').css({left:-1150});
                $pnum=-1150;
             });
        }else{
            $('.img-brand ul').animate({
                left:$pnum,
            });  
        }
    }) */
    /* $btnleft.on('click',function () { 
        $pnum+=1150;
        console.log($pnum);
        $('.img-brand ul').animate({left:$pnum},function () { 
            if($pnum==0){
                $('.img-brand ul').css({left:-2300});
                $pnum=-1150;
            }
         });
        if($pnum==0){
            $('.img-brand ul').animate({left:-$pnum},function () { 
                $('.img-brand ul').css({left:-3450});
                $pnum=-1150;
             });
        }else{
            $('.img-brand ul').animate({
                left:$pnum,
            });
        }
     })  */

    //引入尾部html文件
   /*  $('.footer-content').load("footer.html"); */


    /* 固定定位部分 
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
       }) */
