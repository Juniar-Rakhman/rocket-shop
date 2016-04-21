/**
 * Created by Juniar_R on 4/18/2016.
 */

Template.productTile.events({
    "click .add-to-cart": function (ev) {
        ev.preventDefault();
        addToCart(this.sku, function (err, res) {
            Router.go("cartShow");
        })
    }
});
