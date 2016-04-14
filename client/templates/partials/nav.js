/**
 * Created by Juniar_R on 4/14/2016.
 */

Template.nav.helpers({
    vendors : function() {
        return Vendors.find().fetch();
    }
});
