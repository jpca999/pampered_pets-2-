!function(e){function a(){var e=document.createElement("iframe"),a=(this.dataset.src,"");a=this.dataset.sourcelink,e.setAttribute("src",a),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),this.parentNode.replaceChild(e,this)}UAELModalPopup={_center:function(){setTimeout(function(){e(".uael-modal-parent-wrapper").each(function(){var a=e(this).attr("id").replace("-overlay","");UAELModalPopup._centerModal(a)})},300)},_centerModal:function(a){var o=e(".uamodal-"+a),t=e("#modal-"+a),l=0,d=t.find(".uael-modal-close"),n=(e(window).height()-t.outerHeight())/2;if(t.hasClass("uael-center-modal")&&t.removeClass("uael-center-modal"),(d.hasClass("uael-close-custom-popup-top-right")||d.hasClass("uael-close-custom-popup-top-left"))&&(l=parseInt(d.outerHeight())),o.find(".uael-content").outerHeight()>e(window).height()){if(n=20+l,t.hasClass("uael-show")){e("html").addClass("uael-html-modal"),t.addClass("uael-modal-scroll");var i=e("#wpadminbar");i.length>0&&(n+=parseInt(i.outerHeight()));var r=t.find(".uael-content");r.css("margin-top",+n+"px"),r.css("margin-bottom","20px")}}else n=parseInt(n)+20;t.css("top",+n+"px"),t.css("margin-bottom","20px")},_show:function(a){e(window).trigger("uael_before_modal_popup_open",[a]),UAELModalPopup._autoPlay(a);var o=e("#modal-"+a);o.hasClass("uael-modal-vimeo")||o.hasClass("uael-modal-youtube")?setTimeout(function(){o.addClass("uael-show")},300):o.addClass("uael-show"),setTimeout(function(){o.removeClass("uael-effect-13")},1e3),UAELModalPopup._centerModal(a),UAELModalPopup._afterOpen(a)},_close:function(a){var o=e("#modal-"+a);o.removeClass("uael-show"),e("html").removeClass("uael-html-modal"),o.removeClass("uael-modal-scroll"),UAELModalPopup._stopVideo(a),"closed"===e(".uamodal-"+a).data("cookies-type")&&UAELModalPopup._setPopupCookie(a)},_canShow:function(a){var o=e(".uamodal-"+a).data("cookies"),t=Cookies.get("uael-modal-popup-"+a),l=!0;return void 0!==o&&"yes"===o&&void 0!==t&&"true"==t?l=!1:Cookies.remove("uael-modal-popup-"+a),e(".uael-show").length>0&&(l=!1),e("#modal-"+a).hasClass("uael-modal-editor")&&(l=!1),l},_autoPlay:function(a){var o=e(".uamodal-"+a),t=o.data("autoplay"),l=o.data("content"),d=e("#modal-"+a);if("yes"==t&&("youtube"==l||"vimeo"==l)){var n=d.find(".uael-video-player").data("id");if(0==d.find(".uael-video-player iframe").length)d.find(".uael-video-player div[data-id="+n+"]").trigger("click");else{var i=o.find("iframe"),r=i.attr("src")+"&autoplay=1";i.attr("src",r)}}if("iframe"==l&&0==o.find(".uael-modal-content-data iframe").length){var s=o.find(".uael-modal-content-type-iframe").data("src"),u=document.createElement("iframe");u.setAttribute("src",s),u.setAttribute("style","display:none;"),u.setAttribute("frameborder","0"),u.setAttribute("allowfullscreen","1"),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("class","uael-content-iframe");var c=o.find(".uael-modal-content-data");c.html(u),c.append('<div class="uael-loader"><div class="uael-loader-1"></div><div class="uael-loader-2"></div><div class="uael-loader-3"></div></div>'),u.onload=function(){window.parent.jQuery(document).find("#modal-"+a+" .uael-loader").fadeOut(),this.style.display="block"}}},_stopVideo:function(a){var o=e(".uamodal-"+a);if("photo"!=o.data("content")){var t=o.find("iframe"),l=o.find("video");if(t.length){var d=t.attr("src").replace("&autoplay=1","");t.attr("src",""),t.attr("src",d)}else l.length&&(l[0].pause(),l[0].currentTime=0)}},_afterOpen:function(a){"default"==e(".uamodal-"+a).data("cookies-type")&&UAELModalPopup._setPopupCookie(a),e(window).trigger("uael_after_modal_popup_open",[a])},_setPopupCookie:function(a){var o=Cookies.get("uael-modal-popup-"+a),t=parseInt(e(".uamodal-"+a).data("cookies-days")),l="https:"===window.location.protocol||"";void 0===o&&void 0!==t&&Cookies.set("uael-modal-popup-"+a,!0,{expires:t,secure:l})}},e(document).on("keyup",function(a){27==a.keyCode&&e(".uael-modal-parent-wrapper").each(function(){var a=e(this),o=a.attr("id").replace("-overlay","");"yes"==a.data("close-on-esc")&&UAELModalPopup._close(o)})}),e(document).on("click touchstart",".uael-overlay, .uael-modal-scroll",function(a){if(!(e(a.target).hasClass("uael-content")||e(a.target).closest(".uael-content").length>0)){var o=e(this).closest(".uael-modal-parent-wrapper"),t=o.attr("id").replace("-overlay","");"yes"==o.data("close-on-overlay")&&UAELModalPopup._close(t)}}),e(document).on("click",".uael-modal-close, .uael-close-modal",function(){var a=e(this).closest(".uael-modal-parent-wrapper").attr("id").replace("-overlay","");UAELModalPopup._close(a)}),e(document).on("click",".uael-trigger",function(){var a=e(this).closest(".elementor-element").data("id"),o=e(".uamodal-"+a).data("trigger-on");"text"!=o&&"icon"!=o&&"photo"!=o&&"button"!=o||UAELModalPopup._show(a)}),e(document).on("uael_modal_popup_init",function(o,t){e("#modal-"+t).hasClass("uael-show-preview")&&setTimeout(function(){UAELModalPopup._show(t)},400);var l=e("#"+t+"-overlay"),d=l.data("content"),n=l.data("device");"youtube"!=d&&"vimeo"!=d||0==e(".uael-video-player iframe").length&&e(".uael-video-player").each(function(o,t){var l=e("<div/>"),d=e(this);l.attr("data-id",d.data("id")),l.attr("data-src",d.data("src")),l.attr("data-sourcelink",d.data("sourcelink")),l.html('<img src="'+d.data("thumb")+'"><div class="play '+d.data("play-icon")+'"></div>'),l.on("click",a),d.html(l),1==n&&e(l[0]).trigger("click")}),UAELModalPopup._centerModal(t)}),e(window).on("resize",function(){UAELModalPopup._center()}),e(document).on("mouseleave",function(a){a.clientY>20||e(".uael-modal-parent-wrapper").each(function(){var a=e(this),o=a.attr("id").replace("-overlay",""),t=a.data("trigger-on"),l=a.data("exit-intent");"automatic"==t&&"yes"==l&&UAELModalPopup._canShow(o)&&UAELModalPopup._show(o)})}),e(document).ready(function(a){window.location.href.indexOf("&action=elementor")<=0&&e(".uael-modal-parent-wrapper").each(function(){e(this).appendTo(document.body)}),UAELModalPopup._center(),e(".uael-modal-content-data").resize(function(){UAELModalPopup._center()}),e(".uael-modal-parent-wrapper").each(function(){var a,o=e(this),t=o.attr("id").replace("-overlay",""),l=o.data("trigger-on"),d=o.data("after-sec"),n=o.data("after-sec-val"),i=o.data("custom"),r=o.data("custom-id");if("automatic"==l&&"yes"==d&&void 0!==n){var s=t;setTimeout(function(){UAELModalPopup._canShow(s)&&UAELModalPopup._show(s)},1e3*parseInt(n))}if("custom"==l&&(void 0!==i&&""!=i&&(a=i.split(",")).length>0))for(var u=0;u<a.length;u++)void 0!==a[u]&&""!=a[u]&&(e("."+a[u]).css("cursor","pointer"),e(document).on("click","."+a[u],function(){UAELModalPopup._show(t)}));if("custom_id"==l&&(void 0!==r&&""!=r&&(a=r.split(",")).length>0))for(u=0;u<a.length;u++)void 0!==a[u]&&""!=a[u]&&(e("#"+a[u]).css("cursor","pointer"),e(document).on("click","#"+a[u],function(){UAELModalPopup._show(t)}));if("via_url"==l){var c=window.location.href,p=new URL(c).searchParams.get("uael-modal-action");p===t&&UAELModalPopup._show(p)}})});var o=function(e,a){if(void 0!==e){var o=e.data("id"),t=a(".uamodal-"+o);e.hasClass("elementor-hidden-desktop")&&t.addClass("uael-modal-hide-desktop"),e.hasClass("elementor-hidden-tablet")&&t.addClass("uael-modal-hide-tablet"),e.hasClass("elementor-hidden-phone")&&t.addClass("uael-modal-hide-phone"),a(document).trigger("uael_modal_popup_init",o)}};e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/uael-modal-popup.default",o)})}(jQuery);