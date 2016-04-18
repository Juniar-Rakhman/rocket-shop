/**
 * Created by Juniar_R on 4/18/2016.
 */

Template.productTile.events({
    "click .add-to-cart": function (ev) {
        ev.preventDefault();
        Router.go("cartShow");
    }
});
