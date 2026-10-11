/* CATÁLOGO CENTRAL · Reemplazá los registros de demostración por productos reales.
   No hace falta tocar el diseño. Fotos: rutas relativas, por ejemplo "fotos/mi-mate.jpg". */
const PRODUCTS = [
  { id: 'demo-imperial', name: 'Mate imperial', category: 'Imperiales', description: 'Producto de demostración: reemplazar por una descripción real.', materials: ['Información pendiente'], price: null, availability: 'demo', photos: [], featured: true },
  { id: 'demo-torpedo', name: 'Mate torpedo', category: 'Torpedos', description: 'Producto de demostración: reemplazar por una descripción real.', materials: ['Información pendiente'], price: null, availability: 'demo', photos: [], featured: true },
  { id: 'demo-camionero', name: 'Mate camionero', category: 'Camioneros', description: 'Producto de demostración: reemplazar por una descripción real.', materials: ['Información pendiente'], price: null, availability: 'demo', photos: [], featured: false },
  { id: 'demo-bombillon', name: 'Bombillón', category: 'Bombillas y bombillones', description: 'Producto de demostración: reemplazar por una descripción real.', materials: ['Información pendiente'], price: null, availability: 'demo', photos: [], featured: false },
  { id: 'demo-yerbera', name: 'Yerbera', category: 'Yerberas', description: 'Producto de demostración: reemplazar por una descripción real.', materials: ['Información pendiente'], price: null, availability: 'demo', photos: [], featured: false },
  { id: 'demo-canasta', name: 'Canasta matera', category: 'Canastas', description: 'Producto de demostración: reemplazar por una descripción real.', materials: ['Información pendiente'], price: null, availability: 'demo', photos: [], featured: false },
  { id: 'demo-accesorio', name: 'Accesorio', category: 'Accesorios', description: 'Producto de demostración: reemplazar por una descripción real.', materials: ['Información pendiente'], price: null, availability: 'demo', photos: [], featured: false }
];
const CATEGORIES = ['Imperiales', 'Torpedos', 'Camioneros', 'Bombillas y bombillones', 'Yerberas', 'Canastas', 'Accesorios'];
const INSTAGRAM_URL = 'https://www.instagram.com/materos.roldan/';
const WHATSAPP_NUMBER = ''; // Configurar con código de país, sin + ni espacios. Ej: '549XXXXXXXXXX'
