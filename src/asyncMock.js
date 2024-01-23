const products = [
    {
        id: 1,
        name: 'AMD Ryzen 5 5600G',
        price: 2000,
        category: 'Procesador',
        description: 'Mejora tu experiencia de juego con el Procesador gamer AMD Ryzen 5 5600G, diseñado para brindarte un rendimiento excepcional en tus juegos favoritos. Con sus 6 núcleos y 12 hilos, este procesador te permitirá disfrutar de una multitarea fluida y eficiente.'
    }, {
        id: 2,
        name: 'Intel i5 14600KF',
        price: 4000,
        category: 'Procesador',
        description: 'La nueva generación de procesadores Intel Core i5 14600KF destaca por sus 6 GHz, una mejora de hasta el 23% del rendimiento en los videojuegos y una velocidad de flujo de trabajo un 54% más rápida.'
    }, {
        id: 3,
        name: 'Intel i9 14900K',
        price: 10500,
        category: 'Procesador',
        description: 'Procesador 24 núcleos (8 núcleos de rendimiento + 16 núcleos eficientes) 32 subprocesos Socket 1700 Caché L3 36 MB Gráficos Intel UHD 770 de 0,010 micras.'
    }, {
        id: 4,
        name: 'ROG STRIX B760-G GAMING WIFI',
        price: 1500,
        category: 'Mother',
        description: 'Placa base mATX blanca Intel B760 LGA 1700 con 12 + 1 etapas de potencia, DDR5 de hasta 7800 MT/s, SafeSlot PCIe 5.0 x16 con Q-Release, dos ranuras PCIe 4.0 M. 2, WiFi 6E, Ethernet de 2,5 GB, USB 3.2 Gen 2x2 de tipo C, cancelación de ruido bidireccional con IA e iluminación RGB Aura Sync.'
    }, {
        id: 5,
        name: 'ROG MAXIMUS Z790 FORMULA',
        price: 2000,
        category: 'Mother',
        description: 'La Asus ROG Maximus Z790 Formula es una placa base que presenta nuestra llamativa estética Moonlight White. Debajo de esta audaz expresión se encuentra un poderoso arsenal de características, incluido el exclusivo sistema de enfriamiento HybridChill VRM listo para elevar los procesadores Intel® de 14.'
    }, {
        id: 6,
        name: 'ROG STRIX Z790-I GAMING WIFI',
        price: 2300,
        category: 'Mother',
        description: 'Tarjeta madre Intel® Z790 LGA 1700 Mini-ITX con 10+1+1 fases de poder, DDR5, dos puertos M.2, puerto SSD PCIe® 5.0 NVMe®, PCIe 5.0 x16 SafeSlot, ROG Strix Hive con botón AI Overclocking, Wi-Fi 6E, USB 3.2 Gen 2x2 Type-C® trasero, dos puertos Thunderbolt™ 4 y AI Cooling II'
    }, {
        id: 7,
        name: 'GeForce RTX 4090',
        price: 40000,
        category: 'Gpu',
        description: 'NVIDIA® GeForce RTX® 4090 es la GPU GeForce definitiva. Brinda un gran salto en rendimiento, eficiencia y gráficos impulsados ​​​​por IA. Experimenta juegos de rendimiento ultra alto, mundos virtuales increíblemente detallados, productividad sin precedentes y nuevas formas de crear.'
    }, {
        id: 8,
        name: 'GeForce RTX 3080',
        price: 20000,
        category: 'Gpu',
        description: 'Las tarjetas gráficas GeForce RTX® 3080 Ti y RTX 3080 ofrecen el rendimiento perfecto que buscan los jugadores, con la tecnología de Ampere, la arquitectura RTX de 2.ª generación de NVIDIA. Se diseñaron con los Núcleos RT de 2.ª generación y los Núcleos Tensor de 3.ª generación dedicados, nuevos multiprocesadores de transmisión y una memoria G6X para ofrecer una experiencia increíble en los juegos.'
    }, {
        id: 9,
        name: 'AMD Radeon RX 7600',
        price: 19000,
        category: 'Gpu',
        description: 'La AMD Radeon™ RX 7600 está diseñada para la experiencia de juego y transmisión en tiempo real de última generación en 1080p, y ofrece un rendimiento ultrarrápido en los 10 mejores títulos de esports y una experiencia de juego sin interrupciones en los juegos AAA más recientes.'
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        resolve(products.find(prod => prod.id == productId))
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        resolve(products.filter(prod => prod.category == category))
    })
}