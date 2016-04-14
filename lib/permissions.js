/**
 * Created by a9jr5626 on 4/13/16.
 */

isAdmin = function () {
    //return true if user is logged in and has administrator role
    return Meteor.user() && Roles.userIsInRole(Meteor.user(), ["Administrator"]);
};
