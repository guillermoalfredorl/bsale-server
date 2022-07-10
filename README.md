Bsale server

Este servidor esta desplegado en heroku y conectado a una base de datos MySQL.

La función searchCategory devuelve como respuesta las categorías para el filtrado de los productos.

La función searchProducts devuelve los productos filtrados según la petición enviada a la base de datos. 
Dentro de la petición se envía como parámetros: nombre, categoría, orden, obtenidos desde el frontend.
