$(function(){
	$(window).scroll(function(event) {
		var scroll = $(document).scrollTop();
		if (scroll > 60){
			$("#HeaderSmall").show();
			$("#Dropdown").css("position", "fixed");
			$("#Dropdown").css("top", "60px");
			$("#Dropdown").css("border-top", "1px solid black");
			$("#LongScroll").css("position", "fixed");
			$("#LongScroll").css("top", "90px");
		}else{
			$("#HeaderSmall").hide();
			$("#Dropdown").css("position", "absolute");
			$("#Dropdown").css("top", "10%");
			$("#Dropdown").css("border-top", "none");
			$("#LongScroll").css("position", "absolute");
			$("#LongScroll").css("top", "150px");
		}
	});
	$(".DropdownTrigger").mouseover(function(event) {
		$("#Dropdown").show();
	});
	$("#Dropdown").mouseleave(function(event) {
		console.log(event.target);
		if (!(event.relatedTarget.classList.contains("DropdownTrigger"))) {
			$("#Dropdown").hide();
		}
		
	});
	$(".DropdownTrigger").mouseleave(function(event) {
		console.log(event);
		if (!(event.relatedTarget.id === "Dropdown") && !($.contains($("#Dropdown")[0], event.relatedTarget))) {
			$("#Dropdown").hide();
		}
	});


});

