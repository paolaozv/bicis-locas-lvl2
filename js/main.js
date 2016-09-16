function validateForm(){
	/* Escribe tú código aquí */
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	var nombre = document.getElementById("name").value;
	var lista = document.getElementsByClassName("form-control").value;
  

  
    var contenedor = document.getElementById("input-box");
    var box = getElementById("texto");
    contenedor.removeChild(box);
    box.parentNode.removeChild(box);

    
    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
    	document.getElementById("texto").innerHTML = "Debe ingresar su nombre"; 
   	}
   	else {
       var m = /^[a-zA-Z]*$/;
       if(!nombre.search(m)) {
            console.log("letra")
            m = /[a-z]/g;
        }    
        if(!nombre.search(m)){
                alert("La primera letra debe empezar con maýuscula")
        }
   	} 

   	if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
    	alert("Campo obligatorio");
   	}
   	else {
       var n = /^[a-zA-Z]*$/;
       if(!apellido.search(n)) {
            console.log("letra")
            n = /[a-z]/g;
        }    
        if(!apellido.search(n)){
                alert("La primera letra debe empezar con maýuscula")
        }
   	} 

	if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
		return alert("Ingresa tu email");
	} else if( contrasena == null || contrasena.length <= 6 || contrasena == "password" || contrasena == 123456 || contrasena == 098754 || /^\s+$/.test(contrasena) ) {
		return alert("Ingresa una contraseña válida");
	} else if( lista.selectedIndex == null || lista.selectedIndex == 0 ) { 
        return alert("Elegir una opción de  la lista");
    }
}
