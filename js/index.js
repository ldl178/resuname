// 导航菜单固定在顶部
$(function() {
	//获取要定位元素距离浏览器顶部的距离
	var navH = $(".topp").offset().top;
	var top_tt = $("#top_tt").offset().top; //返回顶部
	//滚动条事件
	$(window).scroll(function() {
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if (scroH >= navH) {
			$(".topp").css({
				"position": "fixed",
				"top": "0",
				"width": "100%",
				"zIndex": "99",
				"background-color": "#EAE6F3",
			});
		} else if (scroH < navH) {
			$(".topp").css({
				"position": "static",
				"background-color": "#fff",
			});
		}

		// 返回顶部功能
		if (scroH > top_tt) {
			$("#top_tt").css("display", "block");
		} else if (scroH < 400) {
			$("#top_tt").css("display", "none");
		}
	})

	// 轮播
	var swiper = new Swiper('.swiper-container', {
		autoplay: {
			disableOnInteraction: false,
		},
		loop: true, // 循环模式选项
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
})