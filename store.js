var cartAddbuttons = document.getElementsByClassName('shop-item-btn');
var cartRemoveButtons = document.getElementsByClassName('btn-danger');
//Remove Items from cart 
for(var i = 0; i<cartRemoveButtons.length; i++){
  var button = cartRemoveButtons[i];
  button.addEventListener('click', function(event){
    var buttonClicked = event.target;
    //selecting block to b remove
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');

}

// adding items to cart
for(var i=0; i<cartAddbuttons.length;i++){
  var button = cartAddbuttons[i];
  button.addEventListener('click', function(){
    console.log('addd items');
  })
}