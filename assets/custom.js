//jQuery_T4NT(document).ready((function(n){n(document).on("variant:changed",(function(n){}))}));
 jQuery_T4NT(document).on('keydown','.t4s-btn__checkout',function(event){
//var checkoutButton = $('.t4s-btn__checkout');
  var closeButton = $('.t4s-drawer__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closeButton.focus(); // Move focus to the close button
    }
 
});

jQuery_T4NT(document).on('keydown','.t4s-push-menu-btn',function(event){
//var checkoutButton = $('.t4s-btn__checkout');
  var closeButton = $('.t4s-drawer-menu__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closeButton.focus(); // Move focus to the close button
    }
 
});

jQuery_T4NT(document).on('keydown','.t4s-drawer-menu__close',function(event){
//var checkoutButton = $('.t4s-btn__checkout');
  var closeButton = $('.menumob1 a');
var restoreBtn = $('.t4s-push-menu-btn');
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closeButton.focus(); // Move focus to the close button
    }else if (event.key === 'Enter') {
      setTimeout(function(){
      event.preventDefault(); // Prevent default tab behavior
      restoreBtn.focus(); // Move focus to the close button
      },500);
    }
 
});

    jQuery_T4NT(document).on('keydown','.t4s-site-nav__cart a[href="/cart"]',function(event){
  //  var cartLink = $('.t4s-site-nav__cart a[href="/cart"]');
      

    var miniCart = $('#t4s-mini_cart .t4s-drawer__close');
        setTimeout(function() {
            // Prevent the default link behavior
            event.preventDefault();
 localStorage.setItem('lastFocusedElement', 'header-cart');
            // Check if the pressed key is Enter (key code 13)
            if (event.key === 'Enter') {
                // Move focus to the mini cart
                miniCart.focus();
            }
        }, 500);
    

});
  jQuery_T4NT(document).on('keydown','.t4s-product-form__submit',function(event){
   
    var miniCart = $('#t4s-mini_cart .t4s-drawer__close');
        setTimeout(function() {
            // Prevent the default link behavior
            event.preventDefault();

            // Check if the pressed key is Enter (key code 13)
            if (event.key === 'Enter') {
                // Move focus to the mini cart
                miniCart.focus();
            }
        }, 500);
    

});
  jQuery_T4NT(document).on('keydown','.signup_btn',function(event){
//var suButton = $('.signup_btn');
  var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button
    }
 
});

    jQuery_T4NT(document).on('keydown','.t4s-site-nav__account a[href="/account"]',function(event){
   // var accountLink = $('.t4s-site-nav__account a[href="/account"]');
    var miniAc = $('#t4s-login-sidebar .t4s-drawer__close');
//console.log('Working');
        setTimeout(function() {
            // Prevent the default link behavior
            event.preventDefault();
localStorage.setItem('lastFocusedElement', 'header-account');
            // Check if the pressed key is Enter (key code 13)
            if (event.key === 'Enter') {
                // Move focus to the mini cart
                miniAc.focus();
            }
        }, 500);
    

});
  jQuery_T4NT(document).on('keydown','.login_linka',function(event){
//var suButton = $('.signup_btn');
  var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button
    }else if (event.key === 'Enter'){
      setTimeout(function(){
     event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button 
},500);
    }
      });
  jQuery_T4NT(document).on('keydown','.precover_link',function(event){
//var suButton = $('.signup_btn');
  var closesuButton = $('#t4s-login-sidebar .t4s-drawer__close');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter'){
      setTimeout(function(){
     event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button 
},500);
    }
});
jQuery_T4NT(document).on('keydown','.t4s-drawer__close',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
      //       console.log('Working');
var lastFocusedElementId = localStorage.getItem('lastFocusedElement');
      
       if (lastFocusedElementId) {
      $('#' + lastFocusedElementId).focus();
    }else{
         $('main').focus();
       }
        },500);
    }
 
});
 
 jQuery_T4NT(document).on('keydown', '.mi3', function(event) {
    // Check if the pressed key is 'Tab' (key code 9)
    if (event.which === 9) {
      // Remove the 'is-action__hover' class from the menu item
      $('.t4s-menu-item.has--children').removeClass('is-action__hover');
    }
  });
