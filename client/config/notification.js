/**
 * Created by a9jr5626 on 4/19/16.
 */

Meteor.startup(function () {
    sAlert.config({
        effect: '',
        position: 'bottom',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });
});
