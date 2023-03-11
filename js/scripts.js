(function ($) {
  "use strict";

  /* ========================================== 
	Sticky Header 1
	========================================== */
  $(window).on("scroll", function () {
    if ($("#site-header").hasClass("sticky-header")) {
      var site_header = $("#site-header").outerHeight() + 30;

      if ($(window).scrollTop() >= site_header) {
        $(
          ".sticky-header .octf-main-header, .mobile-header-sticky .header_mobile"
        ).addClass("is-stuck");
      } else {
        $(
          ".sticky-header .octf-main-header, .mobile-header-sticky .header_mobile"
        ).removeClass("is-stuck");
      }
    }
  });

  /* ========================================== 
    Search on Header
    ========================================== */
  $(".toggle_search").on("click", function () {
    $(this).toggleClass("active");
    $(".h-search-form-field").toggleClass("show");
    if ($(this).find("i").hasClass("flaticon-search")) {
      $(".toggle_search > i")
        .removeClass("flaticon-search")
        .addClass("flaticon-close");
    } else {
      $(".toggle_search > i")
        .removeClass("flaticon-close")
        .addClass("flaticon-search");
    }
    $(".h-search-form-inner > form > input.search-field").focus();
  });

  /* --------------------------------------------------
   * switcher
   * --------------------------------------------------*/

  $(".ot-switcher input").click(function () {
    if ($(this).is(":checked")) {
      $(".price-1").css("display", "none");
      $(".price-2").css("display", "inline-block");
      $(".per").css("display", "none");
      $(".per-year").css("display", "inline-block");
    } else {
      $(".price-2").css("display", "none");
      $(".price-1").css("display", "inline-block");
      $(".per-year").css("display", "none");
      $(".per").css("display", "inline-block");
    }
  });

  var navInneer = $(".one-nav");
  if (navInneer.length > 0) {
    navInneer.singlePageNav({
      updateHash: false,
      filter: 'a[href^="#"]',
      offset: 0,
      speed: 600,
      currentClass: "current",
      easing: "swing",
    });
  }
  /* ========================================== 
    Back To Top
    ========================================== */

  $(".ot-chart-bar:not([data-processed])").each(function () {
    var bar = $(this),
      chart = bar.find(".col-chart"),
      innerBar = bar.find(".inner-bar"),
      heightChart = bar.data("height"),
      progressEnd = bar.data("percent"),
      percentText = bar.find(".percent");
    var scrollTop = $(document).scrollTop() + $(window).height();

    if (scrollTop > bar.offset().top + bar.height()) {
      bar.attr("data-processed", "true");
      chart.css({
        height: heightChart + "px",
        animation: "slide-up 1.5s ease-in-out",
      });
      innerBar.css({ height: heightChart + "px" });

      if (progressEnd) {
        for (var i = 0; i <= 50; i++) {
          (function (count) {
            setTimeout(function () {
              var num = (progressEnd / 50) * count + Number.EPSILON;
              percentText.html(Math.round(num * 100) / 100 + "%");
            }, 30 * count);
          })(i);
        }
      }
    }
  });
});

$(".ot-accordions").each(function () {
  var allPanels = $(this).find(".acc-content");
  $(this)
    .find(".acc-toggle")
    .on("click", function () {
      var $this = $(this),
        $target = $this.next();

      if (!$target.hasClass("active")) {
        allPanels.removeClass("active").slideUp(300);
        allPanels.parent().removeClass("current");
        $target.addClass("active").slideDown(300);
        $target.parent().addClass("current");
      }

      return false;
    });
  $(this).find(".acc-toggle:first").trigger("click");
});

$(".ot-acc--with-icon").each(function () {
  var selector = $(this),
    content = selector.find(".ot-acc-item__content"),
    trigger = selector.find(".ot-acc-item__trigger");

  trigger.off("click");

  trigger.each(function () {
    if ($(this).data("default") == "yes") {
      $(this).next().addClass("active").slideDown(300);
      $(this).parent().addClass("current");
    }
  });

  trigger.on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.next().toggleClass("active").slideToggle(300);
    $this.parent().toggleClass("current");
    content.not($this.next()).slideUp(300);
    trigger.not($this).parent().removeClass("current");
  });
});

$(".ot-tabs").each(function () {
  $(this).find(".tabs-heading li").first().addClass("current");
  $(this).find(".tab-content").first().addClass("current");
});

$(".tabs-heading li").on("click", function () {
  var tab_id = $(this).attr("data-tab");
  $(this).siblings().removeClass("current");
  $(this).parents(".ot-tabs").find(".tab-content").removeClass("current");
  $(this).addClass("current");
  $("#" + tab_id).addClass("current");
});

/* --------------------------------------------------
 * big tabs
 * --------------------------------------------------*/
$(".tab-titles .title-item, .tab-titles-2 .title-item-2").on(
  "click",
  function () {
    $(".tab-active").removeClass("tab-active");
    $(this).addClass("tab-active");
    $(".content-tab").hide();
    $(".content-tab-2").hide();
    $($(this).data("link")).show();

    return false;
  }
);
$(".tab-titles .title-item:first, .tab-titles-2 .title-item-2:first").trigger(
  "click"
);

$(".message-box > i").on("click", function () {
  $(this).parent().fadeOut();
});
