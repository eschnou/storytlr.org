!function(c){var b=function(e,d){this.options=c.extend({},c.fn.affix.defaults,d);
this.$window=c(window).on("scroll.affix.data-api",c.proxy(this.checkPosition,this)).on("click.affix.data-api",c.proxy(function(){setTimeout(c.proxy(this.checkPosition,this),1)
},this));
this.$element=c(e);
this.checkPosition()
};
b.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var h=c(document).height(),j=this.$window.scrollTop(),d=this.$element.offset(),k=this.options.offset,f=k.bottom,g=k.top,i="affix affix-top affix-bottom",e;
if(typeof k!="object"){f=g=k
}if(typeof g=="function"){g=k.top()
}if(typeof f=="function"){f=k.bottom()
}e=this.unpin!=null&&(j+this.unpin<=d.top)?false:f!=null&&(d.top+this.$element.height()>=h-f)?"bottom":g!=null&&j<=g?"top":false;
if(this.affixed===e){return
}this.affixed=e;
this.unpin=e=="bottom"?d.top-j:null;
this.$element.removeClass(i).addClass("affix"+(e?"-"+e:""))
};
var a=c.fn.affix;
c.fn.affix=function(d){return this.each(function(){var g=c(this),f=g.data("affix"),e=typeof d=="object"&&d;
if(!f){g.data("affix",(f=new b(this,e)))
}if(typeof d=="string"){f[d]()
}})
};
c.fn.affix.Constructor=b;
c.fn.affix.defaults={offset:0};
c.fn.affix.noConflict=function(){c.fn.affix=a;
return this
};
c(window).on("load",function(){c('[data-spy="affix"]').each(function(){var e=c(this),d=e.data();
d.offset=d.offset||{};
d.offsetBottom&&(d.offset.bottom=d.offsetBottom);
d.offsetTop&&(d.offset.top=d.offsetTop);
e.affix(d)
})
})
}(window.jQuery);