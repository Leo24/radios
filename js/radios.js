jQuery(function () {
  jQuery.ajax({
    url: 'http:\/\/racii.com\/wordpress\/wp-admin\/admin-ajax.php',
    type: "POST",
    data: {action: 'get_list_radios_accessories'},
    success: function (products) {
      var products = JSON.parse(products);
      var radiosWithAccessories , productName, productID, productImage, productPrice1, productPrice2, productPrice3, accessoryName, accessoryID, accessoryImage, accessories, accessoryPrice1, accessoryPrice2, accessoryPrice3;
      for(var index in products) {
        if (products.hasOwnProperty(index)){
          for (var radio in products[index]){
            productName = products[index].radio_model;
            productID = products[index].radioID;
            productImage = products[index].radio_img;
            productPrice1 = products[index].prices.price_1[0];
            productPrice2 = products[index].prices.price_2[0];
            productPrice3 = products[index].prices.price_2[0];
            accessories = products[index].compatible_acessories;
debugger;
            radiosWithAccessories =
                '<div class="ccc">' +
                  '<div class="container'+index+'">' +
                    '<div class="content">'+
                        '<img class="big" id="img1" src="img/prod1.png" alt="img1">'+
                        '<img class="big" id="img4" src="img/prod1.png" alt="img1">'+
                      '<h2>'+'</h2>'+
                      '<p class="price">'+
                      '<span class="'+productPrice1+'">'+'</span>'
                      '<span class="'+productPrice2+'">'+'</span>'
                      '</p>'+
                    '</div>'+
                  '</div>'+
                '</div>'






            $('.modul-3').append();



            for(var key in accessories){
              if (accessories.hasOwnProperty(key)){
                var accessory = accessories[key];
                accessoryName = accessory.accessory_name;
                accessoryID = accessory.accessory_ID;
                accessoryImage = accessory.accessory_image;
                accessoryPrice1 = accessory.price_1;
                accessoryPrice2 = accessory.price_2;
                accessoryPrice3 = accessory.price_3;
              }
            }
          }
        }
      }
    }
  })
});
