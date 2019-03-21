Template.crearPerfil.events({
    "submit #crearPerfil" : function(event){
        event.preventDefault();
        var nombresCliente = event.target.crearPerfilNombre.value;
        var ciudadCliente = event.target.crearPerfilCiudad.value;
        var direccionCliente = event.target.crearPerfilDireccion.value;
        var telefonoCliente = event.target.crearPerfilTelefono.value;
        var emailCliente = event.target.crearPerfilEmail.value;
        var passwordCliente1 = event.target.crearPerfilPassword.value;
        var passwordClinete2  = event.target.crearPerfilPassword2.value;

        let userNew = {
            email: emailCliente,
            password: passwordCliente1,
            profile:{
                userToken: new Mongo.ObjectID()._str,
            }
        };
        Accounts.createUser(userNew);
        Router.go("main");
    }
})

Template.crearPerfil.helpers({
    ciudadesLista : [
        {value: "SPS", label: "San Pedro Sula"},
    ]
})