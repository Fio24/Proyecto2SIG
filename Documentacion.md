# Documentación Proyecto 2 - Sistemas de Información Geográfica

Instituto Tecnológico de Costa Rica
Sede: Campus Tecnológico Central Cartago
Escuela de Ingeniería en Computación
Curso: Sistemas de Información Geográfica
Segundo Proyecto
Estudiantes:
- Fiorella Vanessa Arias Arias (2020023639)
- Daniel Bejarano Alfaro(2020425953)
Profesor: Armando Arce
Fecha de entrega:08/11/2022
Segundo Semestre 2022

- - -

Este proyecto consiste de mapas de temblores. Se generaron:

3 heatmaps
* Heatmap de sismos con una profundidad alta (se estableció profunidad alta como mayores o iguales a 15km)
* Heatmap de sismos con una profundidad baja (menor a 15km)
* Heatmap de todos los sismos basado en la profundidad como valor

2 mapas vectoriales
* Escuelas en zonas donde más tiembla
* Gasolineras en zonas donde más tiembla


## Proceso de generación de Mapas
Primeramente se descargaron las shapefiles de geo_distritos y ovsicori2008crtm05. Estos datos nos permiten generar los mapas que buscamos. De las primeras tareas que hicimos fue agregarla a la tabla de atributos de geo_distritos 3 columnas distinctas, 1 con la cantidad de sismos que tuvo cada distrito, otra con la cantidad de sismos con profundidad baja (menor a 15km) y la última con la cantidad de sismos con profundidad alta (mayor o igual a 15km). Esta tarea se realizó por medio del comando **v.vect.stats**. 

Luego para generar los mapas raster con una interpolación con el método de distancia inversa ponderada, se utilizó el comando **v.surf.idw**. Aquí se tomó como entrada el geo_distritos y las dos columnas de cantidad de sismos con profunidad baja y alta como valores. Dicho comando nos genera el heatmap deseado, luego a traves de la técnica interactiva de grass le cambiamos los colores asociados.


## Filtrado de datos Puntuales
Primeramente se sacó el promedio de la cantidad de sismos en distritos que tienen por lo menos 1 sismo, este valor dió 2.7425. Luego filtramos el mapa geo_distritos con el método **v.extract** en base a la columna con la cantidad total de sismos por distrito, dejando nada más los distritos con una cantidad de sismos mayor a 2.7425. Aquí nos quedamos con una capa vectorial con distritos donde más tiembla, esta luego lo convertimos a un raster con **v.to.rast**. 

Para ambos casos de gasolineras y escuelas, lo que hicimos fue importar los shapefiles correspondientes, luego los convertimos a rasters con **v.to.rast**. Aquí utilizamos algebra de mapas para filtrar los datos puntuales y quedarnos únicamente con escuelas/gasolineras que queden dentro de distritos donde más tiembla. Utilizamos **r.map.calc** con una expresión tipo "rasterNuevo=rasterConEscuela/Gasolineras && rasterConDistritosDondeMasTiembla". Esto genera un raster nueva el cual convertimos de vuelta a una capa vectorial. De esta manera concluimos el filtrado y nos quedamos únicamente con escuelas/gasolineras en zonas donde más tiembla. Al subir estos mapas, unimos cada capa de escuales y gasolineras con la capa de distritos para generar un mapa ideal