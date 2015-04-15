window.onload = function(){
	var window_height = getHeight();
	var poster = document.getElementById('poster');
	//poster.style.height = window_height + 'px';
	getFollowStoryHeight();
	$(window).resize(function(){
		getFollowStoryHeight();
	});
	
	function getHeight() {
	  var myWidth = 0, myHeight = 0;
	  if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	  }
	  //window.alert( 'Width = ' + myWidth );
	  return myHeight;
	}
	
	function getFollowStoryHeight() {
		var collectiveHeight = $('.we-get-it-banner').height() + $('.bottom-line-banner').height() + $('.done-banner').height() + 42;
		$('.follow-story').css({'top':($('.gap.gap-100:first').height() - (104 * 2) - collectiveHeight) + 'px'});
	}
};