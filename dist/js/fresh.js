require.config({paths:{jquery:"../libs/jquery",swiper:"../libs/swiper.min"}}),require(["jquery","swiper"],function(o,e){o(function(){o("#car").mouseenter(function(){o(this).css("backgroundColor","#fff"),o("#hot_city").css("display","block"),o("#hot_city").mouseenter(function(){o("#hot_city").stop()}),o("#hot_city").mouseleave(function(){o("#hot_city").hide(100)})}),o("#car").mouseleave(function(){o(this).css("backgroundColor",""),o("#hot_city").hide(100)}),o("#hot_city li p").click(function(){o("#car").text(o(this).text())}),o(".hide").hide(),o("#hot_city li p").click(function(){o(this).children("div").toggleClass("slideDown slideUp").end().next(".hide").slideToggle(100)}),o(".gongGao").mouseenter(function(){o("#gong_gao").css("display","block"),o("#gong_gao").mouseenter(function(){o("#gong_gao").stop()})}),o("#gong_gao").mouseleave(function(){o("#gong_gao").hide(200)}),o(".gongGao").mouseleave(function(){o("#gong_gao").hide(200)}),o(".phone_guo").mouseenter(function(){o("#phoneGuo").css("display","block"),o("#phoneGuo").mouseenter(function(){o("#phoneGuo").stop()})}),o("#phoneGuo").mouseleave(function(){o("#phoneGuo").hide(200)}),o(".phone_guo").mouseleave(function(){o("#phoneGuo").hide(200)}),o.ajax({url:"../static/fresh.json",type:"GET",data:{},success:function(e){for(var i=0;i<e.giftData.length;i++)o(".gitCard li").eq(i).prepend('<img src="images/'+e.giftData[i].imgSrc+'"><div class="s_info"><p class="s_name">'+e.giftData[i].name+'</p><p class="s_unit">'+e.giftData[i].price+"</p></div>")}})})});