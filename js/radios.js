var products, index;
var productName, productID, productImage, productPrice1, productPrice2, productPrice3, monetary_unit,
    accessoryName, accessoryID, accessoryImage, accessoryGiftOption, accessoryPrice1, accessoryPrice2, accessoryPrice3, accessoryPrice4, accessories,
    radioTemplate, newQuantity, totalSum, orderPrice, inTotal, checkID = [],  currentAccessoryQty = 0, orderFormSingleProduct;
var url = 'http:\/\/racii.com\/wordpress\/wp-admin\/admin-ajax.php';
var orderedProductWithAcc = {
        radioName: '',
        radioID: '',
        radioQty: '',
        radioPrice: '',
        monetary: '',
        accessories: {
            //accessory:{
            //    accessoryName: '',
            //    accessoryID: '',
            //    accessoryPrice: '',
            //    accessoryQty: ''
            //}
        }
};
//orderedProductsWithAcc.index = 0;

jQuery(function ($) {

    /*get radio attributes*/
    jQuery.ajax({
        url: url,
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
                    productPrice3 = products[index].prices.price_3[0];
                    accessories = products[index].compatible_acessories;
                    radioTemplate = 'product-name="'+productName+'" ' +
                    'product-id="'+productID+'"' +
                    'product-image="'+productImage+'" ' +
                    'price-1="'+productPrice1+'"' +
                    'price-2="'+productPrice2+'"' +
                    'price-3="'+productPrice3+'"';
                    $('.container.c'+index+' h2 text').append(productName);
                    $('.container.c'+index+' h2').attr('productID', productID);
                    $('.container.c'+index+' .content img').attr('src', productImage);
                    $('.container.c'+index+' .content p a').append(
                        '<p class="btns"><a href="#win-zak"><input class="button do-order" type="button" value=""'+ radioTemplate + '></a></p>');
                }
            }
        }
    });
    /*end get radio attributes*/

    /* Render radio attributes*/
    $(document).on('click','.modul-3 .ccc .container .content p a .button.do-order', function(){
        var radioName, radioID, radioImage, radioPrice;
        var that = $(this).parents().eq(4);
        radioName = $(that).children('h2').html();
        radioID = $(that).children('h2').attr('productid');
        radioImage = $(that).children('img:first-child').attr('src');
        radioPrice = $(that).find('p.price text b').html();
        jQuery.ajax({
            url: url,
            type: "POST",
            data: {
                radioID: radioID,
                action: 'get_list_radio_accessories'
            },
            success: function (data) {
                var accessoryTemplate = [];
                accessories = JSON.parse(data);
                for (var key in accessories) {
                    if (accessories.hasOwnProperty(key)) {
                        var accessory = accessories[key];
                        accessoryName = accessory.accessory_name;
                        accessoryID = accessory.accessory_ID;
                        accessoryImage = accessory.accessory_image;
                        monetary_unit = accessory.monetary_unit;
                        accessoryPrice1 = accessory.price_1[0];
                        accessoryPrice2 = accessory.price_2[0];
                        accessoryPrice3 = accessory.price_3[0];
                        accessoryPrice4 = accessory.price_4[0];
                        if(typeof accessory.gift != 'undefined') {
                            accessoryGiftOption = accessory.gift[0];
                        }else{accessoryGiftOption = '0'}
                        accessoryTemplate.push('<li>' +
                        '<p class="accessory-name" id="accessory-name"><span class="accessory-name" accessoryID="'+accessoryID+'">'+accessoryName+'</span>'+
                        '<input type=button class="gift'+accessoryGiftOption+'" value="Получить в подарок"></p>'+
                        '<div class="accessory-image" id="accessory-image"><img src="'+accessoryImage+'" alt="'+accessoryName+'"></div>'+
                        '<p class="accessory-price-1 price-active" id="accessory-price-1"><span>'+accessoryPrice1+'</span>&nbsp;<span class="monetary-unit">'+monetary_unit+'</span></p>'+
                        '<p class="accessory-price-2 price-disabled" id=accessory-price-2"><span>'+accessoryPrice2+'</span>&nbsp;<span class="monetary-unit">'+monetary_unit+'</span></p>'+
                        '<p class="accessory-price-3 price-disabled" id="accessory-price-3"><span>'+accessoryPrice3+'</span>&nbsp;<span class="monetary-unit">'+monetary_unit+'</span></p>'+
                        '<p class="accessory-price-4 price-disabled" id="accessory-price-4"><span>'+accessoryPrice4+'</span>&nbsp;<span class="monetary-unit">'+monetary_unit+'</span></p>'+
                        '</li>');
                    }
                    var accessoryTemplateCheck = accessoryTemplate;
                }
                accessoryTemplate = accessoryTemplate.slice().join().replace(/,/g , " ");

                inTotal=radioPrice;
                orderFormSingleProduct =
                    '<h1><img src="img/png/cart.png" alt="cart">&nbsp;Оформление заказа</h1>'+
                    '<div class="container basket">'+
                    '<div class = "radio-order-field-title">'+
                    '<li>'+
                    '<p class="text title">Название и модель</p>'+
                    '<hr class="hr-title">'+
                    '</li>'+
                    '<li>'+
                    '<p class="text title">Цена</p>'+
                    '<hr class="hr-title">'+
                    '</li>'+
                    '<li>'+
                    '<p class="text title">Кол-во</p>'+
                    '<hr class="hr-title">'+
                    '</li>'+
                    '<li>'+
                    '<p class="text title">Всего</p>'+
                    '<hr class="hr-title">'+
                    '</li>'+
                    '</div>'+
                    '<ul class = "radio-order-field" radioID="'+radioID+'">'+
                    '<li>'+
                    '<img class="product-image" src="'+radioImage+'" alt="'+radioName+'">'+
                    '</li>'+
                    '<li>'+
                    '<p class="text main name">'+radioName+'</p>'+
                    '<hr class="hr-main">'+
                    '</li>'+
                    '<li>'+
                    '<p class="text main price"  totalsum="'+totalSum+'" order-price="'+radioPrice+'">'+radioPrice+'</p>'+
                    '<hr class="hr-main">'+
                    '</li>'+
                    '<li>'+
                    '<input class="text main kol-vo" id="radioID-'+radioID+'" value="1" defval="1" type="number"  min="1">'+
                    '<hr class="hr-main">'+
                    '</li>'+
                    '<li>'+
                    '<p class="text main linetotal"  totalsum="'+totalSum+'">'+radioPrice+'</p>'+
                    '<hr class="hr-main">'+
                    '</li>'+

                    '<li>'+
                    '<input class="delete" type="button" value="удалить" onclick="">'+
                    '<hr class="hr-main">'+
                    '</li>'+
                    '</ul>'+

                    '</div>'+
                    '<p class="text title all">ИТОГО:</p>'+
                    '<p class="text title all-price">'+inTotal+'&nbsp'+monetary_unit+'</p>'+
                    '<hr class="hr-main bottom">'+
                    '<h2>Выберите аксессуар:</h2>'+
                        '<p class="buy-prepaid"><span>Купи по предоплате - получи скидку!</span></p>'+
                        '<input class="buy-prepaid-checkbox" type="checkbox"><p class="buy-prepaid-check"><span>Купить по предоплате</span></p>'+
                    '<div id="slider-accessories">'+
                    '<a class="buttons prev" href=""></a>'+
                    '<div class="viewport">'+
                    '<ul class="overview" style="width: 2121px; left: 0px;">'+
                    accessoryTemplate+
                    '</ul>'+
                    '</div>'+
                    '<a class="buttons next" href=""></a>'+
                    '</div>'+
                    '<div class="container center">'+
                    '<a class="continue zak-basket" href="#close">Продолжить покупки</a>'+
                    '<a class="continue order order-zak-basket" href="#win6">Оформить</a>'+
                    '</div>'+
                    '<a class="close popup-zak-basket" title="Закрыть" href="#close"></a>';
                $('.popup.zak.basket').append(orderFormSingleProduct);

                $(document).on('click', '#slider-accessories a', function(event){
                    event.preventDefault();
                });
                if(accessoryTemplateCheck.length >= 4){
                    $('#slider-accessories').tinycarousel();
                }
                switchPrices(currentAccessoryQty);
            }
        });

        $(document).on('click', '.popup.zak.basket #slider-accessories ul li', function(){
            var orderedAccessory = {
                accessoryID: $(this).children().find('span.accessory-name').attr('accessoryID')
            };
            $(this).children().each(function(){
                var key = this.id;
                var value = this.textContent;
                if (key == 'accessory-image'){
                    value = $(this).children().attr('src');
                }else if (key.indexOf('price') !== -1){
                    value = $(this).children('span:first-child').html();
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
                '<input class="text main kol-vo" id="accessoryID-'+accessoryID+'" value="1" defval="1" type="number"  min="1">'+
                '</li>'+
                '<li>'+
                '<p class="text main linetotal" order-price=""></p>'+
                '</li>'+
                '<li>'+
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
            }
            else{
                $('.popup.zak.basket .container.basket ul.accessory-order-field').each(function(){
                    currentAccessoryID = $(this).attr('accessoryid');
                    if(currentAccessoryID === AddAccessoryID){
                        currentQantity = parseInt($(this).find('.text.main.kol-vo').attr('value'));
                        return false;
            //            //$(this).find('.text.main.kol-vo').attr('value', currentQantity+1);
            //            //countTotal();
                    }else{
                        if(($.inArray(AddAccessoryID, checkID)) == -1){
                            checkID.push(AddAccessoryID);
                            $('.popup.zak.basket .container.basket').append(accessoryOrderFormTemplate);
                        }
                    }
                });
            }
            countTotalInline();
            countTotal();
            switchPrices(currentAccessoryQty);
        });
    });

/***********************************OnChange ana Onclick actions*************************************************/

    $(document).on('change', '.popup.zak.basket ul', function(){
        debugger;
        newQuantity = $(this).find('.text.main.kol-vo').val();
        orderPrice = $(this).find('.text.main.price').text();
        totalSum = newQuantity * orderPrice;
        $(this).find('.text.main.price').attr('totalsum', totalSum);
        countTotal();
        countTotalInline();
    });

    $(document).on('change', '.popup.zak.basket .container.basket input', function(){
        countTotal();
        switchPrices(currentAccessoryQty);
        countTotalInline();
    });

    $(document).on('change', '.popup.zak.basket .buy-prepaid-checkbox', function(){
        if(($('.popup.zak.basket .buy-prepaid-checkbox')[0].checked)!==false){
            $('#slider-accessories .accessory-price-1').removeClass('price-active');
            $('#slider-accessories .accessory-price-2').removeClass('price-disabled');
            $('#slider-accessories .accessory-price-3').removeClass('price-disabled');
            $('#slider-accessories .accessory-price-4').removeClass('price-disabled');

            $('#slider-accessories .accessory-price-1').addClass('price-line-through');
            $('#slider-accessories .accessory-price-2').addClass('price-active');
            $('#slider-accessories .accessory-price-3').addClass('price-enabled');
            $('#slider-accessories .accessory-price-4').addClass('price-enabled');
        }else{
            $('#slider-accessories').find('li p').each(function(){
                $(this).removeClass('price-line-through');
                $(this).removeClass('price-disabled');
                $(this).removeClass('price-enabled');
                $(this).removeClass('price-active');
            });

            $('#slider-accessories .accessory-price-1').addClass('price-active');
            $('#slider-accessories .accessory-price-2').addClass('price-disabled');
            $('#slider-accessories .accessory-price-3').addClass('price-disabled');
            $('#slider-accessories .accessory-price-4').addClass('price-disabled');
        }
        countTotal();
        switchPrices(currentAccessoryQty);
        countTotalInline();
    });


    $(document).on('click', '.popup.zak.basket .continue.zak-basket', function(){
        $('.popup.zak.basket').children().remove();
    });

    $(document).on('click', '.popup.zak.basket .delete', function(){
        var index = checkID.indexOf($(this).parents().eq(1).attr('accessoryid'));
        if (index > -1) {
            checkID.splice(index, 1);
        }
        $(this).parents().eq(1).remove();
        countTotal();
        switchPrices(currentAccessoryQty);
        countTotalInline();
    });

    $(document).on('click', '.close.popup-zak-basket', function(){
        $('.popup.zak.basket').children().remove();
    });


    $(document).on('click', '.center_form #btn2', function(event){
        event.preventDefault();
        var index = 0;

        //var orderedProductsWithAcc = {};

        var emailData = {
            customerName:           '',
            customerEmail:          '',
            customerPhoneNumber:    ''
        };
        var that = $(this).parent();

        var objectData = $('.popup.zak.basket .container.basket');

        orderedProductWithAcc.radioName = $(objectData).find('.radio-order-field li p.text.main.name').html();
        orderedProductWithAcc.radioID = $(objectData).find('.radio-order-field').attr('radioid');
        orderedProductWithAcc.radioQty = $(objectData).find('.radio-order-field li .text.main.kol-vo').attr('value');
        orderedProductWithAcc.radioPrice = $(objectData).find('.radio-order-field li .text.main.price').attr('totalsum');
        $(objectData).find('.accessory-order-field').each(function(){
          var accessory ={
                    accessoryName: '',
                    accessoryID: '',
                    accessoryPrice: '',
                    accessoryQty: ''
                    };
            index++;
            accessory.accessoryName = $(this).find('li .text.main.name').html();
            accessory.accessoryID = $(this).attr('accessoryid');
            accessory.accessoryPrice = $(this).find('li .text.main.price').html();
            accessory.accessoryQty = $(this).find('li .text.main.kol-vo').attr('value');
            orderedProductWithAcc.accessories[index] = accessory;
        });
        emailData.customerName = $(that).find('#name_form').attr('value');
        emailData.customerEmail = $(that).find('#mail_form').attr('value');
        emailData.customerPhoneNumber = $(that).find('#phone_form').attr('value');
        emailData.monetary = monetary_unit[0];
        emailData.orderedProductWithAcc = orderedProductWithAcc;

        jQuery.ajax({
            url: url,
            type: "POST",
            data: {
                emailData: emailData,
                action: 'send_mail_order_request'
            },
            success: function () {
                //alert("Спасибо! Ваша заявка принята.");
                //
                setTimeout($('.popup').click(), 1000);
            }
        });
        $('.popup.zak.basket').children().remove();
    });

    /**************************FUNCTIONS********************************/

    function countTotalInline(){
        var unitPrice, qTy, totalInlinePrice;
        $('.popup.zak.basket .container.basket ul').each(function(){
            unitPrice = $(this).find('li p.text.main.price').text();
            qTy = $(this).find('li .text.main.kol-vo').attr('value');
            if(qTy==1){
                $(this).find('li p.text.main.linetotal').html(unitPrice);
            }else{
                totalInlinePrice = unitPrice*qTy;
                $(this).find('li p.text.main.linetotal').html(totalInlinePrice);
            }
        });
    }




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
        $('.popup.zak.basket .all-price').text(inTotal +' '+monetary_unit);
        var accessoryQty = [];
        $('.popup.zak.basket .container.basket ul.accessory-order-field').each(function(){
            accessoryQty.push($(this).find('li input').attr('value'));
        });
        currentAccessoryQty = 0;
        $.each(accessoryQty,function() {
            currentAccessoryQty+= parseInt(this);
        });
    }




    function switchPrices(currentAccessoryQty){
        var sumOrderPrice, accessoryID, accessoryIDtoFind;
        if(($('.popup.zak.basket .buy-prepaid-checkbox')[0].checked)!==false) {
            switch (currentAccessoryQty) {
                case (0):
                    $('#slider-accessories .overview li p').each(function () {
                        $(this).removeClass('price-active');
                        $(this).removeClass('price-line-through');
                        $(this).removeClass('price-disabled');
                        $(this).removeClass('price-enabled');
                    });
                    /****************************************************************************************/
                    $('#slider-accessories .accessory-price-1').addClass('price-active');
                    $('#slider-accessories .accessory-price-2').addClass('price-enabled');
                    $('#slider-accessories .accessory-price-3').addClass('price-enabled');
                    $('#slider-accessories .accessory-price-4').addClass('price-enabled');
                    $('.popup.zak.basket .container.basket ul.accessory-order-field').each(function () {
                        accessoryID = $(this).attr('accessoryid');
                        $('.popup.zak.basket #slider-accessories ul li p span').each(function () {
                            accessoryIDtoFind = $(this).attr('accessoryid');
                            if (accessoryIDtoFind == accessoryID) {
                                sumOrderPrice = $(this).parents().eq(1).find('.accessory-price-1 span:first-child').html();
                            }
                        });
                        $(this).find('.text.main.price').attr('order-price', sumOrderPrice);
                        $(this).find('.text.main.price').html(sumOrderPrice);
                    });
                    countTotal();
                    break;
                case (1):
                    $('#slider-accessories .overview li p').each(function () {
                        $(this).removeClass('price-active');
                        $(this).removeClass('price-line-through');
                        $(this).removeClass('price-disabled');
                    });
                    /****************************************************************************************/
                    $('#slider-accessories .accessory-price-1').addClass('price-line-through');
                    $('#slider-accessories .accessory-price-2').addClass('price-active');
                    $('#slider-accessories .accessory-price-3').addClass('price-enabled');
                    $('#slider-accessories .accessory-price-4').addClass('price-enabled');
                    $('.popup.zak.basket .container.basket ul.accessory-order-field').each(function () {
                        accessoryID = $(this).attr('accessoryid');
                        $('.popup.zak.basket #slider-accessories ul li p span').each(function () {
                            accessoryIDtoFind = $(this).attr('accessoryid');
                            if (accessoryIDtoFind == accessoryID) {
                                sumOrderPrice = $(this).parents().eq(1).find('.accessory-price-2 span:first-child').html();
                            }
                        });
                        $(this).find('.text.main.price').attr('order-price', sumOrderPrice);
                        $(this).find('.text.main.price').html(sumOrderPrice);
                    });
                    countTotal();
                    break;
                case (2):
                    $('#slider-accessories .overview li p').each(function () {
                        $(this).removeClass('price-active');
                        $(this).removeClass('price-line-through');
                        $(this).removeClass('price-disabled');
                    });
                    /****************************************************************************************/
                    $('#slider-accessories .accessory-price-1').addClass('price-line-through');
                    $('#slider-accessories .accessory-price-2').addClass('price-line-through');
                    $('#slider-accessories .accessory-price-3').addClass('price-active');
                    $('#slider-accessories .accessory-price-4').addClass('price-enabled');
                    $('.popup.zak.basket .container.basket ul.accessory-order-field').each(function () {
                        accessoryID = $(this).attr('accessoryid');
                        $('.popup.zak.basket #slider-accessories ul li p span').each(function () {
                            accessoryIDtoFind = $(this).attr('accessoryid');
                            if (accessoryIDtoFind == accessoryID) {
                                sumOrderPrice = $(this).parents().eq(1).find('.accessory-price-3 span:first-child').html();
                            }
                        });
                        $(this).find('.text.main.price').attr('order-price', sumOrderPrice);
                        $(this).find('.text.main.price').html(sumOrderPrice);
                    });
                    countTotal();
                    break;
                case (3):
                    $('#slider-accessories .overview li p').each(function () {
                        $(this).removeClass('price-active');
                        $(this).removeClass('price-line-through');
                        $(this).removeClass('price-disabled');
                    });
                    /****************************************************************************************/
                    $('#slider-accessories .accessory-price-1').addClass('price-line-through');
                    $('#slider-accessories .accessory-price-2').addClass('price-line-through');
                    $('#slider-accessories .accessory-price-3').addClass('price-line-through');
                    $('#slider-accessories .accessory-price-4').addClass('price-active');
                    $('.popup.zak.basket .container.basket ul.accessory-order-field').each(function () {
                        accessoryID = $(this).attr('accessoryid');
                        $('.popup.zak.basket #slider-accessories ul li p span').each(function () {
                            accessoryIDtoFind = $(this).attr('accessoryid');
                            if (accessoryIDtoFind == accessoryID) {
                                sumOrderPrice = $(this).parents().eq(1).find('.accessory-price-4 span:first-child').html();
                            }
                        });
                        $(this).find('.text.main.price').attr('order-price', sumOrderPrice);
                        $(this).find('.text.main.price').html(sumOrderPrice);
                    });
                    countTotal();
                    break;
            }
        }else{
            return false;
        }
    }

});


