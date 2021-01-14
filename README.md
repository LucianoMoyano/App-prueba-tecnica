# App para prueba técnica

Prueba técnica para un proceso de seleción utilizando ReactJS, se precisa desarrollar una simple aplicación web dividida en tres vistas, login, main y player. Llamada a una API que devuelve datos aleatorios.
Para cada vista se requiere:

 **Login**

En esta vista, se proporcionará al usuario la posibilidad de introducir su correo y
contraseña y llamará a un Endpoint que devolverá si es correcto o no. En el caso de ser
correcto deberá pasar a la vista principal, o, en caso negativo, mostrar el error.

 **Main**

En la vista principal, se llamará a un Endpoint para poder obtener los datos de la vista a
generar. Se recibirá los datos generales del usuario, contenidos marcados como
favoritos y contenidos disponibles. En la vista debe desarrollarse las siguientes
funcionalidades:

- Añadir / Quitar contenidos a favoritos
- Buscador de contenidos
- Al pulsar sobre un contenido debe dirigirse a la vista de player

 **Player**

Aquí se pretende reproducir el contenido seleccionado, haciendo previamente una
petición a un Endpoint para obtener la URL de reproducción y algunos datos más sobre
el contenido.

---

## Vistas

Las credenciales de acceso a la app son:

- email: *developer@perseo.tv*
- contraseña: _dev_

#

#### **Login View**

![Login View](./public/assets/images/loginview.png)

#

#### **Main View**

![Main View](./public/assets/images/mainview.png )

#

#### **Player View**

![Player View](./public/assets/images/playerview.png )


---

## Build

# instalar dependencia
npm install

# serve en localhost:3000
npm start

# build para crear archivos de producción
npm run build

```
