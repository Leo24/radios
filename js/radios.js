var products, index;
var productName, productID, productImage, productPrice1, productPrice2, productPrice3,
    accessoryName, accessoryID, accessoryImage, accessoryPrice1, accessoryPrice2, accessoryPrice3, accessories,
    radioTemplate, newQuantity, accessoryTemplate = [],
    totalSum, orderPrice, inTotal, checkID = [];




jQuery(function ($) {

    /*get radio attributes*/
    jQuery.ajax({
        url: 'http:\/\/racii.com\/wordpress\/wp-admin\/admin-ajax.php',
        type: "POST",
        data: {action: 'get_list_radios'},
        success: function (data) {
            products = JSON.parse(data);
            for(index in products) {
                if (products.hasOwnProperty(index)){
                    productName = products[index].post_title;
                    productID = products[index].ID;
                    productImage = products[index].radio_img;
                    productPrice1 = products[index].prices.price_1[0];
                    productPrice2 = products[index].prices.price_2[0];
                    productPrice3 = products[index].prices.price_2[0];
                    accessories = products[index].compatible_acessories;
                    radioTemplate = 'product-name="'+productName+'" ' +
                    'product-id="'+productID+'"' +
                    'product-image="'+productImage+'" ' +
                    'price-1="'+productPrice1+'"' +
                    'price-2="'+productPrice2+'"' +
                    'price-3="'+productPrice3+'"';
                    console.log(productImage);
                    $('.container.c'+index+' h2 text').append(productName);
                    $('.container.c'+index+' h2').attr('productID', productID);
                    $('.container.c'+index+' .content img').attr('src', productImage);
                    $('.container.c'+index+' .content p a').append(
                        '<p class="btns"><a href="#win-zak"><input class="button do-order" type="button" value=""'+ radioTemplate + accessoryTemplate +'></a></p>');
                }
            }
        }
    })
    /*end get radio attributes*/

    /* Render radio attributes*/
    $(document).on('click','.modul-3 .ccc .container .content p a .button.do-order', function(){
        var radioName = this.attributes['product-name'].value;
        var radioID = this.attributes['product-id'].value;
        var radioImage = this.attributes['product-image'].value;
        var radioPrice1 = this.attributes['price-1'].value;
        var radioPrice2 = this.attributes['price-2'].value;
        var radioPrice3 = this.attributes['price-3'].value;
        jQuery.ajax({
            url: 'http:\/\/racii.com\/wordpress\/wp-admin\/admin-ajax.php',
            type: "POST",
            data: {
                radioID: radioID,
                action: 'get_list_radio_accessories'
            },
            success: function (data) {
                accessories = JSON.parse(data);
                for (var key in accessories) {
                    if (accessories.hasOwnProperty(key)) {
                        var accessory = accessories[key];
                        accessoryName = accessory.accessory_name;
                        accessoryID = accessory.accessory_ID;
                        accessoryImage = accessory.accessory_image;
                        accessoryPrice1 = accessory.price_1[0];
                        accessoryPrice2 = accessory.price_2[0];
                        accessoryPrice3 = accessory.price_3[0];
                        accessoryTemplate.push('<li>' +
                        '<p class="accessory-name"><span class="accessory-name" accessoryID="'+accessoryID+'">'+accessoryName+'</span></p>'+
                        '<div class="accessory-image"><img src="'+accessoryImage+'" alt="'+accessoryName+'"></div>'+
                        '<p class="accessory-price-1"><span">'+accessoryPrice1+'</span></p>'+
                        '<p class="accessory-price-2"><span>'+accessoryPrice2+'</span></p>'+
                        '<p class="accessory-price-3"><span>'+accessoryPrice3+'</span></p>'+
                        '</li>');
                    }
                }
                accessoryTemplate = accessoryTemplate.slice().join().replace(/,/g , " ");
                inTotal=radioPrice1;
                var orderFormSingleProduct =
                    '<h1><img src="img/png/cart.png" alt="cart">&nbsp; Оформление заказа</h1>'+
                    '<div class="container basket">'+
                        <!--Рация Kenwood TK-F8 DB-->
                    '<ul class = "radio-order-field" radioID="'+radioID+'">'+
                    '<li>'+
                    '<img class="product-image" src="'+radioImage+'" alt="'+radioName+'">'+
                    '</li>'+

                    '<li>'+
                    '<p class="text title">Название и модель</p>'+
                    '<hr class="hr-title">'+
                    '<p class="text main name">'+radioName+'</p>'+
                    '<hr class="hr-main">'+
                    '</li>'+

                    '<li>'+
                    '<p class="text title">Цена</p>'+
                    '<hr class="hr-title">'+
                    '<p class="text main price"  totalsum="'+totalSum+'" order-price="'+radioPrice1+'">'+radioPrice1+'</p>'+
                    '<hr class="hr-main">'+
                    '</li>'+

                    '<li>'+
                    '<p class="text title">Кол-во</p>'+
                    '<hr class="hr-title">'+
                    '<input class="text main kol-vo" id="radioID-'+radioID+'" value="1" defval="1" type="number">'+
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
                    '<p class="text title all-price">'+inTotal+'</p>'+
                    '<hr class="hr-main bottom">'+

                    '<h2>Выберите аксессуар</h2>'+

                        //    <link rel="stylesheet" href="css/tinycarousel.css" type="text/css" media="screen">
                        //
                        //    <script type="text/javascript" src="js/jquery.tinycarousel.js"></script>
                        //    <script type="text/javascript">
                        //    $(document).ready(function()
                        //    {
                        //        $('#slider-accessories').tinycarousel();
                        //    });
                        //</script>

                    '<div id="slider-accessories">'+
                    '<a class="buttons prev" href="#"></a>'+
                    '<div class="viewport">'+
                    '<ul class="overview" style="width: 2121px; left: 0px;">'+
                    accessoryTemplate.slice().replace(/,/g , " ")+
                    '</ul>'+
                    '</div>'+
                    '<a class="buttons next" href="#"></a>'+
                    '</div>'+
                    '<div class="container center">'+
                    '<a class="continue" href="#close">Продолжить покупки</a>'+
                    '<a class="continue order" href="#win6">Оформить</a>'+
                    '</div>'+
                    '<a class="close" title="Закрыть" href="#close"></a>';

                $('.popup.zak.basket').append(orderFormSingleProduct);



                var orderPrice = $('.popup.zak.basket ul li .price').attr('order-price');
                $(document).on('click', '.popup.zak.basket .delete', function(){
                    $(this).parent().parent().remove();
                    countTotal();
                });

                $(document).on('change', '.popup.zak.basket ul', function(){
                    newQuantity = $(this).find('.text.main.kol-vo').val();
                    orderPrice = $(this).find('.text.main.price').text();
                    totalSum = newQuantity * orderPrice;
                    $(this).find('.text.main.price').attr('totalsum', totalSum);
                    countTotal();
                });

                $(document).on('click', '.popup.zak.basket #slider-accessories ul li', function(){
                    var orderedAccessory = {
                        accessoryID: $(this).children().find('span.accessory-name').attr('accessoryID')
                    };

                    $(this).children().each(function(){
                        var key = this.className;
                        var value = this.textContent;
                        if (key == 'accessory-image'){
                            value = $(this).children().attr('src');
                        }
                        orderedAccessory[key] = value;
                    });
                    var accessoryOrderFormTemplate =
                        '<ul class = "accessory-order-field" accessoryID="'+orderedAccessory['accessoryID']+'">'+
                        '<li>'+
                        '<img class="accessory-image" src="'+orderedAccessory['accessory-image']+'" alt="'+orderedAccessory['accessory-name']+'">'+
                        '</li>'+

                        '<li>'+
                        '<p class="text main name" accessoryID="'+orderedAccessory['accessoryID']+'">'+orderedAccessory['accessory-name']+'</p>'+

                        '</li>'+
                        '<li>'+
                        '<p class="text main price" order-price="'+orderedAccessory['accessory-price-1']+'" totalSum="'+totalSum+'">'+orderedAccessory['accessory-price-1']+'</p>'+
                        '</li>'+

                        '<li>'+
                        '<input class="text main kol-vo" id="accessoryID-'+accessoryID+'" value="1" defval="1" type="number">'+
                        '</li>'+

                        '<li>'+
                            //'<p class="text title" style="opacity:0;">Удалить</p>'+
                        '<input class="delete" type="button" value="удалить" onclick="">'+
                        '</li>'+
                        '<hr class="hr-main">'+
                        '</ul>';
                    var currentQantity, currentAccessoryID;
                    var AddAccessoryID = $(accessoryOrderFormTemplate).attr('accessoryid');
                    if($('.popup.zak.basket .container.basket ul.accessory-order-field').length == 0){
                        $('.popup.zak.basket .container.basket').append(accessoryOrderFormTemplate);

                        if(($.inArray(AddAccessoryID, checkID)) == -1){
                        checkID.push(AddAccessoryID);
                        }
                    }else{
                       $('.popup.zak.basket .container.basket ul.accessory-order-field').each(function(){
                           currentAccessoryID = $(this).attr('accessoryid');
                           if(currentAccessoryID === AddAccessoryID)
                            {
                                currentQantity = parseInt($(this).find('.text.main.kol-vo').attr('value'));
                                //$(this).find('.text.main.kol-vo').attr('value', currentQantity+1);
                                //countTotal();

                            }else{
                               if(($.inArray(AddAccessoryID, checkID)) == -1){
                                   checkID.push(AddAccessoryID);
                                   $('.popup.zak.basket .container.basket').append(accessoryOrderFormTemplate);
                               }
                            }
                        });
                    }
                    countTotal();
                });



                //$(document).on('change', '.popup.zak.basket input', function(){
                //    countTotal();
                //});

            }
        })
    });

    function countTotal(){
        var totalSum=[];
        $('.popup.zak.basket .container.basket ul ').each(function(){
            if($(this).find('li p.price').attr('totalsum') == "undefined"){
                totalSum.push($(this).find('li p.price').text());
            }else{
                totalSum.push($(this).find('li p.price').attr('totalsum'));
            }
        });
        inTotal = 0;
        $.each(totalSum,function() {
            inTotal+= parseInt(this);
        });

        $('.popup.zak.basket .all-price').text(inTotal);
    }



});


