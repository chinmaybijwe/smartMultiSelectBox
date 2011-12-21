(function($){
  $.fn.smsBox = function (method, options) {
    var settings = $.extend ({
      'location' : 'top' 
    }, options),

    methods = {
    init : function( options ) { 
      // THIS 
    },
    show : function( ) {
      // IS
    },
    hide : function( ) { 
      // GOOD
    },
    update : function( content ) { 
      // !!! 
    },
    _create : function(content_elm) {
		 content_elem.html("it comes here ");      
     },
    _destroy : function(content_elm) {
    	
    }

  };
  if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    

    return this.each (function() {
      
    });
      /**
      * Apply interaction to all the matching elements
      **/
     this.each(function() {
         var ele = this;
         _show(ele);
     });

  };
})(jQuery);