jQuery_T4NT(document).on('keydown','.t4s-pr__notify-stock',function(event){
//var suButton = $('.signup_btn');
  var closesuButton = $('#t4s-pr-popup__notify-stock input');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button
    }
 
});
jQuery_T4NT(document).on('keydown','#t4s-backToTop',function(event){
    console.log('Working');
//var suButton = $('.signup_btn');
  var closesuButton = $('main');

  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
      event.preventDefault(); // Prevent default tab behavior
      closesuButton.focus(); // Move focus to the close button
        },500);
    }
 
});
jQuery_T4NT(document).on('keydown','.mini_cart_tool_btn.is--note',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
localStorage.setItem('lastFocusedElementClass','mini_cart_tool_btn.is--note');
localStorage.setItem('resumeElement','CartSpecialInstructions');        
         $('#CartSpecialInstructions').focus();
       
        },500);
    }
 
});
jQuery_T4NT(document).on('keydown','.t4s-pr__pswp-btn',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
         $('.pswp__button--zoom').focus();
       
        },500);
    }
 
});

jQuery_T4NT(document).on('keydown','.pswp__button--arrow--right',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
         $('.pswp__button--zoom').focus();
       
        },500);
    }
 
});

jQuery_T4NT(document).on('keydown','.pswp__button--close',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
         $('.t4s-pr__pswp-btn').focus();
       
        },500);
    }
 
});

jQuery_T4NT(document).on('keydown','.mini_cart_tool_btn.is--rates',function(event){
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
localStorage.setItem('lastFocusedElementClass','mini_cart_tool_btn.is--rates');
localStorage.setItem('resumeElement','ShippingCountry_mini_cart');      
         $('#ShippingCountry_mini_cart').focus();
       
        },500);
    }
 
});
jQuery_T4NT(document).on('keydown','.mini_cart_tool_btn.is--discount',function(event){
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
localStorage.setItem('lastFocusedElementClass','mini_cart_tool_btn.is--discount');
localStorage.setItem('resumeElement','CartDiscountcode');      
         $('#CartDiscountcode').focus();
       
        },500);
    }
 
});
jQuery_T4NT(document).on('keydown','.t4s-mini_cart-tool__back',function(event){
   
  // Add an event listener to the checkout button to trap focus

    if (event.key === 'Tab') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
var resumeElement = localStorage.getItem('resumeElement');
      
         $('#'+resumeElement).focus();
       
        },500);
    }else if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
var lastFocusedElementClass = localStorage.getItem('lastFocusedElementClass');
      
         $('.'+lastFocusedElementClass).focus();
       
        },500);
    }
 
});
jQuery(document).ready(function() {
localStorage.setItem('ci',-1);
localStorage.setItem('cp',1);
        $('.flickityt4s-page-dots .dot').each(function() {
            $(this).on('keydown', function(event) {
                if (event.key === 'Enter' || event.keyCode === 13) {
                    $(this).click();
                }
            });
        });
  
  $('.t4s-tabs-collection .flickityt4s-prev-next-button').removeAttr('disabled','disabled'); 
 $('.t4s-product-tabs-wrapper .flickityt4s-prev-next-button').removeAttr('disabled','disabled'); 
  setTimeout(function(){
    checkHidden();
    $('.t4s-drawer__header span').attr("role","heading").attr("aria-level","1");
  },500);
    });

function activateTab($tab) {
      $('.t4s-tabs-collection .t4s-tab-item a').removeClass('t4s-active').attr('aria-selected', 'false');
      $tab.addClass('t4s-active').attr('aria-selected', 'true');
    $tab.click();
    }

    jQuery('.t4s-tabs-collection .flickityt4s-prev-next-button.next').click(function() {
      var $active = $('.t4s-tabs-collection .t4s-tab-item a.t4s-active');
      var $next = $active.parent().next().find('a');
      if ($next.length) {
        activateTab($next);
      }
    });

   jQuery('.t4s-tabs-collection .flickityt4s-prev-next-button.previous').click(function() {
      var $active = $('.t4s-tabs-collection .t4s-tab-item a.t4s-active');
      var $prev = $active.parent().prev().find('a');
      if ($prev.length) {
        activateTab($prev);
      }
    });
function activateTabP($tab) {
      $('.t4s-product-tabs-wrapper a').removeClass('t4s-active').attr('aria-selected', 'false');
$tab.removeAttr('tabindex');
      $tab.addClass('t4s-active').attr('aria-selected', 'true');
    $tab.click();
    }

    jQuery('.t4s-product-tabs-wrapper .flickityt4s-prev-next-button.next').click(function() {
//console.log('Working');
      var $active = $('.t4s-product-tabs-wrapper a.t4s-active');
$('.t4s-product-tabs-wrapper a.t4s-active').attr('tabindex','-1');
      var $next = $active.parent().next().find('a');
      if ($next.length) {
        activateTabP($next);
      }
    });

   jQuery('.t4s-product-tabs-wrapper .flickityt4s-prev-next-button.previous').click(function() {
      var $active = $('.t4s-product-tabs-wrapper a.t4s-active');
$('.t4s-product-tabs-wrapper a.t4s-active').attr('tabindex','-1');
      var $prev = $active.parent().prev().find('a');
      if ($prev.length) {
        activateTabP($prev);
      }
    });

