Router.onBeforeAction(function()
{
    if (!Meteor.userId()) {
        //this.render('login');
        Router.go('login');
      } else {
        this.next();
      }
}
,
 {
    except: ['login', 'crearPerfil']
});

Router.route('/', {
    name:"mainPage",
    template:"mainPage"      
});

Router.route('/crearPerfil', {
    name:"crearPerfil",
    template:"crearPerfil",     
})

Router.route('/login', {
    name:"login",
    template:"login"      
});

Router.route('/main', {
    name:"main",
    template:"main"      
});

Router.route('/disponibilidad', {
    name:"disponibilidad",
    template:"disponibilidad"      
});

Router.route('/pendingRequest', {
    name:"pendingRequest",
    template:"pendingRequest"      
});

Router.route('/pendingPayment', {
    name:"pendingPayment",
    template:"pendingPayment"      
});