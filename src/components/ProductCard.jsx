import { useEffect, useRef } from 'react';
import { WHATSAPP_NUMBER } from '../data';

const money = value => value == null ? 'Consultar precio' : new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value);
const availability = product => product.availability === 'out-of-stock' ? <span className="stock stock-out">Sin stock</span> : product.availability === 'demo' ? <span className="stock stock-demo">Demo · actualizar</span> : product.availability === 'pending' ? <span className="stock stock-pending">Disponibilidad a confirmar</span> : <span className="stock">Disponible</span>;

function ProductImage({ product }) {
  return product.photos?.length ? <img src={product.photos[0]} alt={product.name} loading="lazy" /> : <div className="image-placeholder" role="img" aria-label={`Foto pendiente de carga para ${product.name}`}><span>Foto pendiente</span><small>Agregar imagen</small></div>;
}

export { money, availability };

export default function ProductCard({ product, onOpen }) {
  const cardRef = useRef(null);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quisiera consultar por el producto: ${product.name}`)}`;
  const openCard = () => onOpen(product);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !('IntersectionObserver' in window)) {
      card?.classList.add('is-visible');
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        card.classList.add('is-visible');
        observer.unobserve(card);
      }
    }, { threshold: 0.12 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return <article ref={cardRef} className={`product-card scroll-reveal ${product.availability === 'demo' ? 'is-demo' : ''}`} onClick={openCard} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') openCard(); }} role="button" tabIndex="0" aria-label={`Ver detalle de ${product.name}`}>
    <button className="product-image" onClick={event => { event.stopPropagation(); openCard(); }} aria-label={`Ver ficha de ${product.name}`}>
      {product.featured && <span className="featured">Destacado</span>}
      <ProductImage product={product} />
    </button>
    <div className="product-info">
      <div className="product-meta"><span>{product.category}</span>{availability(product)}</div>
      <h3>{product.name}</h3>
      <a className="product-whatsapp" href={whatsappUrl} onClick={event => event.stopPropagation()} target="_blank" rel="noopener" aria-label={`Consultar por WhatsApp sobre ${product.name}`}>
        <span className="whatsapp-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.1 21.7h-.1c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2 6.4 6.5 2 12.1 2c2.6 0 5.1 1 7 2.9s2.9 4.3 2.9 7c0 5.4-4.5 9.8-9.9 9.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.4.9-1.4.1-.2.1-.4 0-.6l-1-2.4c-.2-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.6.8.3 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.2-.2-.4-.3-.7-.4Z" /></svg></span>
        <span>Consultar por este producto</span><span aria-hidden="true">↗</span>
      </a>
      <div className="product-bottom"><strong>{money(product.price)}</strong><button className="view-link" onClick={event => { event.stopPropagation(); openCard(); }}>Ver ficha <span aria-hidden="true">↗</span></button></div>
    </div>
  </article>;
}
