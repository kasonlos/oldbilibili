var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
function toggleTopic( ele )
{
	$('.collapse-sublist a').removeClass("active");
	
	$( ele ).toggleClass("active");
}

function bindClickEvent()
{
	$(".collapse-title").click(function (k, v) {
	
		if ( $(this).hasClass("active") )
		{
			$( this ).removeClass("active").next().slideUp(300);
		}
		else
		{
			$(".collapse-title").removeClass("active");
			$(".collapse-sublist").slideUp(300);
			$( this ).addClass("active").next().slideDown(300);
		}
		
	});
	
	/*
	$(".collapse-sublist a, .redirect-link").each(function (k, v) {
		$( this ).attr("onClick", "toggleTopic( this )");
	});
	*/
}

function onHashChange ()
{
	$(".jump-point").css("top", "-" + ($(".help-navi").height() + 10) + "px");
	
	var hash = ( window.location.hash ) ? window.location.hash.split('?')[0] : "#introduction", title;
	
	if ( ! $( hash ).hasClass("help-content-page") )
	{
		hash = "#" + $(hash).parent().attr("id");
	}
	
	if ( ! $( hash ).is(":visible") )
	{
		$('.help-content > .help-content-page, .help-navi > ul > .list').hide();
		
		$(hash).show().trigger("scroll");
		
		$(window).scrollTop(0);
		
		if ( $(hash + '-list').length > 0 )
		{
			$(hash + '-list').slideDown(300, function () {
				$(window).trigger("scroll");
				/*
				.scrollTop(
					$(hash).offset().top
				);
				*/
			});
		}
		
		title = $('[href="' + hash + '"]').children("span").html();
		
		$('.help-navi-title').html( ( title ) ? title : "å¸®åŠ©é¦–é¡µ" );
		
		if ( $(hash + "-list .grid").length > 0 )
		{
			$(".help-navi ul").show();
		}
		else
		{
			$(".help-navi ul").hide();
		}
		
		if ( ! $('[href="' + hash + '"]').hasClass("redirect-link") )
		{
			// æŒ–åŸä¸‰ä»£
			$('[href="' + hash + '"]')
				.parent()
				.parent()
				.parent()
				.children(".collapse-title")
				.addClass("active")
				.next()
				.show();
		
			toggleTopic($('[href="' + hash + '"]'));
		}
	}
}

function layoutFix () 
{
	if ( $(window).scrollTop() > $(".help-navi-wrapper").offset().top ) 
	{
		$(".help-navi-wrapper").css("height", $(".help-navi").css("height"));
		$(".help-list").addClass("help-top-float");
		$(".help-content").addClass("float-fixed");
		
		$(".jump-point").css("top", "-" + ( $(".help-navi").height() + 10 ) + "px");
	}
	else
	{
		$(".help-navi-wrapper").css("height", "");
		$(".help-navi, .help-list").removeClass("help-top-float");
		$(".help-content").removeClass("float-fixed");
		
		$(".jump-point").css("top", "-5px");
	}
	
	if ( ( $(".help-list").offset().top + $(".help-list").height() ) > $(".footer").offset().top - 50 )
	{
		$(".help-list").removeClass("help-top-float");
	}
	else
	{
		if ( window.scrollX > 0 )
			$(".help-list").css("left", ( $(".help-content").position().left - $(".help-list").width() - window.scrollX) + "px" );
		else $(".help-list").css("left", "");
	}
}


$(function () {
	
	$("img").lazyload({effect : "fadeIn", failure_limit : 10});
	
	$(window).on('hashchange', function(e){
		e.preventDefault();
		onHashChange();
	});
	
	//Firefox
	$(window).bind('DOMMouseScroll', function(e){
		if(e.originalEvent.detail > 0) {
			$(".help-navi").removeClass("help-top-float");
		} else {
			if ( $(window).scrollTop() > $(".help-navi-wrapper").offset().top + ($(".help-navi").height() * 1.5) ) 
				$(".help-navi").addClass("help-top-float");
		}
	});

	//IE, Opera, Safari
	$(window).bind('mousewheel', function(e){
		if(e.originalEvent.wheelDelta < 0) {
			$(".help-navi").removeClass("help-top-float");
		} else {
			if ( $(window).scrollTop() > $(".help-navi-wrapper").offset().top + ($(".help-navi").height() * 1.5) ) 
				$(".help-navi").addClass("help-top-float");
		}
	});
	
	//IE
	$(window).bind('wheel', function(e){
		if(e.originalEvent.wheelDelta < 0) {
			$(".help-navi").removeClass("help-top-float");
		} else {
			if ( $(window).scrollTop() > $(".help-navi-wrapper").offset().top + ($(".help-navi").height() * 1.5) ) 
				$(".help-navi").addClass("help-top-float");
		}
	});
	
	$(window).on('scroll', layoutFix);
	$(window).on('resize', layoutFix);
	
	bindClickEvent();
	
	onHashChange();
	
});

}

/*
     FILE ARCHIVED ON 05:34:28 Jun 03, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:16:47 Jun 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.25
  captures_list: 0.473
  exclusion.robots: 0.048
  exclusion.robots.policy: 0.039
  esindex: 0.008
  cdx.remote: 7.428
  LoadShardBlock: 129.651 (3)
  PetaboxLoader3.datanode: 69.992 (4)
  PetaboxLoader3.resolve: 106.443 (3)
  load_resource: 76.315
*/
