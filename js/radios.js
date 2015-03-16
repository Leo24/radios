jQuery(function () {
  jQuery.ajax({
    url: 'http:\/\/racii.com\/wordpress\/wp-admin\/admin-ajax.php',
    type: "POST",
    data: {action: 'get_list_radios_accessories'},
    success: function (products) {
      var radios = JSON.parse(products);

      for(var radio in radios) {

        var accessories = radios[radio];
        for(var accessory in accessories){
          accessory = accessories[accessory];
          debugger;
        }

      }
    }
  })
});
