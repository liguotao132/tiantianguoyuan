s.init=function(){s.params.loop&&s.createLoop(),s.updateContainerSize(),s.updateSlidesSize(),s.updatePagination(),s.params.scrollbar&&s.scrollbar&&(s.scrollbar.set(),s.params.scrollbarDraggable&&s.scrollbar.enableDraggable()),"slide"!==s.params.effect&&s.effects[s.params.effect]&&(s.params.loop||s.updateProgress(),s.effects[s.params.effect].setTranslate()),s.params.loop?s.slideTo(s.params.initialSlide+s.loopedSlides,0,s.params.runCallbacksOnInit):(s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit),0===s.params.initialSlide&&(s.parallax&&s.params.parallax&&s.parallax.setTranslate(),s.lazy&&s.params.lazyLoading&&(s.lazy.load(),s.lazy.initialImageLoaded=!0))),s.attachEvents(),s.params.observer&&s.support.observer&&s.initObservers(),s.params.preloadImages&&!s.params.lazyLoading&&s.preloadImages(),s.params.zoom&&s.zoom&&s.zoom.init(),s.params.autoplay&&s.startAutoplay(),s.params.keyboardControl&&s.enableKeyboardControl&&s.enableKeyboardControl(),s.params.mousewheelControl&&s.enableMousewheelControl&&s.enableMousewheelControl(),s.params.hashnavReplaceState&&(s.params.replaceState=s.params.hashnavReplaceState),s.params.history&&s.history&&s.history.init(),s.params.hashnav&&s.hashnav&&s.hashnav.init(),s.params.a11y&&s.a11y&&s.a11y.init(),s.emit("onInit",s)},s.cleanupStyles=function(){s.container.removeClass(s.classNames.join(" ")).removeAttr("style"),s.wrapper.removeAttr("style"),s.slides&&s.slides.length&&s.slides.removeClass([s.params.slideVisibleClass,s.params.slideActiveClass,s.params.slideNextClass,s.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),s.paginationContainer&&s.paginationContainer.length&&s.paginationContainer.removeClass(s.params.paginationHiddenClass),s.bullets&&s.bullets.length&&s.bullets.removeClass(s.params.bulletActiveClass),s.params.prevButton&&$(s.params.prevButton).removeClass(s.params.buttonDisabledClass),s.params.nextButton&&$(s.params.nextButton).removeClass(s.params.buttonDisabledClass),s.params.scrollbar&&s.scrollbar&&(s.scrollbar.track&&s.scrollbar.track.length&&s.scrollbar.track.removeAttr("style"),s.scrollbar.drag&&s.scrollbar.drag.length&&s.scrollbar.drag.removeAttr("style"))},s.destroy=function(a,e){s.detachEvents(),s.stopAutoplay(),s.params.scrollbar&&s.scrollbar&&s.params.scrollbarDraggable&&s.scrollbar.disableDraggable(),s.params.loop&&s.destroyLoop(),e&&s.cleanupStyles(),s.disconnectObservers(),s.params.zoom&&s.zoom&&s.zoom.destroy(),s.params.keyboardControl&&s.disableKeyboardControl&&s.disableKeyboardControl(),s.params.mousewheelControl&&s.disableMousewheelControl&&s.disableMousewheelControl(),s.params.a11y&&s.a11y&&s.a11y.destroy(),s.params.history&&!s.params.replaceState&&window.removeEventListener("popstate",s.history.setHistoryPopState),s.params.hashnav&&s.hashnav&&s.hashnav.destroy(),s.emit("onDestroy"),!1!==a&&(s=null)},s.init();