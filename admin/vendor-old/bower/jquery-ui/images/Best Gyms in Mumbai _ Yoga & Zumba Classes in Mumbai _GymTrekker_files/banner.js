(function($) {
  "use strict";
  // jQuery Banner Index 
		var slider = new MasterSlider();

		slider.control('arrows' ,{insertTo:'#masterslider-index'});	
		slider.control('bullets');	

		slider.setup('masterslider-index' , {
			width:1366,
			height:768,
			space: 0,
			view:'basic',
			mouse: false,
			overPause: false,
			layout:'fullscreen',
			fullscreenMargin:0,
			loop:true,
			autoplay: true,
			speed:50
		});
	// End jQuery Banner Index 

    // jQuery Banner Layer     
     var slider = new MasterSlider();
    
    // adds Arrows navigation control to the slider.
    slider.control('arrows');
    slider.control('timebar' , {insertTo:'#masterslider'});
    slider.control('bullets');
    
     slider.setup('masterslider' , {
    	 width:1400,    // slider standard width
    	 height:768,   // slider standard height
    	 space:1,
    	 layout:'fullscreen',
    	 loop:true,
    	 preload:0,
		 fullscreenMargin:0,
    	 autoplay:true
		 
    });
	// End jQuery Banner Layer 	
})(jQuery);
	