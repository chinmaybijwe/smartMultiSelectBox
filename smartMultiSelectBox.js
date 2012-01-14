(function ($) {
  $.fn.smsBox = function (settings) {
  var config = {
      'ui-smsbox': 'ui-smsbox',
      'ui-smsbox-from': 'ui-smsbox-from',
      'ui-smsbox-middle': 'ui-smsbox-middle',
      'ui-smsbox-to': 'ui-smsbox-to',
      'ui-smsbox-search': 'ui-smsbox-search'
    },
  data = {
    unselected : {},
    selected : {}

  };
    if (settings) $.extend(config, settings);
    /**
     * Apply smsBox to the matching elements
     **/
      this.each (function() {
        //ele is the selectbox
        var ele = this,
        comboBox;

        comboBox= _create($(ele), data, config);
        _attachEvents(ele, comboBox, data.unselected, config);
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

    function _populateData (data) {
      var items = '';
      $.each(data,function(key,val) {
        items += "<div class='item' id='"+ key + "'>" + val + "</div>";
      });
      return items;
    }
    function _create(ele, data, options) {
      var unselectedItems,
      selectedItems,
      htm,
      comboBoxOptions = ele.find("option");

      if (comboBoxOptions.size()>0) {
        comboBoxOptions.each (function() {
          data.unselected[$(this).html()] = $(this).attr("value");
          $(this).remove();
        });
      }
      selectedItems = _populateData (data.unselected);
      unSelectedItems = _populateData (data.selected);

      htm = " \
      <div class='"+options['ui-smsbox']+"'> \
         <div> \
            <input type='text' value='' class='"+options['ui-smsbox-search']+"' /> \
         </div> \
        <div class='"+options['ui-smsbox-head']+"'> \
          </div> \
        <div class='"+options['ui-smsbox-from']+"'> \
        "+
      selectedItems
      +"</div> \
        <div class='"+options['ui-smsbox-middle']+"'> \
          <input type='button' class='add-button' value='>' /> \
          <input type='button' class='remove-button' value= '<' /> \
        </div> \
        <div class='"+options['ui-smsbox-to']+"'> \
          "+unSelectedItems
          +
      "</div> \
      </div>";
      ele.after(htm);
      return ele.next();

     };
    function _attachEvents (elm, comboBox, data, options) {

      var $elm = $(elm),
      selectedItems,
      elmOptions = $elm.find("option");

      $elm.hide().addClass('combo-form-field');
      if (elmOptions.size() > 0) {
        elmOptions.each(function () {
          comboBox.find("."+options['ui-smsbox-from']).append(this.value );
        })
      }

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
      });

      comboBox.delegate('.remove-button', 'click', function(e){
        selectedItems = comboBox.find("."+options['ui-smsbox-to']+" .item.selected");

        comboBox.find("."+options['ui-smsbox-from']).append( selectedItems.removeClass("selected"));
        selectedItems.each (function() {
        var id = $(this).attr("id"),
        string = $(this).html();
        $(" .combo-form-field option[data-attr='"+ id+string +"']").remove();
        });
      });

      comboBox.delegate("."+options['ui-smsbox-search'], 'keyup' , function(e){
        _search($(this).val());
      });

      return false;
    };

    function _destroy(content_elm) {

    };

    function _search(searchText) {

    };

    return this;

  };
})(jQuery);