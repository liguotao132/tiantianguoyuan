require.config({
	paths:{
		'jquery':'../libs/jquery',
		'swiper':'../libs/swiper.min'
	}
});

require(['jquery','swiper'],function($,swiper){
	//轮播图
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 2000,
    pagination: '.swiper-pagination',
	})   

	$(function(){
		//鼠标移入移出事件
		$('#car').mouseenter(function(){
			$(this).css('backgroundColor','#fff')
			$('#hot_city').css('display','block')
			$('#hot_city').mouseenter(function(){
				$('#hot_city').stop()
			})
			$('#hot_city').mouseleave(function(){
				$('#hot_city').hide(100)
			})

		})
		$('#car').mouseleave(function(){
			$(this).css('backgroundColor','')
			$('#hot_city').hide(100)
		})

		$('#hot_city li p').click(function(){
			$('#car').text($(this).text())
		})
		$('.hide').hide();
		$('#hot_city li p').click(function(){
			$(this).children('div').toggleClass('slideDown slideUp').end().next('.hide').slideToggle(100);
		})
		
		$('.gongGao').mouseenter(function(){
			$('#gong_gao').css('display','block')
			$('#gong_gao').mouseenter(function(){
				$('#gong_gao').stop()
			})
		})
		$('#gong_gao').mouseleave(function(){
				$('#gong_gao').hide(200)
		})
		$('.gongGao').mouseleave(function(){
			$('#gong_gao').hide(200)
		})

		$('.phone_guo').mouseenter(function(){
			$('#phoneGuo').css('display','block')
			$('#phoneGuo').mouseenter(function(){
				$('#phoneGuo').stop()
			})
		})
		$('#phoneGuo').mouseleave(function(){
				$('#phoneGuo').hide(200)
		})
		$('.phone_guo').mouseleave(function(){
			$('#phoneGuo').hide(200)
		})
		//动态获取
		 $.ajax({
             url: '../static/index.json',
             type: 'GET',
            
             data: {
             },

             success:function(data){
             	for(var i = 0; i < data.giftData.length; i++){
             		$('.gitCard li').eq(i).prepend('<img src="images/'+data.giftData[i].
             			imgSrc+'"><div class="s_info"><p class="s_name">'+data.giftData[i]
             			.name+'</p><p class="s_unit">'+data.giftData[i].price+'</p></div>')
             	}
             	for(var i = 0; i < data.family.length; i++){
             		$('.familyShop li').eq(i).prepend('<img src="images/'+data.family[i].
             			imgSrc+'"><div class="s_info"><p class="s_name">'+data.family[i]
             			.name+'</p><p class="s_unit">'+data.family[i].price+'</p></div>')
             	}
             	for(var i = 0; i < data.world.length; i++){
             		$('.worldshop li').eq(i).prepend('<img src="images/'+data.world[i].
             			imgSrc+'"><div class="s_info"><p class="s_name">'+data.world[i]
             			.name+'</p><p class="s_unit">'+data.world[i].price+'</p></div>')
             	}
             	for(var i = 0; i < data.world.length; i++){
             		$('.xinshop li').eq(i).prepend('<img src="images/'+data.fresh[i].
             			imgSrc+'"><div class="s_info"><p class="s_name">'+data.fresh[i]
             			.name+'</p><p class="s_unit">'+data.fresh[i].price+'</p></div>')
             	}
             	
             }

         })
	})
	
});
