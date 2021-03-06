****************************************************************************************
*                           Preparando pltaformas e iconos                             *
****************************************************************************************

-- (0) instalar las dependencias node
npm install

-- (1) Para generar las imagenes 
npm i -g cordova-res
ionic cordova resources --force

-- (2) Reemplazar en el resources los png
-- Para cambiar los iconos e imagenes del inicio de la app
-- para poder Reemplazar los iconos deben tener las mismas dimenciones

E:\Tutoriales\ionic_5\dev\10-noticias\resources\icon.png
E:\Tutoriales\ionic_5\dev\10-noticias\resources\splash.png


-- (2.1) desplegar en la plataforma 
ionic cordova platform add ios
ionic cordova platform add android


--- (2.2) se ejecuta nuevamente

ionic cordova resources --force


-- (3) Para poner la version y otras configuraciones ID app

/*
Config.xml
Nombre, ID y versión
Config.xml para cambiar el nombre y el ID de la aplicación
*/

E:\Tutoriales\ionic_5\dev\10-noticias\config.xml

-- Ejemplo 
<widget id="com.ingJcbDev.noticias" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>Noticias JCB</name>
    <description>App de noticias Prueba</description>
    <author email="ing.jcb.dev@gmail.com" href="http://ionicframework.com/">Ionic Framework Team</author>

*****************
Versión         *
version=“1.0.0” *
*****************

-- Nota: Recuerden cambiar el email y la descripción de su aplicación

-- probar la app para finalizar este proceso

****************************************************************************************
*                                       Fin                                            *
****************************************************************************************

****************************************************************************************
*                           Preparar para desplegar android                            *
****************************************************************************************

-- Para probar el aplicativo en un dispositivo **

-- (1) para intall cordova global 

npm install cordova -g

-- (2) install native

npm i -g native-run

-- (3) Prepara el proyecto para android 

ionic cordova prepare android

-- (opcional 4) si se actualiza el gradle se debe eliminar y generar la nuevamente

ionic cordova platform remove android

-- (5) genera la version que se ejecuta en el android studie

ionic cordova build android

-- ejecuta el dispositivo por defecto

ionic cordova run android --list

-- ejecutar en un dispositivo especifico de la lista

ionic cordova run android --target=NombreDelDispositivo -l

-- (6) Para generar build de produccion

ionic cordova build android --prod —-release

-- (7) generar llave android studio

(7.1) En la barra de menú, haz clic en Build > Build > Generate Signed Bundle/APK.

(7.2) En el cuadro de diálogo Generate Signed Bundle or APK, selecciona Android App Bundle o APK, y haz clic en Next.

(7.3) En el campo Key store path, haz clic en Create new.

-- ubicacion jks
E:\Tutoriales\ionic_5\dev\Android Keys\10-noticias_Jcb\01-noticias_Jcb.jks

-- key
password:J0n13R13795@

-- key dusoftMovil
password:S1N3RG1@S

appsmoviles@dumianmedical.net
Mapau2010apr

-- poner la misma contraseña a los dos

(7.4) Ejecutar cmd 
cd C:\Program Files\Java\jdk1.8.0_261\bin

(7.5) Ejecutar en una sola linea en el cmd

keytool -importkeystore -srckeystore 
E:\Tutoriales\ionic_5\dev\Android_Keys\10-noticias_Jcb\noticiasJcb.jks -destkeystore
E:\Tutoriales\ionic_5\dev\Android_Keys\10-noticias_Jcb\noticiasJcb.jks -deststoretype pkcs12 -destkeypass J0n13R13795@


****************************************************************************************
*                                       Fin                                            *
****************************************************************************************

****************************************************************************************
*                                       PWA                                            *
****************************************************************************************
-- Prepara la pwa
ng add @angular/pwa

-- Comprime la pwa para produccion
ionic build --prod --service-worker

-- para realizar la prueba se puede instalar un hosting local 
npm install --global http-server



-- para desplegar en firebase --
-- instalar las herramientas

npm install -g firebase-tools

firebase login

firebase init

firebase use --add ionic-curso-c63db

firebase deploy



****************************************************************************************
*                                       PWA Fin                                        *
****************************************************************************************
