Infocomp
==============
Área de Computación e Informática pertenciente a la Facultad de Ingeniería de la Universidad Autónoma de San Luis Potosí.

Documentación
==============
El sitio web sigue un patrón MVC con angularJS y usa el preprocesador de CSS "Stylus" con "nib". El código fuente está en la carpeta /app y los archivos para producción en /dist.

* */app*

	* */css* Hojas de estilo minificadas.
		* */img* Todas las imágenes del sitio.

	* */lib* Librerías de bower, por el momento solo es AngularJS.

	* */paginas* Las páginas HTML que son inyectadas en index.html
	
	* */stylus* Archivos de stylus para dar diseño al HTML	

**Gulpfile.js**
Archivo para correr un servidor local, recargar el navegador automáticamente, inyectar hojas de estilo y preprocesar Stylus.


