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
  };
})(jQuery);