s.history={init:function(){if(s.params.history){if(!window.history||!window.history.pushState)return s.params.history=!1,void(s.params.hashnav=!0);s.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,s.params.runCallbacksOnInit),s.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){s.history.paths=s.history.getPathValues(),s.history.scrollToSlide(s.params.speed,s.history.paths.value,!1)},getPathValues:function(){var s=window.location.pathname.slice(1).split("/"),t=s.length;return{key:s[t-2],value:s[t-1]}},setHistory:function(t,a){if(s.history.initialized&&s.params.history){var i=s.slides.eq(a),e=this.slugify(i.attr("data-history"));window.location.pathname.includes(t)||(e=t+"/"+e),s.params.replaceState?window.history.replaceState(null,null,e):window.history.pushState(null,null,e)}},slugify:function(s){return s.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(t,a,i){if(a)for(var e=0,r=s.slides.length;e<r;e++){var l=s.slides.eq(e);if(this.slugify(l.attr("data-history"))===a&&!l.hasClass(s.params.slideDuplicateClass)){var o=l.index();s.slideTo(o,t,i)}}else s.slideTo(0,t,i)}};