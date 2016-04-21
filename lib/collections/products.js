/**
 * Created by a9jr5626 on 4/4/16.
 */

Products = new Mongo.Collection("products");

Products.bySku = function(sku) {
    return Products.findOne({sku: sku});
}

Products.featured = function () {
    var featuredSkus = ["honeymoon-mars", "johnny-liftoff", "one-way-reentry", "your-own-crater", "valles-marineris-weekend", "moon-races"];
    return Products.find({sku: {$in: featuredSkus}},
        {fields: {cost: false, inventory: false}});
};

Products.allow({
    update: function(userId, product) {
        return isAdmin();
    },
    insert: function(userId, product) {
        return isAdmin();
    },
    remove: function(userId, product) {
        return isAdmin();
    }
});