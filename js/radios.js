var products, index;
var productName, productID, productImage, productPrice1, productPrice2, productPrice3, productPrice4, productImage1, productImage2, productImage3, monetary_unit,
    accessoryName, accessoryID, accessoryImage, accessoryGiftOption, accessoryInfo, accessoryPrice1, accessoryPrice2, accessoryPrice3, accessoryPrice4, accessories,
    radioTemplate, radioTemplateDetailedInfo, newQuantity, totalSum, orderPrice, inTotal, checkID = [],  currentAccessoryQty = 0, orderFormSingleProduct, lineheight;
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
                if (products.hasOwnProperty(index)) {
                    productName = products[index].post_title;
                    productID = products[index].ID;
                    productImage = products[index].radio_images.radio_image;
                    productPrice1 = products[index].prices.price_1[0];
                    productPrice2 = products[index].prices.price_2[0];
                    productPrice3 = products[index].prices.price_3[0];
                    productPrice4 = products[index].prices.price_4[0];
                    accessories = products[index].compatible_acessories;
                    productImage1 = products[index].radio_images.radio_image_1;
                    productImage2 = products[index].radio_images.radio_image_2;
                    productImage3 = products[index].radio_images.radio_image_3;
                    radioTemplate = 'product-name="' + productName + '" ' +
                    'product-id="' + productID + '"' +
                    'product-image="' + productImage + '" ' +
                    'price-1="' + productPrice1 + '"' +
                    'price-2="' + productPrice2 + '"' +
                    'price-3="' + productPrice3 + '"'+
                    'price-4="' + productPrice4 + '"';
                    radioTemplateDetailedInfo = 'product-name="' + productName + '" ' +
                    'product-id="' + productID + '"' +
                    'product-content="' + products[index].post_content + '"' +
                    'img-1="' + productImage1 + '"' +
                    'img-2="' + productImage2 + '"' +
                    'img-3="' + productImage3 + '"';

                    $('.container.c' + index + ' h2 text').append(productName);
                    $('.container.c' + index + ' h2').attr('productID', productID);
                    $('.container.c' + index + ' .content img').attr('src', productImage);
                    $('.container.c' + index + ' .content').append(
                        '<p class="btns del"><a href="#win-zak-3"><input class="button del get-detailed-info" type="button" value=""' + radioTemplateDetailedInfo + '/></a></p>');
                    $('.container.c' + index + ' .content').append(
                        '<p class="btns"><a href="#win-zak"><input class="button do-order" type="button" value=""' + radioTemplate + '></a></p>');

                }
            }

        }

    });
    /*end get radio attributes*/

    /* Render radio attributes*/
    $(document).on('click','.modul-3 .ccc .container .content p a .button.do-order', function(){
        var radioName, radioID, radioImage, radioPrice1, radioPrice2, radioPrice3, radioPrice4;
        //var that = $(this).parents().eq(4);
        radioName = $(this).attr('product-name');
        radioID = $(this).attr('product-id');
        radioImage = $(this).attr('product-image');
        radioPrice1 = $(this).attr('price-1');
        radioPrice2 = $(this).attr('price-2');
        radioPrice3 = $(this).attr('price-3');
        radioPrice4 = $(this).attr('price-4');
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
                        if (accessoryName.length <= 16) {
                            lineheight = 'lineheight';
                        }else{
                            lineheight = '';
                        }
                        accessoryID = accessory.accessory_ID;
                        accessoryImage = accessory.accessory_image;
                        monetary_unit = accessory.monetary_unit;
                        accessoryPrice1 = accessory.price_1[0];
                        accessoryPrice2 = accessory.price_2[0];
                        accessoryPrice3 = accessory.price_3[0];
                        accessoryPrice4 = accessory.price_4[0];
                        accessoryInfo = accessory.post_content;
                        accessoryInfo = accessoryInfo.replace(/<\/?[^>]+>/gi, '');
                        if(accessory.gift[0] === "1") {
                            //accessoryGiftOption = accessory.gift[0];
                            accessoryGiftOption = 'gift-button';
                        }else{
                            accessoryGiftOption = '';
                        }
                        accessoryTemplate.push('<li>' +
                        '<p class="accessory-name '+lineheight+'" accessory-id="'+accessoryID+'" id="accessory-name"><span class="accessory-name" accessoryID="'+accessoryID+'">'+accessoryName+'</span></p>'+
                        '<div class="accessory-image" id="accessory-image"><img src="'+accessoryImage+'" alt="'+accessoryName+'"></div>'+
                        '<div class="g-input '+accessoryGiftOption+'"><span>Получить в подарок</span></div>' +
                        '<input type=hidden accessoryInfo="'+accessoryInfo+'"></p>'+
                        '<p class="accessory-price-1 price-active" id="accessory-price-1"><span>'+accessoryPrice1+'</span>&nbsp;<span class="monetary-unit">'+monetary_unit+'</span></p>'+
                        '<p class="accessory-price-2 price-disabled" id=accessory-price-2"><span>'+accessoryPrice2+'</span>&nbsp;<span class="monetary-unit">'+monetary_unit+'</span></p>'+
                        '<p class="accessory-price-3 price-disabled" id="accessory-price-3"><span>'+accessoryPrice3+'</span>&nbsp;<span class="monetary-unit">'+monetary_unit+'</span></p>'+
                        '<p class="accessory-price-4 price-disabled" id="accessory-price-4"><span>'+accessoryPrice4+'</span>&nbsp;<span class="monetary-unit">'+monetary_unit+'</span></p>'+
                        '</li>');
                    }
                }
                var accessoryTemplateCheck = accessoryTemplate;
                accessoryTemplate = accessoryTemplate.slice().join().replace(/,/g , " ");
                orderFormSingleProduct =
                    '<h1><img src="img/png/cart.png" alt="cart">&nbsp;Оформление заказа</h1>'+
                    '<div class="container basket">'+
                    '<div class = "radio-order-field-title">'+
                    '<ul>'+

                    '<li>'+
                    '<p class="text title">Название и модель</p>'+
                    '</li>'+
                    '<li>'+
                    '<p class="text title">Цена</p>'+
                    '</li>'+
                    '<li>'+
                    '<p class="text title">Кол-во</p>'+
                    '</li>'+
                    '<li>'+
                    '<p class="text title">Всего</p>'+
                    '</li>'+
                    '</ul>'+
                    '<hr class="hr-title">'+

                    '</div>'+
                    '<ul class = "radio-order-field count-total" radioID="'+radioID+'">'+
                    '<li>'+
                    '<div class="image-wrapper">'+
                    '<div class="product-background-image"></div>'+
                    '<img class="product-image" src="'+radioImage+'" alt="'+radioName+'">'+
                    '</div>'+
                    '</li>'+
                    '<li>'+
                    '<p class="text main name">'+radioName+'</p>'+
                    '</li>'+
                    '<li>'+
                    '<p class="text main price" totalsum="'+radioPrice1+'" order-price="'+radioPrice1+'" price-1="'+radioPrice1+'" price-2="'+radioPrice2+'" price-3="'+radioPrice3+'" price-4="'+radioPrice4+'">'+radioPrice1+'</p>'+
                    '</li>'+
                    '<li>'+
                    '<input class="text main kol-vo" id="radioID-'+radioID+'" value="1" defval="1" type="number"  min="1">'+
                    '</li>'+
                    '<li>'+
                    '<p class="text main linetotal"  totalsum="'+totalSum+'">'+radioPrice1+'</p>'+
                    '</li>'+

                    '<li>'+
                    '<input class="delete" type="button" value="удалить" onclick="">'+
                    '</li>'+

                    '<hr class="hr-main">'+
                    '</ul>'+


                    '</div>'+
                    '<p class="text title all">ИТОГО:</p>'+
                    '<p class="text title all-price">'+inTotal+'&nbsp'+monetary_unit+'</p>'+
                    '<hr class="hr-main bottom">'+
                    '<h2>Выберите аксессуар:</h2>'+
                    '<div class="buy-prepaid-wrapper">'+
                    '<p class="buy-prepaid"><span>купи по предоплате - получи скидку!</span></p>'+
                    '<form>'+
                    '<input class="buy-prepaid-checkbox" type="checkbox" id="buy-prepaid">'+
                    '<label class="buy-prepaid-check" for="buy-prepaid">купить по предоплате</label>'+
                    '</form>'+
                    '</div>'+
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
                    '<a class="continue zak-basket leave-busket" href="#close">Продолжить покупки</a>'+
                        //'<a class="continue order order-zak-basket" href="#win6">Оформить</a>'+

                    '<form class="continue order order-zak-basket" action="http://test.robokassa.ru/Index.aspx" method="get">' +
                    '<input type="hidden" name="MrchLogin" value="TestRadioLandingShop25">'+
                    '<input class="outsum" type="hidden" name="OutSum" value="">'+
                    '<input class="invid" type="hidden" name="InvId" value="0">'+
                    '<input class="desc" type="hidden" name="Desc" value="desc">'+
                    '<input class="inccurrent" type="hidden" name="IncCurrent" value="WMZM">'+/*валюта*/
                    '<input type="hidden" name="Culture" value="ru">'+
                    '<input type="hidden" name="Encoding" value="utf-8">'+
                    '<input class="signature-value" type="hidden" name="SignatureValue" value="">'+
                    '<a class="continue order order-zak-basket" href="#win6">Оформить</a>'+
                    '</form>'+
                    '</div>'+
                    '<a class="close popup-zak-basket" title="Закрыть" href="#close"></a>';
                inTotal=radioPrice1;
                $('.popup.zak.basket').append(orderFormSingleProduct);

                $(document).on('click', '#slider-accessories a', function(event){
                    event.preventDefault();
                });
                if(accessoryTemplateCheck.length >= 4){
                    $('#slider-accessories').tinycarousel();
                }
                switchAccessoryPrices(currentAccessoryQty);
                switchRadioPrices();
                countTotal();
            }
        });
        /*Add accessory as gift*/
        $(document).on('click', '.popup.zak.basket #slider-accessories ul li .gift-button', function(){
            var that = $(this).parents().eq(0);
            var orderedAccessory = {
                accessoryID: $(that).children().find('span.accessory-name').attr('accessoryID')
            };
            $(that).children().each(function(){
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
                '<ul class = "accessory-order-field gift-accessory" accessoryID="'+orderedAccessory['accessoryID']+'">'+
                '<li>'+
                '<img class="accessory-image" src="'+orderedAccessory['accessory-image']+'" alt="'+orderedAccessory['accessory-name']+'">'+
                '</li>'+

                '<li>'+
                '<p class="text main name" accessoryID="'+orderedAccessory['accessoryID']+'">'+orderedAccessory['accessory-name']+'</p>'+
                '</li>'+
                '<li>'+
                '<p class="text main price input" order-price="0" totalSum="0"><span>Подарок</span></p>'+
                '</li>'+
                '<li>'+
                    //'<input class="text main kol-vo" id="accessoryID-'+accessoryID+'" value="1" defval="1" type="number"  min="1">'+
                '</li>'+
                '<li>'+
                '<p class="text main linetotal" order-price="0"></p>'+
                '</li>'+
                '<li>'+
                '<input class="delete" type="button" value="удалить" onclick="">'+
                '</li>'+
                '<hr class="hr-main">'+
                '</ul>';

            if($(this).parents().eq(4).find('.container.basket .accessory-order-field.gift-accessory').length >= 2){
                var restrictionMess;
                restrictionMess = '<div class="restriction-message">' +
                '<p><span>Доступно не более двух подарков.</span><span> Для выбора другого подарка - удалите из корзины один из текущих.</span></p>' +
                '<div class="close"></div>' +
                '</div>';
                $('.popup.zak.basket').append(restrictionMess);

                setTimeout(function(){
                    $('.popup.zak.basket .restriction-message ').remove();
                }, 4000);
                $('.popup.zak.basket .restriction-message .close').click(function(){
                    $(this).parent().remove();
                });

            }else{
                $('.popup.zak.basket .container.basket').append(accessoryOrderFormTemplate);
                $(this).parents().eq(1).find('.gift-button').each(function(){
                    $(this).css('display','none');
                });
                $(this).remove();
            }
        });


        /*Add accessory on click*/
        $(document).on('click', '.popup.zak.basket #slider-accessories ul li img', function(){
            var that = $(this).parents().eq(1);
            var orderedAccessory = {
                accessoryID: $(that).children().find('span.accessory-name').attr('accessoryID')
            };
            $(that).children().each(function(){
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
                '<ul class = "accessory-order-field count-total" accessoryID="'+orderedAccessory['accessoryID']+'">'+
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
                        if($(this).hasClass('gift-accessory')){
                            $('.popup.zak.basket .container.basket').append(accessoryOrderFormTemplate);
                        }
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
            switchAccessoryPrices(currentAccessoryQty);
            switchRadioPrices();
        });
    });

    /***********************************OnChange ana Onclick actions*************************************************/

    $(document).on('change', '.popup.zak.basket ul', function(){
        newQuantity = $(this).find('.text.main.kol-vo').val();
        orderPrice = $(this).find('.text.main.price').text();
        totalSum = newQuantity * orderPrice;
        $(this).find('.text.main.price').attr('totalsum', totalSum);
        countTotal();
        countTotalInline();
    });


    /*Submit data to robokassa*/
    $(document).on('click', '.container.center .continue.order.order-zak-basket', function(event){
        event.preventDefault();
        var orderTotal = $(this).parents().eq(2).find('.text.title.all-price').attr('total');
        jQuery.ajax({
            url: url,
            type: "POST",
            data: {
                orderTotal: orderTotal,
                action: 'create_signatureValue'

            },
            success: function (data) {
                var robokassaData = JSON.parse(data);
                $('.container.center form input.outsum').attr('value', robokassaData.out_sum);
                $('.container.center form input.signature-value').attr('value', robokassaData.signatureValue);
                $('.container.center form').submit();
            }

        });
    });

    $(document).on('change', '.popup.zak.basket .container.basket input', function(){
        countTotal();
        switchAccessoryPrices();
        switchRadioPrices();
        countTotalInline();
    });

    $(document).on('change', '.popup.zak.basket .buy-prepaid-checkbox', function(){
        if(($('.popup.zak.basket .buy-prepaid-checkbox')[0].checked)!==false){
            $('#slider-accessories .accessory-price-1').removeClass('price-active');
            $('#slider-accessories .accessory-price-2').removeClass('price-disabled');
            $('#slider-accessories .accessory-price-3').removeClass('price-disabled');
            $('#slider-accessories .accessory-price-4').removeClass('price-disabled');
            $('.popup.zak.basket .radio-order-field li .price-1').removeClass('price-active');
            $('.popup.zak.basket .radio-order-field li .price-2').removeClass('price-disabled');
            $('.popup.zak.basket .radio-order-field li .price-3').removeClass('price-disabled');
            $('.popup.zak.basket .radio-order-field li .price-4').removeClass('price-disabled');


            $('#slider-accessories .accessory-price-1').addClass('price-line-through');
            $('#slider-accessories .accessory-price-2').addClass('price-active');
            $('#slider-accessories .accessory-price-3').addClass('price-enabled');
            $('#slider-accessories .accessory-price-4').addClass('price-enabled');
            $('.popup.zak.basket .radio-order-field li .price-1').addClass('price-line-through');
            $('.popup.zak.basket .radio-order-field li .price-2').addClass('price-active');
            $('.popup.zak.basket .radio-order-field li .price-3').addClass('price-enabled');
            $('.popup.zak.basket .radio-order-field li .price-4').addClass('price-enabled');



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
            $('#slider-accessories .viewport ul li .g-input.gift-button').css('display', 'none');
            $('#slider-accessories .viewport ul li .g-input').css('display', 'none');
        }
        countTotal();
        switchAccessoryPrices();
        switchRadioPrices();
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
        switchAccessoryPrices();
        switchRadioPrices();
        countTotalInline();
    });

    $(document).on('click', '.close.popup-zak-basket', function(){
        $('.popup.zak.basket').children().remove();
        checkID = [];
    });
    $(document).on('click', '.popup-zak-basket .container.center a.leave-busket', function(){
        $('.popup.zak.basket').children().remove();
        checkID = [];
    });

    $(document).on('mouseenter', '#slider-accessories .accessory-image', function(){
        var accessoryInfo, accessoryImage, accessoryInfoTemplate;
        var that = this;
        accessoryID = $(that).parents().eq(0).find('.accessory-name').attr('accessory-id');
        accessoryInfo = $(this).parents().eq(0).find('input').attr('accessoryinfo');
        accessoryImage = $(this).find('img').attr('src');
        accessoryInfoTemplate =
            '<div class="accessory-detailed-info" accessory-id="'+accessoryID+'">' +
                '<img class="accessory-info-image" src="'+accessoryImage+'">'+
                '<p><pre>'+accessoryInfo+'</pre></p>'+
            '</div>';
        function renderAccessoryInfoTemplate(that){
            $('.popup.zak.basket').append(accessoryInfoTemplate);
        }
        setTimeout(function(){
            renderAccessoryInfoTemplate(that);
            $(document).on('mouseleave', '#slider-accessories .accessory-image', function(){
                $(this).parents().eq(4).find('.accessory-detailed-info').remove();
            });
        }, 500);
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
            }else if(qTy > 1){
                totalInlinePrice = unitPrice*qTy;
                $(this).find('li p.text.main.linetotal').html(totalInlinePrice);
            }else{
                $(this).find('li p.text.main.linetotal').html(" ");
                $(this).find('li p.text.main.price').html("Подарок");

            }
        });
    }

    function countTotal(){
        var totalSum=[];
        $('.popup.zak.basket .container.basket ul.count-total ').each(function(){
            //if($(this).find('li p.price').attr('totalsum') == "undefined"){
            //    totalSum.push($(this).find('li p.price').text());
            //}else if(totalSum.push($(this).find('li p.price').length!==0)){
            //    totalSum.push($(this).find('li p.price').attr('totalsum'));
            //}else{
                totalSum.push($(this).find('li p.linetotal').text());
            //}
        });
        inTotal = 0;
        $.each(totalSum,function() {
            inTotal+= parseInt(this);
        });
        $('.popup.zak.basket .all-price').attr('total', inTotal);
        $('.popup.zak.basket .all-price').text(inTotal +' '+monetary_unit);
        var accessoryQty = [];
        $('.popup.zak.basket .container.basket ul.accessory-order-field').each(function(){
            accessoryQty.push($(this).find('li input').attr('value'));
        });
        currentAccessoryQty = 0;
        $.each(accessoryQty,function() {
            currentAccessoryQty+= parseInt(this);
        });
        enableGiftField();
        if(checkID.length<2){
            $('#slider-accessories .viewport ul li .g-input.gift-button').css('display', 'none');
            $('#slider-accessories .viewport ul li .g-input').css('display', 'none');
        }
    }

    function enableGiftField(){
        if(($('.popup.zak.basket .buy-prepaid-checkbox')[0].checked)!==false && $('.popup.zak.basket .container.basket ul.accessory-order-field').length >= 2) {
            if (checkID.length >= 2) {
                $('#slider-accessories .viewport ul li .g-input.gift-button').css('display', 'block');
            }
        }
    }


    function switchAccessoryPrices(){
        var sumOrderPrice, accessoryID, accessoryIDtoFind;
        if(($('.popup.zak.basket .buy-prepaid-checkbox')[0].checked)!==false) {
            switch (checkID.length) {
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
                    countTotalInline();
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
                    countTotalInline();
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
                    countTotalInline();
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
                    countTotalInline();
                    break;
            }
        }else{

            $('.popup.zak.basket .container.basket ul.accessory-order-field li p.price').each(function(){
                var currAccID, accessoryPrice1, findAccessoryID;
                currAccID = $(this).parents().eq(1).attr('accessoryid');

                $(this).parents().eq(3).find('#slider-accessories .overview li').each(function(){
                    findAccessoryID = $(this).find('p span.accessory-name').attr('accessoryid');
                    if (currAccID == findAccessoryID) {
                        accessoryPrice1 = $(this).find('p.accessory-price-1 span:first-child').html();
                    }
                });
                $(this).html(accessoryPrice1);

            });

        }
    }

    function switchRadioPrices(){
        var price;
        switch (checkID.length) {
            case (0):
                price = $('.popup.zak.basket .container.basket ul.radio-order-field li p.price').attr('price-1');
                        $('.popup.zak.basket .container.basket ul.radio-order-field li p.price').text(price);
                countTotal();
                countTotalInline();
                break;
            case (1):
                price = $('.popup.zak.basket .container.basket ul.radio-order-field li p.price').attr('price-2');
                $('.popup.zak.basket .container.basket ul.radio-order-field li p.price').text(price);
                countTotal();
                countTotalInline();
                break;
            case (2):
                price = $('.popup.zak.basket .container.basket ul.radio-order-field li p.price').attr('price-3');
                $('.popup.zak.basket .container.basket ul.radio-order-field li p.price').text(price);
                countTotal();
                countTotalInline();
                break;
            case (3):
                price = $('.popup.zak.basket .container.basket ul.radio-order-field li p.price').attr('price-4');
                $('.popup.zak.basket .container.basket ul.radio-order-field li p.price').text(price);
                countTotal();
                countTotalInline();
                break;
        }
    }

    /* Render radio detailed info*/
    $(document).on('click','.modul-3 .ccc .container .content p a .button.del.get-detailed-info', function(){
        $('.modul-3 .ccc .container .content p a').click();
        var radioName, radioID, radioInfo, radioImage1, radioImage2, radioImage3;
        radioName = $(this).attr('product-name');
        radioID = $(this).attr('product-id');
        radioInfo = $(this).attr('product-content');
        radioImage1 = $(this).attr('img-1');
        radioImage2 = $(this).attr('img-2');
        radioImage3 = $(this).attr('img-3');
        radioTemplateDetailedInfo =
            //'<div class="popup zak del radio'+radioID+'">'+
            '<div class="container left del radio'+radioID+'">'+
            '<p class="radio-name"><span>'+radioName+'</span></p>'+
            '<p class="tech-param"><span>Технические характеристики:</span></p>'+
            '<pre class="text">'+radioInfo+'</pre>'+

            '<div class="right_sitebar left del">'+
            '<div class="container img">'+
            '<img src="'+radioImage1+'" alt="radioImage1">'+
            '<img src="'+radioImage2+'" alt="radioImage2">'+
            '<img src="'+radioImage3+'" alt="radioImage3">'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<a class="close" title="Закрыть" href="#close"></a>'
        $('.popup.zak.del').html(radioTemplateDetailedInfo);
    });
});


