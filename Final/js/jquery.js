$(document).ready(function () {
    var originalSrc = $('.main-image img').attr('src');
    $('.thumbnails img').on('mouseenter', function () {
        var newSrc = $(this).attr('src');
        $('.main-image img').attr('src', newSrc);
        $(this).css('border', '2px solid black')
        $(this).css('transform', 'scale(1.1)');
    });
    $('.thumbnails img').on('mouseleave', function () {
        $('.main-image img').attr('src', originalSrc);
        $(this).css('border', 'none')
        $(this).css('transform', 'scale(1)');

    });
    $('#women-btn').on('mouseenter', function () {
        $('#wpic, #wpic1').css('transform', 'scale(1.1)');
    });
    $('#women-btn').on('mouseleave', function () {
        $('#wpic, #wpic1').css('transform', 'scale(1.0)');
    });
    $('#men-btn').on('mouseenter', function () {
        $('#mpic, #mpic1').css('transform', 'scale(1.1)');
    });
    $('#men-btn').on('mouseleave', function () {
        $('#mpic, #mpic1').css('transform', 'scale(1.0)');
    });


    $('.product1 img').on('mouseenter', function () {
        $(this).css('transform', 'scale(1.2)');
    });
    $('.product1 img').on('mouseleave', function () {
        $(this).css('transform', 'scale(1.0)');
    });

    $('.plus').click(function () {
        var input = $(this).siblings('input');
        var currentValue = parseInt(input.val());
        input.val(currentValue + 1);
    });
    $('.minus').click(function () {
        var input = $(this).siblings('input');
        var currentValue = parseInt(input.val());
        if (currentValue > 1) {
            input.val(currentValue - 1);
        }
    });

    $('.color-button').mouseenter(function () {
        $(this).css('transform', 'scale(1.3)');
    });

    $('.color-button').mouseleave(function () {
        $(this).css('transform', 'scale(1.0)');
    });

    $('#color-button').click(function () {
        $('color-options h4').text('Color: Racing Green')
    });

    let currentPage = 1;

    $('#prev').click(function () {
        if (currentPage === 2) {
            $('.cover2').css('background-image', "url('./images/cover3.jpg')");
            $('#indicator').text('1/2');
            currentPage = 1;
        }
    });

    $('#next').click(function () {
        if (currentPage === 1) {
            $('.cover2').css('background-image', "url('./images/new-cover.jpg')");
            $('#indicator').text('2/2');
            currentPage = 2;
        }
    });

    $('.dropdown').on('mouseenter', function () {
        $(this).find('.dropdown-menu').stop(true, true).slideDown(200);
    });

    $('.dropdown').on('mouseleave', function () {
        $(this).find('.dropdown-menu').stop(true, true).slideUp(200);
    });

    $('#close-message').click(function () {
        $('#maintenance-message').addClass('hidden');
    });

    function hideAll() {
        $("#search-bar").hide();
        $("#cart-dropdown").hide();
        $("#login-form").hide();
    }
    $(document).click(function (event) {
        if (!$(event.target).closest("#search-bar, #cart-dropdown, #login-form, #search-link, #cart-link, #login-link").length) {
            hideAll();
        }
    });
    $("#search-link").click(function (event) {
        event.preventDefault();
        if ($("#search-bar").is(":visible")) {
            $("#search-bar").hide();
        } else {
            hideAll();
            $("#search-bar").show();
            $("#search-input").focus();
        }
    });
    $("#cart-link").click(function (event) {
        event.preventDefault();
        if ($("#cart-dropdown").is(":visible")) {
            $("#cart-dropdown").hide();
        } else {
            hideAll();
            $("#cart-dropdown").show();
        }
    });
    $("#cart-close-button").click(function () {
        $("#cart-dropdown").hide();
    });
    $("#login-link").click(function (event) {
        event.preventDefault();
        if ($("#login-form").is(":visible")) {
            $("#login-form").hide();
        } else {
            hideAll();
            $("#login-form").show();
        }
    });
    $("#login-close-button").click(function () {
        $("#login-form").hide();
    });

    $("#show-register").click(function (event) {
        event.preventDefault();
        $("#login-section").hide();
        $("#register-section").show();
        $("#form-title").text("Register");
    });
    $("#register-close-button").click(function () {
        $("#register-section").hide();
    });
    $("#show-login").click(function (event) {
        event.preventDefault();
        $("#register-section").hide();
        $("#login-section").show();
        $("#form-title").text("Login");
    });
    function updateCart(items) {
        let totalPrice = 0;
        $("#cart-items").empty();
        items.forEach(item => {
            $("#cart-items").append(`
                        <div class="cart-item">
                            <img src="${item.image}" alt="${item.name}">
                            <p>${item.name} - $${item.price.toFixed(2)}</p>
                        </div>
                    `);
            totalPrice += item.price;
        });

        $("#cart-total-price").text(totalPrice.toFixed(2));
    }
    const exampleItems = [
       
    ];

    updateCart(exampleItems);

    $('.blue').click(function () {
        $('.color-name').text('Color: Racing blue')
    });
    $('.purple').click(function () {
        $('.color-name').text('Color: Racing black')
    });
    $('.white').click(function () {
        $('.color-name').text('Color: Racing white')
    });


    $(document).ready(function() {
    $('.add-to-cart').click(function () {
        var color = $('.color-name').text().replace('Color: ', '');
        var size = $('#size').val();
        var quantity = parseInt($('.quantity input').val());
        var price = parseFloat($('.price').text().replace('$', ''));
        var itemName = $('.product-details h1').text();
        var itemImage = $('.main-image img').attr('src');

        var cartItemHtml = `
                            <div class="cart-item">
                                <img src="${itemImage}" alt="${itemName}">
                                <p>${itemName} - $${price.toFixed(2)}</p>
                                <p>Color: ${color}</p>
                                <p>Size: ${size}</p>
                                <p>Quantity: <span class="cart-item-quantity">${quantity}</span></p>
                                <button class="remove-from-cart">Remove</button>
                                <button class="decrease-quantity">-</button>
                                <button class="increase-quantity">+</button>
                            </div>
                        `;

        $('#cart-items').append(cartItemHtml);
        var currentTotalPrice = parseFloat($('#cart-total-price').text()) || 0;
        var newTotalPrice = currentTotalPrice + (price * quantity);
        $('#cart-total-price').text(newTotalPrice.toFixed(2));
    });

    $(document).on('click', '.remove-from-cart', function () {
        var item = $(this).closest('.cart-item');
        var itemPrice = parseFloat(item.find('p').first().text().split(' - $')[1]);
        var itemQuantity = parseInt(item.find('.cart-item-quantity').text());
        var totalPrice = parseFloat($('#cart-total-price').text());
        var newTotalPrice = totalPrice - (itemPrice * itemQuantity);
        $('#cart-total-price').text(newTotalPrice.toFixed(2));
        item.remove();
    });

    $(document).on('click', '.increase-quantity', function () {
        var item = $(this).closest('.cart-item');
        var quantityElement = item.find('.cart-item-quantity');
        var currentQuantity = parseInt(quantityElement.text());
        var itemPrice = parseFloat(item.find('p').first().text().split(' - $')[1]);
        quantityElement.text(currentQuantity + 1);
        var totalPrice = parseFloat($('#cart-total-price').text());
        $('#cart-total-price').text((totalPrice + itemPrice).toFixed(2));
    });

    $(document).on('click', '.decrease-quantity', function () {
        var item = $(this).closest('.cart-item');
        var quantityElement = item.find('.cart-item-quantity');
        var currentQuantity = parseInt(quantityElement.text());
        if (currentQuantity > 1) {
            var itemPrice = parseFloat(item.find('p').first().text().split(' - $')[1]);
            quantityElement.text(currentQuantity - 1);
            var totalPrice = parseFloat($('#cart-total-price').text());
            $('#cart-total-price').text((totalPrice - itemPrice).toFixed(2));
        }
    });
});



