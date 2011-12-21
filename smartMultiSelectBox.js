(function($){
  $.fn.smsBox = function (settings) {
	config = { 
			'color' : 'red' //lets add config option as we make it more flexible
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
		      
     };
    function _destroy(content_elm) {
    	
    };

    return this;

  };
})(jQuery);