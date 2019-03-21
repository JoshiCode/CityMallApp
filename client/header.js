Template.header.events({
    "click #headerLogout" : function(event){
        event.preventDefault();
        Meteor.logout();
    }
})