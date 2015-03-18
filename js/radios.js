var products, index;
var productName, productID, productImage, productPrice1, productPrice2, productPrice3,
    accessoryName, accessoryID, accessoryImage, accessoryPrice1, accessoryPrice2, accessoryPrice3, accessories,
    radioTemplate, accessoryTemplate;

jQuery(function () {
    jQuery.ajax({
        url: 'http:\/\/racii.com\/wordpress\/wp-admin\/admin-ajax.php',
        type: "POST",
        data: {action: 'get_list_radios_accessories'},
        success: function (data) {
            products = JSON.parse(data);
            for(index in products) {
                if (products.hasOwnProperty(index)){
                    productName = products[index].radio_model;
                    productID = products[index].radioID;
                    productImage = products[index].radio_img;
                    productPrice1 = products[index].prices.price_1[0];
                    productPrice2 = products[index].prices.price_2[0];
                    productPrice3 = products[index].prices.price_2[0];
                    accessories = products[index].compatible_acessories;

                    radioTemplate = 'product-name="'+productName+'" product-id="'+productID+'"' +
                                    'product-image="'+productImage+'" ' +
                                    'price-1="'+productPrice1+'"' +
                                    'price-2="'+productPrice2+'"' +
                                    'price-3="'+productPrice3+'"';
                    for(var key in accessories){
                        if (accessories.hasOwnProperty(key)){
                            var accessory = accessories[key];
                            accessoryName = accessory.accessory_name;
                            accessoryID = accessory.accessory_ID;
                            accessoryImage = accessory.accessory_image;
                            accessoryPrice1 = accessory.price_1;
                            accessoryPrice2 = accessory.price_2;
                            accessoryPrice3 = accessory.price_3;

                            accessoryTemplate += accessoryID+'accessory-name="'+accessoryName+'"' +
                                                 'accessory-id="'+accessoryID+'"' +
                                                 accessoryID+'accessory-image="'+accessoryImage+'"' +
                                                 accessoryID+'accessory-price-1="'+accessoryPrice1+'"' +
                                                 accessoryID+'accessory-price-2="'+accessoryPrice2+'"' +
                                                 accessoryID+'accessory-price-3="'+accessoryPrice3+'"';
                        }
                    }
                    $('.container.c'+index+' .content p a').append(
                        '<p class="btns"><a href="#win-zak"><input class="button do-order" type="button" value=""'+ radioTemplate + accessoryTemplate +'></a></p>');
                }
            }
        }



    })


    $(document).on('click','.modul-3 .ccc .container', function(){

        var className = this.className;
        var attributes = $(className+ '.content h2 span');

        debugger;
        //$('.popup.zak').append(orderFormSingleProduct);


    });





});








var orderFormSingleProduct =


        '<h1><img src="img/png/cart.png" alt="cart">&nbsp; Оформление заказа</h1>'+
        '<div class="container">'+
            <!--Рация Kenwood TK-F8 DB-->
        '<ul>'+
        '<li>'+
        '<img src="img/png/image1.png" alt="image1">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Название и модель рации</p>'+
        '<hr class="hr-title">'+
        '<p class="text main">Kenwood TK-F8 DB</p>'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Цена</p>'+
        '<hr class="hr-title">'+
        '<p class="text main">1377</p>'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Кол-во</p>'+
        '<hr class="hr-title">'+
        '<input class="text main kol-vo" id="prod1" value="1" defval="1" type="text">'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title" style="opacity:0;">Удалить</p>'+
        '<hr class="hr-title">'+
        '<input class="delete" type="button" value="удалить" onclick="">'+
        '<hr class="hr-main">'+
        '</li>'+
        '</ul>'+
            <!--Рация Рация Baofeng UV-5R-->
        '<ul>'+
        '<li>'+
        '<img src="img/png/image_2.png" alt="image_2">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Название и модель рации</p>'+
        '<hr class="hr-title">'+
        '<p class="text main">Baofeng UV-5R</p>'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Цена</p>'+
        '<hr class="hr-title">'+
        '<p class="text main">1377</p>'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Кол-во</p>'+
        '<hr class="hr-title">'+
        '<input class="text main kol-vo" id="prod1" value="1" defval="1" type="text">'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title" style="opacity:0;">Удалить</p>'+
        '<hr class="hr-title">'+
        '<input class="delete" type="button" value="удалить" onclick="">'+
        '<hr class="hr-main">'+
        '</li>'+
        '</ul>'+
            <!--Рация Рация Baofeng BF-888S-->
        '<ul>'+
        '<li>'+
        '<img src="img/png/image_3.png" alt="image_3">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Название и модель рации</p>'+
        '<hr class="hr-title">'+
        '<p class="text main">Baofeng BF-888S</p>'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Цена</p>'+
        '<hr class="hr-title">'+
        '<p class="text main">1377</p>'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title">Кол-во</p>'+
        '<hr class="hr-title">'+
        '<input class="text main kol-vo" id="prod1" value="1" defval="1" type="text">'+
        '<hr class="hr-main">'+
        '</li>'+

        '<li>'+
        '<p class="text title" style="opacity:0;">Удалить</p>'+
        '<hr class="hr-title">'+
        '<input class="delete" type="button" value="удалить" onclick="">'+
        '<hr class="hr-main">'+
        '</li>'+
        '</ul>'+
        '</div>'+
        '<p class="text title all">ИТОГО:</p>'+
        '<p class="text title all-price">1377</p>'+
        '<hr class="hr-main bottom">'+

        '<h2>Выбирите аксессуар</h2>'+

            //    <link rel="stylesheet" href="css/tinycarousel.css" type="text/css" media="screen">
            //
            //    <script type="text/javascript" src="js/jquery.tinycarousel.js"></script>
            //    <script type="text/javascript">
            //    $(document).ready(function()
            //    {
            //        $('#slider1').tinycarousel();
            //    });
            //</script>

        '<div id="slider1">'+
        '<a class="buttons prev" href="#"></a>'+
        '<div class="viewport">'+
        '<ul class="overview" style="width: 2121px; left: 0px;">'+
        '<li><img src="img/IMG1.jpg"></li>'+

        '<li class="mirrored"><img src="img/IMG1.jpg"></li><li class="mirrored"><img src="img/IMG2.jpg"></li><li class="mirrored"><img src="img/IMG3.jpg"></li><li class="mirrored"><img src="img/IMG4.jpg"></li></ul>'+
        '</div>'+
        '<a class="buttons next" href="#"></a>'+
        '</div>'+
        '<div class="container center">'+
        '<a class="continue" href="#close">Продолжить покупки</a>'+
        '<a class="continue order" href="#win6">Оформить</a>'+
        '</div>'+
        '<a class="close" title="Закрыть" href="#close"></a>'
    ;
