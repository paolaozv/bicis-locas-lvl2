# Loc@s por las bicis - Level 2

### Validaciones de los campos son las siguientes:

- Declaramos variables globales

 ``` javascript
 
  var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
  var lista = document.querySelector("select").value;
  
```

- Todos los campos son obligatorios, excepto los dos últimos.

  ``` javascript
  
    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
        var span = document.createElement("span");
        var referencia= document.getElementById("name");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        return span;
    }
    
  ```
  
- Los campos nombre y apellido sólo deben permitir caracteres de la A-Z

  ``` javascript
  
    else {
           var m = /^[a-zA-Z]*$/;
           if(!nombre.search(m)) {
                console.log("letra")
                m = /[a-z]/g;
            }
            
  ```          
            
- Para los campos nombre y apellido la primera letra debe ser mayúscula

``` javascript

  if(!nombre.search(m)){
              var span = document.createElement("span");
              var referencia= document.getElementById("name");
              var padre=referencia.parentNode;
              padre.insertBefore(span,referencia);
              var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
              span.appendChild(texto);
              return span;
          }
          
  ```
  
- Validar que el campo email tenga un formato válido. Ej: name@domain.com

``` javascript

  if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-email");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Verifique su email");
        span.appendChild(texto);
        return span;
    }

```

- El campo password debe tener al menos 6 caracteres. El campo password no puede ser igual a "password" ó "123456" ó "098754"

``` javascript

  if( contrasena == null || contrasena.length <= 6 || contrasena == "password" || contrasena == 123456 || contrasena == 098754 || /^\s+$/.test(contrasena) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-password");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresa una contraseña válida");
        span.appendChild(texto);
        return span;
    } 

```
  
- El valor seleccionado de bicis, debe ser una de las opciones presentadas

``` javascript

if (lista == 0) {
        var span = document.createElement("span");
        var referencia= document.querySelector("select");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debes seleccionar al menos un tipo de bici");
        span.appendChild(texto);
        return span;
        }

```
