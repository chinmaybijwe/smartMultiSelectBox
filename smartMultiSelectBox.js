(function($){
  $.fn.smsBox = function (settings) {
  config = {
      'ui-smsbox': 'ui-smsbox',
      'ui-smsbox-from': 'ui-smsbox-from',
      'ui-smsbox-middle': 'ui-smsbox-middle',
      'ui-smsbox-to': 'ui-smsbox-to',
  };
    if (settings) $.extend(config, settings);
    /**
     * Apply smsBox to the matching elements
     **/
      this.each (function() {
        //ele is the selectbox
        var ele = this,
        comboBox= _create($(ele), config.data, config);
        _attachEvents(ele, comboBox, config.data, config);
      });

    function init( options ) {
      // THIS
    };
    function show( ) {
      $(this).show();
    };
    function hide( ) {
      $(this).hide();
    };
    function update( content ) {
      // !!!
    };

    function _create(ele, data, options) {
      var items = '';

      $.each(data,function(key,val) {
      items += "<div class='item' id='"+key+"'>"+ val +"</div>";
      });

      var htm = " \
      <div class='"+options['ui-smsbox']+"'> \
        <div class='"+options['ui-smsbox-head']+"'> \
          </div> \
        <div class='"+options['ui-smsbox-from']+"'> \
        "+
      items
      +"</div> \
        <div class='"+options['ui-smsbox-middle']+"'> \
          <input type='button' class='add-button' value='>' /> \
          <input type='button' class='remove-button' value= '<' /> \
        </div> \
        <div class='"+options['ui-smsbox-to']+"'> \
          </div> \
      </div>";
      ele.after(htm);
      return ele.next();

     };
    function _attachEvents (elm, comboBox, data, options) {

      var $elm = $(elm),
      selectedItems;

      $elm.hide().addClass('combo-form-field');

      comboBox.on("click", ".item", function(){
        $(this).toggleClass('selected');
      });

      comboBox.delegate('.add-button', 'click' , function(e){
        selectedItems = comboBox.find("."+options['ui-smsbox-from']+" .item.selected").removeClass("selected");
        comboBox.find("."+options['ui-smsbox-to']).append(selectedItems );
        selectedItems.each (function() {
          var id = $(this).attr("id"),
          string = $(this).html();
          $elm.append("<option value="+ id + " data-attr='"+id+string+"'>"+ string +"</option>");
        });
        //e.preventDefault();
      });

      comboBox.delegate('.remove-button', 'click', function(e){
        selectedItems = comboBox.find("."+options['ui-smsbox-to']+" .item.selected");

        comboBox.find("."+options['ui-smsbox-from']).append( selectedItems.removeClass("selected"));
        selectedItems.each (function() {
        var id = $(this).attr("id"),
        string = $(this).html();
        $(" .combo-form-field option[data-attr='"+ id+string +"']").remove();
        });
        //e.preventDefault();
      });
      return false;
    };

    function _destroy(content_elm) {

    };

    return this;

  };
})(jQuery);