# Arrancar proyecto inicial

1. Instalar todas las dependencias `npm install`
2. Arrancar el servidor local `npm run star:api`
3. Arrancar el proyecto de angular `npm run start:angular` 

*Para correr los test usaremos `npm run test`*

![image info](./src/assets/tea_minder_start.png)


# Proyecto Final - Angular

Con todo lo visto a lo largo de los labs, vamos a desarrollar una aplicación lo más completa posible, la aplicación de ejemplo será TeaMinder, una aplicación que cuenta con un login y  se encarga de recoger un listado de Tes y almacenarlos, y ver los detalles de los mismos.

## Recursos:
- json-server => https://www.npmjs.com/package/json-server
- Angular Material => https://material.angular.io/
- Proyecto inicial con la configuración básica

## Requisitos:

### Rutas
`Debemos tener como mínimo las siguientes rutas`

```
/auth/login
/auth/register
/teas
/teas/:id
```

Debemos tener un Guard, para verificar si estamos logueados para poder acceder a las `/teas` y `/teas/:id`, y al contrario, si estamos logueados no debemos acceder a `/auth/*`

Debemos tener un resolver para la ruta `/teas/:id`

No debemos olvidar las redirecciones necesarias para tener un flujo coherente de enrutamiento.

### Http

Debemos tener un interceptor para mostrar al usuario un error genérico, si se produce un error en cualquier petición http.

Todas las peticiones serán http reales

Dentro de proyecto base ya viene configurado para poder usar un proxy para conectar con `json-server`, además de un archivo `db.json` con algunos datos de prueba.

### AuthComponents (opcional)

Debe contar con una pantalla de login y registro, como no contamos con un backend que nos proporcione la capacidad de hacer login o registro, usaremos el paquete `json-server`.

Debemos poder consultar mediante peticiones HTTP tanto GET o POST para poder consultar si las credenciales pertenecen a un usuario registrado o guardar un nuevo usuario registrando su información

Una vez hagamos login o registro, de forma correcta, es decir nuestro usuario realmente existe o se ha registrado en nuestra DB, debemos poder navegar de forma correcta, para esto vamos a guardar nuestro objeto usuario en el sessionStorage de esta forma cuando sea consultado desde nuestros guards podemos saber si realmente hay una sesión iniciada.

También debemos poder hacer un logout, que no será mas que la limpieza de sessionStorage, y la redirección a nuestro login.

Debemos tener un Guard, que evite que podamos acceder a nuestro listado de tes o al detalle de alguno.

Debemos asegurarnos de que las redirecciones y comprobaciones son correctas en todo momento

### TeaComponents

Debemos tener una pantalla principal donde tendremos un listado de tes, donde solo veremos su nombre y también botones de acciones.

Debemos poder crear, borrar y actualizar un té.

Debemos optimizar lo máximo posible las peticiones que se hagan a nuestro backend, evitar peticiones innecesarias.

Solo podremos ver los tes que nos pertenezcan (hacer la petición filtrando por el usuario que se encuentra activo)

Cuando vayamos del listado a una pagina de detalle, usaremos un resolver para asegurar que los datos existen en memoria o por el contrario tenemos que hacer una petición a partir del id de la ruta

### Notas

```
- Se recomienda hacer testing básico de la aplicación

- Se deja libertad de usar cualquier otra herramienta o librería para los 
componentes visuales (Angular Material) o servidor fake (json-server)

- Se puede añadir cualquier otra funcionalidad que no haya sido mencionada anteriormente```