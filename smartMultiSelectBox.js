(function($){
  $.fn.smsBox = function (settings) {
	config = { 
			'color' : 'red', //lets add config option as we make it more flexible
			'data'  : {1:'Empty'}
	}; 
    if (settings) $.extend(config, settings);
    /**
     * Apply smsBox to the matching elements
     **/
      this.each (function() {
      	 var ele = this;
      	 
           _create(ele,config.data);
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
    function _create(content_elm,data) {
    	var items = '';
    	
    	$.each(data,function(key,val) {
			items += "<div class='item' id='"+key+"'>"+ val +"</div>";
		});
    	
    	var htm = " \
    	<div class='combo-box'> \
    		<div class='combo-head'> \
    			</div> \
    		<div class='combo-from'> \
    		"+
			items
			+"</div> \
    		<div class='combo-middle'> \
    			.. \
    		</div> \
    		<div class='combo-to'> \
    			TO \
    	    </div> \
    	</div>"; 
    	$(content_elm).html(htm);  
     };
    function _destroy(content_elm) {
    	
    };

    return this;

  };
})(jQuery);