Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: '404'
});

Router.route("/", {
    name: "homeIndex",
    data: function () {
        return {
            message: "Welcome to Rocket Shop"
        }
    }
});

Router.route("/about", {
    name: "homeAbout"
});

Router.route("/contact", {
    name: "homeContact"
});

Router.route("/products/:sku", {
    name: "productsShow",
    data: function () {
        return Products.findOne({sku: this.params.sku})
    }
});

Router.route("/vendor/:slug", {
    name: "vendorsShow",
    data: function () {
        return Vendors.findOne({slug: this.params.slug})
    }
});

Router.route("/cart", {
    name: "cartShow"
});

