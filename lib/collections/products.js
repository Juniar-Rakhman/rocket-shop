/**
 * Created by a9jr5626 on 4/4/16.
 */

Products = new Mongo.Collection("products");

Products.featured = function () {
    var featuredSkus = ["honeymoon-mars", "johnny-liftoff", "one-way-reentry"]
    return _.filter(Products.find().fetch(), function (product) {
        return featuredSkus.indexOf(product.sku) > -1
    });
};