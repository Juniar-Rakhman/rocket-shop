/**
 * Created by a9jr5626 on 4/16/16.
 */

Template.productsShow.events({
    'click #add-to-cart': function(event){
        event.preventDefault();
        addToCart(this.sku, function (err, res) {
            console.log(err);
            console.log(res);
        })
    }
})
