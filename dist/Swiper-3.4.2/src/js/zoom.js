s.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:s.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(i-a,2))},onGestureStart:function(e){var t=s.zoom;if(!s.support.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(e)}t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=$(this),0===t.gesture.slide.length&&(t.gesture.slide=s.slides.eq(s.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+s.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||s.params.zoomMax,0!==t.gesture.imageWrap.length)?(t.gesture.image.transition(0),t.isScaling=!0):t.gesture.image=void 0},onGestureChange:function(e){var t=s.zoom;if(!s.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;t.gesture.scaleMove=t.getDistanceBetweenTouches(e)}t.gesture.image&&0!==t.gesture.image.length&&(s.support.gestures?t.scale=e.scale*t.currentScale:t.scale=t.gesture.scaleMove/t.gesture.scaleStart*t.currentScale,t.scale>t.gesture.zoomMax&&(t.scale=t.gesture.zoomMax-1+Math.pow(t.scale-t.gesture.zoomMax+1,.5)),t.scale<s.params.zoomMin&&(t.scale=s.params.zoomMin+1-Math.pow(s.params.zoomMin-t.scale+1,.5)),t.gesture.image.transform("translate3d(0,0,0) scale("+t.scale+")"))},onGestureEnd:function(e){var t=s.zoom;!s.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||t.gesture.image&&0!==t.gesture.image.length&&(t.scale=Math.max(Math.min(t.scale,t.gesture.zoomMax),s.params.zoomMin),t.gesture.image.transition(s.params.speed).transform("translate3d(0,0,0) scale("+t.scale+")"),t.currentScale=t.scale,t.isScaling=!1,1===t.scale&&(t.gesture.slide=void 0))},onTouchStart:function(e,t){var a=e.zoom;a.gesture.image&&0!==a.gesture.image.length&&(a.image.isTouched||("android"===e.device.os&&t.preventDefault(),a.image.isTouched=!0,a.image.touchesStart.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,a.image.touchesStart.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY))},onTouchMove:function(e){var t=s.zoom;if(t.gesture.image&&0!==t.gesture.image.length&&(s.allowClick=!1,t.image.isTouched&&t.gesture.slide)){t.image.isMoved||(t.image.width=t.gesture.image[0].offsetWidth,t.image.height=t.gesture.image[0].offsetHeight,t.image.startX=s.getTranslate(t.gesture.imageWrap[0],"x")||0,t.image.startY=s.getTranslate(t.gesture.imageWrap[0],"y")||0,t.gesture.slideWidth=t.gesture.slide[0].offsetWidth,t.gesture.slideHeight=t.gesture.slide[0].offsetHeight,t.gesture.imageWrap.transition(0),s.rtl&&(t.image.startX=-t.image.startX),s.rtl&&(t.image.startY=-t.image.startY));var a=t.image.width*t.scale,i=t.image.height*t.scale;if(!(a<t.gesture.slideWidth&&i<t.gesture.slideHeight)){if(t.image.minX=Math.min(t.gesture.slideWidth/2-a/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-i/2,0),t.image.maxY=-t.image.minY,t.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,t.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!t.image.isMoved&&!t.isScaling){if(s.isHorizontal()&&Math.floor(t.image.minX)===Math.floor(t.image.startX)&&t.image.touchesCurrent.x<t.image.touchesStart.x||Math.floor(t.image.maxX)===Math.floor(t.image.startX)&&t.image.touchesCurrent.x>t.image.touchesStart.x)return void(t.image.isTouched=!1);if(!s.isHorizontal()&&Math.floor(t.image.minY)===Math.floor(t.image.startY)&&t.image.touchesCurrent.y<t.image.touchesStart.y||Math.floor(t.image.maxY)===Math.floor(t.image.startY)&&t.image.touchesCurrent.y>t.image.touchesStart.y)return void(t.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),t.image.isMoved=!0,t.image.currentX=t.image.touchesCurrent.x-t.image.touchesStart.x+t.image.startX,t.image.currentY=t.image.touchesCurrent.y-t.image.touchesStart.y+t.image.startY,t.image.currentX<t.image.minX&&(t.image.currentX=t.image.minX+1-Math.pow(t.image.minX-t.image.currentX+1,.8)),t.image.currentX>t.image.maxX&&(t.image.currentX=t.image.maxX-1+Math.pow(t.image.currentX-t.image.maxX+1,.8)),t.image.currentY<t.image.minY&&(t.image.currentY=t.image.minY+1-Math.pow(t.image.minY-t.image.currentY+1,.8)),t.image.currentY>t.image.maxY&&(t.image.currentY=t.image.maxY-1+Math.pow(t.image.currentY-t.image.maxY+1,.8)),t.velocity.prevPositionX||(t.velocity.prevPositionX=t.image.touchesCurrent.x),t.velocity.prevPositionY||(t.velocity.prevPositionY=t.image.touchesCurrent.y),t.velocity.prevTime||(t.velocity.prevTime=Date.now()),t.velocity.x=(t.image.touchesCurrent.x-t.velocity.prevPositionX)/(Date.now()-t.velocity.prevTime)/2,t.velocity.y=(t.image.touchesCurrent.y-t.velocity.prevPositionY)/(Date.now()-t.velocity.prevTime)/2,Math.abs(t.image.touchesCurrent.x-t.velocity.prevPositionX)<2&&(t.velocity.x=0),Math.abs(t.image.touchesCurrent.y-t.velocity.prevPositionY)<2&&(t.velocity.y=0),t.velocity.prevPositionX=t.image.touchesCurrent.x,t.velocity.prevPositionY=t.image.touchesCurrent.y,t.velocity.prevTime=Date.now(),t.gesture.imageWrap.transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}}},onTouchEnd:function(e,t){var a=e.zoom;if(a.gesture.image&&0!==a.gesture.image.length){if(!a.image.isTouched||!a.image.isMoved)return a.image.isTouched=!1,void(a.image.isMoved=!1);a.image.isTouched=!1,a.image.isMoved=!1;var s=300,i=300,r=a.velocity.x*s,o=a.image.currentX+r,g=a.velocity.y*i,m=a.image.currentY+g;0!==a.velocity.x&&(s=Math.abs((o-a.image.currentX)/a.velocity.x)),0!==a.velocity.y&&(i=Math.abs((m-a.image.currentY)/a.velocity.y));var n=Math.max(s,i);a.image.currentX=o,a.image.currentY=m;var u=a.image.width*a.scale,c=a.image.height*a.scale;a.image.minX=Math.min(a.gesture.slideWidth/2-u/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-c/2,0),a.image.maxY=-a.image.minY,a.image.currentX=Math.max(Math.min(a.image.currentX,a.image.maxX),a.image.minX),a.image.currentY=Math.max(Math.min(a.image.currentY,a.image.maxY),a.image.minY),a.gesture.imageWrap.transition(n).transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}},onTransitionEnd:function(e){var t=e.zoom;t.gesture.slide&&e.previousIndex!==e.activeIndex&&(t.gesture.image.transform("translate3d(0,0,0) scale(1)"),t.gesture.imageWrap.transform("translate3d(0,0,0)"),t.gesture.slide=t.gesture.image=t.gesture.imageWrap=void 0,t.scale=t.currentScale=1)},toggleZoom:function(e,t){var a=e.zoom;if(a.gesture.slide||(a.gesture.slide=e.clickedSlide?$(e.clickedSlide):e.slides.eq(e.activeIndex),a.gesture.image=a.gesture.slide.find("img, svg, canvas"),a.gesture.imageWrap=a.gesture.image.parent("."+e.params.zoomContainerClass)),a.gesture.image&&0!==a.gesture.image.length){var s,i,r,o,g,m,n,u,c,h,l,d,v,p,f,x;void 0===a.image.touchesStart.x&&t?(s="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(s=a.image.touchesStart.x,i=a.image.touchesStart.y),a.scale&&1!==a.scale?(a.scale=a.currentScale=1,a.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),a.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),a.gesture.slide=void 0):(a.scale=a.currentScale=a.gesture.imageWrap.attr("data-swiper-zoom")||e.params.zoomMax,t?(f=a.gesture.slide[0].offsetWidth,x=a.gesture.slide[0].offsetHeight,r=a.gesture.slide.offset().left+f/2-s,o=a.gesture.slide.offset().top+x/2-i,n=a.gesture.image[0].offsetWidth,u=a.gesture.image[0].offsetHeight,c=n*a.scale,h=u*a.scale,v=-(l=Math.min(f/2-c/2,0)),p=-(d=Math.min(x/2-h/2,0)),g=r*a.scale,m=o*a.scale,g<l&&(g=l),g>v&&(g=v),m<d&&(m=d),m>p&&(m=p)):(g=0,m=0),a.gesture.imageWrap.transition(300).transform("translate3d("+g+"px, "+m+"px,0)"),a.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+a.scale+")"))}},attachEvents:function(e){var t=e?"off":"on";if(s.params.zoom){s.slides;var a=!("touchstart"!==s.touchEvents.start||!s.support.passiveListener||!s.params.passiveListeners)&&{passive:!0,capture:!1};s.support.gestures?(s.slides[t]("gesturestart",s.zoom.onGestureStart,a),s.slides[t]("gesturechange",s.zoom.onGestureChange,a),s.slides[t]("gestureend",s.zoom.onGestureEnd,a)):"touchstart"===s.touchEvents.start&&(s.slides[t](s.touchEvents.start,s.zoom.onGestureStart,a),s.slides[t](s.touchEvents.move,s.zoom.onGestureChange,a),s.slides[t](s.touchEvents.end,s.zoom.onGestureEnd,a)),s[t]("touchStart",s.zoom.onTouchStart),s.slides.each(function(e,a){$(a).find("."+s.params.zoomContainerClass).length>0&&$(a)[t](s.touchEvents.move,s.zoom.onTouchMove)}),s[t]("touchEnd",s.zoom.onTouchEnd),s[t]("transitionEnd",s.zoom.onTransitionEnd),s.params.zoomToggle&&s.on("doubleTap",s.zoom.toggleZoom)}},init:function(){s.zoom.attachEvents()},destroy:function(){s.zoom.attachEvents(!0)}};