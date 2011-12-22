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
      	 
           _create(ele, config.data);
           _attachEvents(ele, config.data);
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

    function _create(content_elm, data) {
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
    			<button class='add-button'>>></button> \
          <button class='remove-button'> << </button>\
    		</div> \
    		<div class='combo-to'> \
    	    </div> \
        <select class='combo-form-field' multiple='true' style='display:none' ></select> \
    	</div>"; 
    	$(content_elm).html(htm);  
     };
    function _attachEvents (elm, data) {
      var $elm = $(elm),
      selectedItems,
      $form_field = $elm.find(".combo-form-field");

      $elm.find(".combo-box").on("click", ".item", function(){
        $(this).toggleClass('selected');
      });

      $elm.find(".add-button").click (function(){
        selectedItems = $elm.find(".combo-from .item.selected").removeClass("selected");
        $elm.find(".combo-to").append(selectedItems );
        selectedItems.each (function() {
          var id = $(this).attr("id"),
          string = $(this).html();
          $form_field.append("<option value="+ id + " data-attr='"+id+string+"'>"+ string +"</option>");
        });
      });

      $elm.find(".remove-button").click (function(){
        selectedItems = $elm.find(".combo-to .item.selected");

        $elm.find(".combo-from").append( selectedItems.removeClass("selected"));
        selectedItems.each (function() {
        var id = $(this).attr("id"),
        string = $(this).html();
        $(" .combo-form-field option[data-attr='"+ id+string +"']").remove();
        });
      });
    };

    function _destroy(content_elm) {
    	
    };

    return this;

  };
})(jQuery);