jQuery(document).on('keydown', '.t4s-search-header__input', function(event) { 
    if (event.key != 'Tab') {
      //  event.preventDefault();
        $('.t4s-frm-search__results').css({
            'opacity': '1',
            'visibility': 'visible',
            'pointer-events': 'all'
        });
    }
});
 
  jQuery(document).on('keydown', function(event) {
    if (!$(event.target).closest('.t4s-pa.t4s-frm-search__results').length) {
      return;
    }
let searchResults = $('.t4s-pa.t4s-frm-search__results a');
    if (searchResults.length === 0) return;
 // Retrieve the current index from localStorage
    let currentIndex = parseInt(localStorage.getItem('ci'), 10);
    if (isNaN(currentIndex)) {
        currentIndex = -1;
    }

    switch (event.key) {
        case 'ArrowDown':
            if (currentIndex < searchResults.length - 1) {
                currentIndex++;
                searchResults.eq(currentIndex).focus();
                localStorage.setItem('ci', currentIndex); // Update localStorage
            }
            break;
        case 'ArrowUp':
            if (currentIndex > 0) {
                currentIndex--;
                searchResults.eq(currentIndex).focus();
                localStorage.setItem('ci', currentIndex); // Update localStorage
            }
            break;
        case 'Enter':
            searchResults = $('.t4s-pa.t4s-frm-search__results a');
            currentIndex = 0;
            searchResults.eq(currentIndex).focus();
            localStorage.setItem('ci', currentIndex); // Update localStorage
            break;
        case 'Tab':
            currentIndex++;
            localStorage.setItem('ci', currentIndex); // Update localStorage
            break;
        case 'Escape':
            $('.t4s-pa.t4s-frm-search__results').css({'opacity': '0', 'visibility': 'hidden'});
            $('.t4s-search-header__input').focus();
$('.t4s-search-header__input').removeAttr('aria-activedescendant');
            currentIndex = -1;
            localStorage.setItem('ci', currentIndex); // Update localStorage
            break;
    }
if (currentIndex >= 0 && currentIndex < searchResults.length) {
        const currentId = searchResults.eq(currentIndex).attr('data-rid');
$('.t4s-search-header__input').attr('aria-activedescendant',currentId);
     //   console.log('Current id:', currentId);
    }
   // console.log(currentIndex);
});
 jQuery_T4NT(document).on('keydown','.t4s-page_cart__edit',function(event){
   
    var miniCart = $('.t4s-drawer__close');
        setTimeout(function() {
            // Prevent the default link behavior
            event.preventDefault();

            // Check if the pressed key is Enter (key code 13)
            if (event.key === 'Enter') {
localStorage.setItem('lastModalElement', 't4s-page_cart__edit');
              localStorage.setItem('tabModalElement', 't4s-product-qs__title a');
                // Move focus to the mini cart
                miniCart.focus();
            }
        }, 500);
  
});
 jQuery_T4NT(document).on('keydown','.t4s-modal-close',function(event){ 
  // Add an event listener to the checkout button to trap focus
    if (event.key === 'Tab') {

        setTimeout(function(){

            event.preventDefault(); // Prevent default tab behavior

           //  console.log('Working');

var tabModalElement = localStorage.getItem('tabModalElement');
        $(tabModalElement).focus();
        },200);
    }else if (event.key === 'Enter') {
        setTimeout(function(){
            event.preventDefault(); // Prevent default tab behavior
           //  console.log('Working');
var lastModalElement = localStorage.getItem('lastModalElement');
        $(lastModalElement).focus();
        },200);
    }
});
// Attach a click event handler to the element with attribute 'data-dropdown-open'
function handleDropdownOpen() {
    // Check if the element does not have class 'is--clicked'
    if (!$('[data-dropdown-open]').hasClass('is--clicked')) {
        // Add aria-expanded="true"
        $('[data-dropdown-open]').attr('aria-expanded', 'true');
        var selectedId = $('[data-sticky-select] .is--selected').attr('id');
        $('[data-dropdown-open]').attr('aria-activedescendant', selectedId);
    } else {
        $('[data-dropdown-open]').attr('aria-expanded', 'false');
        $('[data-dropdown-open]').attr('aria-activedescendant', '');
    }
}

$('[data-dropdown-open]').on('click', handleDropdownOpen);

// Handle Enter key press
$('[data-dropdown-open]').on('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        handleDropdownOpen.call(this);
    }
});
$('[data-sticky-select] [data-dropdown-item]').on('click', handleDropdownOpen);
$('[data-sticky-select] [data-dropdown-item]').on('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        handleDropdownOpen.call(this);
    }
});