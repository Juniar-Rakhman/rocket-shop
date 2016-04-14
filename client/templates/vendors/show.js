/**
 * Created by Juniar_R on 4/14/2016.
 */

Template.vendorsShow.helpers({
    products: function () {
        return Products.find({"vendor.id": this.id});
    }
});
