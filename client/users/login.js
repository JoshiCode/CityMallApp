Template.login.events({
    "submit #frmSignIn":function(event){
        event.preventDefault();
        var userCliente = event.target.frmSignInEmail.value;
        var userPassword = event.target.frmSignInPassword.value;

       /* var user = Meteor.users.findOne({
            'username': userCliente
        });*/
       // Meteor Login
         Meteor.loginWithPassword(userCliente, userPassword, function(error){
            if(error){
                console.log(error);
            }else{
                Router.go("main");
            }
       });
       
    }
})

Template.login.helpers({

})