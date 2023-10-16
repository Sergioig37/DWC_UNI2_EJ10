function crearPersona(nombre, apellidos, edad=0, ...contactos){
    var lista="";
    contactos.forEach(valor=>lista += ' ' + valor);
    console.log("Nombre:"+nombre+"\nApellidos:"+apellidos+"\nEdad:"+edad+"\nContactos:"+lista);

}

crearPersona("Jordi");
crearPersona("Jordi", "Hurtado");
crearPersona("Jordi", "Hurtado", 123);
crearPersona("Jordi", "Hurtado", undefined, 222222, "jordi@tv.es");