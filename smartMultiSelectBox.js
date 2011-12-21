(function($){
  $.fn.smsBox = function (settings) {
	config = { 
			'color' : 'div.tooltip_description'
	}; 
    if (settings) $.extend(config, settings);
    /**
     * Apply smsBox to the matching elements
     **/
      this.each (function() {
      	 var ele = this;
           _create(ele);
      });
        

   
    function init( options ) { 
      // THIS 
    };
    function show( ) {
      // IS
    };
    function hide( ) { 
      // GOOD
    };
    function update( content ) { 
      // !!! 
    };
    function _create(content_elm) {
		 $(content_elm).html("it comes here ");      
     };
    function _destroy(content_elm) {
    	
    };

    return this;

  };
})(jQuery);