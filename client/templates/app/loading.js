
Template.loading.onRendered = function () {
    if ( ! Session.get('loadingSplash') ) {
        this.loading = window.pleaseWait({
            logo: '/images/Meteor-logo.png',
            backgroundColor: '#7f8c8d',
            loadingHtml: message + spinner
        });
        Session.set('loadingSplash', true); // just show loading splash once
    }
};

Template.loading.onDestroyed = function () {
    if ( this.loading ) {
        this.loading.finish();
    }
};

var message = '<p class="loading-message">Sabar boss ...</p>';
var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';