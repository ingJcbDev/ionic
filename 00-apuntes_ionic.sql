git remote add origin https://github.com/ingJcbDev/ionic.git  //-- Para agregar el repositorio remoto 

git config --list // se ve la configuracion del repositorio 

-- se agreran usuario y contraseña

git config --global user.email ing.jcb.dev@gmail.com 

git config --global user.name ingJcbDev
------------------------------------------------
-- install angula cli
npm install -g @angular/cli

-- instalacion ionic 
npm install -g cordova ionic

-- crear proyecto


----------------------------------- Error ----------------------------------------------

ionic : No se puede cargar el archivo C:\Users\developer\AppData\Roaming\npm\ionic.ps1 porque la ejecución de
scripts está deshabilitada en este sistema. Para obtener más información, consulta el tema
about_Execution_Policies en https:/go.microsoft.com/fwlink/?LinkID=135170.
En línea: 1 Carácter: 1
+ ionic start myApp tabs
+ ~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
	
	
Solucion ----------->

Por tanto, el error es que en el sistema esta deshabilitada la ejecución de scripts. Si abrimos el Windows PowerShell 
como administrador y ejecutamos el comando «Get-ExecutionPolicy» nos tendría que devolver «Unrestricted» o lo que es 
lo mismo «Restringido». Para cambiar esta configuración basta con ejecutar «Set-ExecutionPolicy Unrestricted».	


-- ejecutar el servidor 

ionic serve

-- version node 
node -v

-- version npm 
npm -v

------------------ reproducir audios ------------

-- Crear proyecto en blanco

ionic start sonidos blank

-- Iniciar el server 

ionic serve

--------------------- comandos ionic 5 --------------

-- crea un proyecto 
ionic start nombre

-- inicia el servidor
ionic serve

-- ver como se ve en ios android

ionic serve --lab

-- para reconstruir los módulos de node con el comando npm install (ruta donde esta el directorio)

npm install

-- crear un nuevo proyecto de angular 

ng new angularbases

-- para iniciar el servidor angular 

ng serve -o

--- crear componentes 

-- ejecuta el comando pero no modifica los archivos

-- g = generar
-- c = componente

ng g c pages/about --dry-run

-- 

ng g c pages/about

-- crear manejador de rutas 

-- g = generar
-- m = modulo

ng g m appRouting --dry-run

-- para crearlo dentro de pages

ng g m appRouting --flat


-- crear menu 

ng g c components/menu


-- Crear modulo para organizar los componentes 

ng g m pages/pages --flat

-- crear posts routing automatico

ng g m pages/posts --routing

ng g c pages/posts

-- Crear un Servicio

ng g s services/data --spec=false

-- Crear un post 

ng g c pages/posts/post --spect=false



******************************************* ionic **************************************

ionic start componentes blank

-- crear pagina de inicio 

ionic g page pages/inicio --dry--run

-- crear paginas de alertas 

ionic g page pages/alert --spec=false


ionic g page pages/action-sheet --spec=false

-- crear componentes

ionic g m components --dry-run

-- generar componente

ionic g c components/header --spec=false

-- grear pagina de avatar

ionic g page pages/avatar --spec=false

-- generar botones

ionic generate page pages/botones --spec=false

-- generar card 

ionic g page pages/card --spec=false

-- generar check

ionic g page pages/check --spec=false

-- generar formato de fecha y hora 

ionic g page pages/dataTime --spec=false

-- generar fab 

ionic g page pages/fab --spec=false

-- generar grid 

ionic g page pages/grid --spec=false

-- generar infiniteScroll

ionic g page pages/infiniteScroll --spec=false

-- generar input text 

ionic g page pages/input --spec=false


-- generar list 

ionic g page pages/list --spec=false

-- Crear un servicio

ionic g service services/data --spec=false

-- crear list reload

ionic g page pages/list-reorder --spec=false

-- Crear pagina loading

ionic g page pages/loading --spec=false

-- Crear menu

ionic g c components/menu --spec=false

-- Crear modal

ionic g page pages/modal --spec=false

-- Crear popover

ionic g page pages/popover --spec=false

ionic g c components/popinfo --spec=false

-- progressBar

ionic g page pages/progressBar --spec=false

-- refresher

ionic g page pages/refresher --spec=false

-- searchbar

ionic g page pages/searchbar --spec=false

-- pipes 

ionic g m pipes

ionic g pipe pipes/filtro --spec=false

-- segment

ionic g page pages/segment --spec=false

-- slides 

ionic g page pages/slides --spec=false

-- ion-tabs

ionic g page pages/tabs --spec=false

/*6.3. DevApp - Pre-requisitos*/ 


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

-- (4) si se actualiza el gradle se debe eliminar y generar la nuevamente

ionic cordova platform remove android

-- (5) genera la version que se ejecuta en el android studie

ionic cordova build android 

-- ejecuta el dispositivo por defecto

ionic cordova run android --list

-- ejecutar en un dispositivo especifico de la lista

ionic cordova run android --target=NombreDelDispositivo -l

****************************************************************************************
*                                       Fin                                            *
****************************************************************************************

----------------------------------------------------------------------------------------------------
                                      Noticias
----------------------------------------------------------------------------------------------------

-- Para Crear el proyecto
ionic start 04-noticias tabs

-- news api
https://newsapi.org/
Registration complete
Your API key is: d268e175440744edbba4a0b3bffecfbe

-- crear servicio sin el archivo de pruebas 

ionic g s services/noticias --skipTests=true


-- 7.8. Componente de noticias y componente de noticia

-- crear componente de noticias
ionic g m components

-- crear componente de noticias
ionic g c components/noticias

-- crear componente de noticia
ionic g c components/noticia

-- 7.9. Página de encabezados

-- 7.10. Cargar noticias por categoría - Servicio

-- 7.11. Mostrar encabezados dependiendo de la categoría

-- 7.12. Implementar infinite-scroll - TopHeadlines