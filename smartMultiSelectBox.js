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
        //ele is the selectbox
        var ele = this,
        comboBox= _create($(ele), config.data);
        _attachEvents(ele, comboBox, config.data);
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

    function _create(ele, data) {
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
          <button class='add-button'> >> </button> \
          <button class='remove-button'> << </button>\
        </div> \
        <div class='combo-to'> \
          </div> \
      </div>";
      ele.after(htm);
      return ele.next();

     };
    function _attachEvents (elm, comboBox, data) {

      var $elm = $(elm),
      selectedItems;

      $elm.hide().addClass('combo-form-field');

      comboBox.on("click", ".item", function(){
        $(this).toggleClass('selected');
      });

      comboBox.find(".add-button").click (function(e){
        selectedItems = comboBox.find(".combo-from .item.selected").removeClass("selected");
        comboBox.find(".combo-to").append(selectedItems );
        selectedItems.each (function() {
          var id = $(this).attr("id"),
          string = $(this).html();
          $elm.append("<option value="+ id + " data-attr='"+id+string+"'>"+ string +"</option>");
        });
        e.preventDefault();
      });

      comboBox.find(".remove-button").click (function(e){
        selectedItems = comboBox.find(".combo-to .item.selected");

        comboBox.find(".combo-from").append( selectedItems.removeClass("selected"));
        selectedItems.each (function() {
        var id = $(this).attr("id"),
        string = $(this).html();
        $(" .combo-form-field option[data-attr='"+ id+string +"']").remove();
        });
        e.preventDefault();
      });
      return false;
    };

    function _destroy(content_elm) {

    };

    return this;

  };
})(jQuery);