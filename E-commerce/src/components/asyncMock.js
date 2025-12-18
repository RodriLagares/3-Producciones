  const products = [
  {
    id: 1,
    name: "Codo",
    description: "Accesorio para conexiones hidráulicas.",
    category: "Accesorios",
    price: 3200,
    image: "/img/codo.jpg",
    stock: 25
  },
  {
    id: 2,
    name: "Manguera R2 AT",
    description: "Manguera hidráulica de alta presión.",
    category: "Mangueras",
    price: 8900,
    image: "/img/manguera-r2.jpg",
    stock: 40
  },
  {
    id: 3,
    name: "Válvula Monoblock",
    description: "Válvula monoblock para sistemas hidráulicos.",
    category: "Válvulas",
    price: 24500,
    image: "/img/valvula-monoblock.jpg",
    stock: 10
  },
  {
    "id": 4,
    "name": "Acople Rápido Hidráulico",
    "description": "Acople rápido macho para líneas hidráulicas.",
    "category": "Acoples",
    "price": 6700,
    "image": "/img/acople-rapido.jpg",
    "stock": 30
  },
  {
    "id": 5,
    "name": "Tee Hidráulica",
    "description": "Conector tipo T para derivaciones hidráulicas.",
    "category": "Accesorios",
    "price": 4100,
    "image": "/img/tee.jpg",
    "stock": 20
  },
  {
    "id": 6,
    "name": "Niple Rosca BSP",
    "description": "Niple roscado BSP para conexiones hidráulicas.",
    "category": "Accesorios",
    "price": 2800,
    "image": "/img/niple.jpg",
    "stock": 50
  },
  {
    "id": 7,
    "name": "Bomba Hidráulica de Engranajes",
    "description": "Bomba hidráulica para maquinaria industrial.",
    "category": "Bombas",
    "price": 68000,
    "image": "/img/bomba-hidraulica.jpg",
    "stock": 5
  },
  {
    "id": 8,
    "name": "Filtro Hidráulico",
    "description": "Filtro de aceite hidráulico de alta eficiencia.",
    "category": "Filtros",
    "price": 12400,
    "image": "/img/filtro-hidraulico.jpg",
    "stock": 18
  },
  {
    "id": 9,
    "name": "Manómetro Hidráulico",
    "description": "Manómetro para medición de presión hidráulica.",
    "category": "Instrumentos",
    "price": 9900,
    "image": "/img/manometro.jpg",
    "stock": 22
  },
  {
    "id": 10,
    "name": "Manguera R1 AT",
    "description": "Manguera hidráulica de presión media.",
    "category": "Mangueras",
    "price": 6500,
    "image": "/img/manguera-r1.jpg",
    "stock": 35
  },
  {
    "id": 11,
    "name": "Válvula de Alivio",
    "description": "Válvula de seguridad para control de presión.",
    "category": "Válvulas",
    "price": 19800,
    "image": "/img/valvula-alivio.jpg",
    "stock": 12
  },
  {
    "id": 12,
    "name": "Adaptador JIC a BSP",
    "description": "Adaptador hidráulico para cambio de rosca.",
    "category": "Adaptadores",
    "price": 3600,
    "image": "/img/adaptador-jic-bsp.jpg",
    "stock": 28
  }
]

export const getProducts = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    }, 2000);
    });
};