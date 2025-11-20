# **venta-service**

## Traer la imagen

```bash
docker pull melissafv/venta-service:latest
```

## Correr el servicio

```bash
docker run -d -p 3000:3000 --name venta-service melissafv/venta-service:latest
```

La API estará disponible en:

[http://localhost:3000/](http://localhost:3000/)

/productos, POST
```bash
{
  "nombre": "producto 1",
  "precio": 100,
  "stock": 20
} 
```

/productos, GET

/productos/:id, GET

/productos/:id, PATCH
```bash
{
  "nombre": "producto 1",
  "precio": 200,
  "stock": 30
} 
```

/productos/:id, DELETE