!function(b){var c=function(e,d){this.$element=b(e);
this.$indicators=this.$element.find(".carousel-indicators");
this.options=d;
this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))
};
c.prototype={cycle:function(d){if(!d){this.paused=false
}if(this.interval){clearInterval(this.interval)
}this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));
return this
},getActiveIndex:function(){this.$active=this.$element.find(".item.active");
this.$items=this.$active.parent().children();
return this.$items.index(this.$active)
},to:function(f){var d=this.getActiveIndex(),e=this;
if(f>(this.$items.length-1)||f<0){return
}if(this.sliding){return this.$element.one("slid",function(){e.to(f)
})
}if(d==f){return this.pause().cycle()
}return this.slide(f>d?"next":"prev",b(this.$items[f]))
},pause:function(d){if(!d){this.paused=true
}if(this.$element.find(".next, .prev").length&&b.support.transition.end){this.$element.trigger(b.support.transition.end);
this.cycle(true)
}clearInterval(this.interval);
this.interval=null;
return this
},next:function(){if(this.sliding){return
}return this.slide("next")
},prev:function(){if(this.sliding){return
}return this.slide("prev")
},slide:function(k,f){var m=this.$element.find(".item.active"),d=f||m[k](),j=this.interval,l=k=="next"?"left":"right",g=k=="next"?"first":"last",h=this,i;
this.sliding=true;
j&&this.pause();
d=d.length?d:this.$element.find(".item")[g]();
i=b.Event("slide",{relatedTarget:d[0],direction:l});
if(d.hasClass("active")){return
}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
this.$element.one("slid",function(){var e=b(h.$indicators.children()[h.getActiveIndex()]);
e&&e.addClass("active")
})
}if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(i);
if(i.isDefaultPrevented()){return
}d.addClass(k);
d[0].offsetWidth;
m.addClass(l);
d.addClass(l);
this.$element.one(b.support.transition.end,function(){d.removeClass([k,l].join(" ")).addClass("active");
m.removeClass(["active",l].join(" "));
h.sliding=false;
setTimeout(function(){h.$element.trigger("slid")
},0)
})
}else{this.$element.trigger(i);
if(i.isDefaultPrevented()){return
}m.removeClass("active");
d.addClass("active");
this.sliding=false;
this.$element.trigger("slid")
}j&&this.cycle();
return this
}};
var a=b.fn.carousel;
b.fn.carousel=function(d){return this.each(function(){var h=b(this),g=h.data("carousel"),e=b.extend({},b.fn.carousel.defaults,typeof d=="object"&&d),f=typeof d=="string"?d:e.slide;
if(!g){h.data("carousel",(g=new c(this,e)))
}if(typeof d=="number"){g.to(d)
}else{if(f){g[f]()
}else{if(e.interval){g.pause().cycle()
}}}})
};
b.fn.carousel.defaults={interval:5000,pause:"hover"};
b.fn.carousel.Constructor=c;
b.fn.carousel.noConflict=function(){b.fn.carousel=a;
return this
};
b(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(j){var i=b(this),f,d=b(i.attr("data-target")||(f=i.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")),g=b.extend({},d.data(),i.data()),h;
d.carousel(g);
if(h=i.attr("data-slide-to")){d.data("carousel").pause().to(h).cycle()
}j.preventDefault()
})
}(window.jQuery);