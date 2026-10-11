import { useEffect, useState } from 'react';
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../data';
import { availability, money } from './ProductCard';

function ProductImage({ product }) {
  return product.photos?.length ? <img className="h-full w-full object-contain" src={product.photos[0]} alt={product.name} loading="lazy" /> : <div className="grid h-full w-full place-items-center bg-[#ebe8de] text-center" role="img" aria-label={`Foto pendiente de carga para ${product.name}`}><div><span className="block text-[10px] uppercase tracking-[.14em] text-[#314b28]">Foto pendiente</span><small className="mt-1 block text-[10px] text-[#6d746b]">Agregar imagen</small></div></div>;
}

export default function ProductModal({ product, onClose }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyboard = event => {
      if (event.key === 'Escape') onClose();
      if (product?.photos?.length > 1 && event.key === 'ArrowLeft') setPhotoIndex(current => (current - 1 + product.photos.length) % product.photos.length);
      if (product?.photos?.length > 1 && event.key === 'ArrowRight') setPhotoIndex(current => (current + 1) % product.photos.length);
    };
    document.addEventListener('keydown', handleKeyboard);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', handleKeyboard); };
  }, [onClose, product]);
  useEffect(() => setPhotoIndex(0), [product]);
  if (!product) return null;

  const photos = product.photos || [];
  const photo = photos[photoIndex];
  const changePhoto = direction => setPhotoIndex(current => (current + direction + photos.length) % photos.length);
  const whatsappMessage = `Hola, quisiera consultar por el producto: ${product.name}`;
  const whatsapp = WHATSAPP_NUMBER && <a className="inline-flex w-full items-center justify-center !bg-[#10291b] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[.09em] !text-white transition hover:!bg-[#dd6714]" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener">Consultar por este producto ↗</a>;

  return <div className="fixed inset-0 z-[1000] grid h-dvh w-screen place-items-center overflow-hidden bg-[#07120b]/75 p-4 max-md:p-2" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div className="relative grid h-[min(620px,calc(100dvh-2rem))] min-h-0 w-full max-w-[880px] min-w-0 grid-cols-[minmax(250px,.78fr)_minmax(0,1.22fr)] overflow-hidden rounded-[18px] bg-[#fcfaf5] shadow-[0_28px_80px_rgba(7,18,11,.3)] max-md:h-auto max-md:max-h-[calc(100dvh-1rem)] max-md:overflow-y-auto max-md:grid-cols-1 max-md:rounded-[14px]">
      <button className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full !bg-[#fcfaf5]/90 text-2xl leading-none !text-[#10291b] shadow-md transition hover:!bg-[#e2aa35]" onClick={onClose} aria-label="Cerrar ficha">×</button>
      <div className="relative min-h-0 min-w-0 h-full overflow-hidden bg-[#ebe8de] max-md:h-[min(68vw,300px)]">
        {photo ? <img className="block h-full w-full object-contain" src={photo} alt={`${product.name}, imagen ${photoIndex + 1}`} /> : <ProductImage product={product} />}
        {photos.length > 1 && <><button className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[#10291b]/85 text-3xl leading-none text-white transition hover:bg-[#dd6714]" type="button" onClick={() => changePhoto(-1)} aria-label="Ver imagen anterior">‹</button><button className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[#10291b]/85 text-3xl leading-none text-white transition hover:bg-[#dd6714]" type="button" onClick={() => changePhoto(1)} aria-label="Ver imagen siguiente">›</button><span className="absolute right-3 top-3 z-10 bg-[#10291b]/85 px-2 py-1 text-[10px] text-white">{photoIndex + 1} / {photos.length}</span><div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2" aria-label="Seleccionar imagen">{photos.map((item, index) => <button type="button" className={`h-2 w-2 rounded-full border border-white transition ${photoIndex === index ? 'scale-125 bg-[#e2aa35]' : 'bg-[#10291b]/40'}`} key={item} onClick={() => setPhotoIndex(index)} aria-label={`Ver foto ${index + 1}`} />)}</div></>}
      </div>
      <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-y-auto bg-[#fcfaf5] px-7 py-8 md:px-12 md:py-10 max-md:overflow-visible"><p className="mb-3 text-[11px] font-semibold uppercase tracking-[.2em] text-[#e2aa35]">{product.category}</p><h2 id="modal-title" className="mb-2 font-[var(--serif)] text-[clamp(38px,5vw,54px)] leading-[.95] text-[#10291b]">{product.name}</h2>{availability(product)}<p className="my-5 max-w-[360px] font-[var(--serif)] text-[18px] leading-[1.35] text-[#6d746b]">{product.description}</p><h4 className="mb-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#10291b]">Materiales y detalles</h4><ul className="mb-5 list-disc pl-4 text-[13px] text-[#6d746b]">{product.materials.map(material => <li key={material}>{material}</li>)}</ul><div className="mb-5 font-[var(--serif)] text-2xl text-[#dd6714]">{money(product.price)}</div><div className="flex flex-wrap gap-2">{whatsapp}<a className="inline-flex w-full items-center justify-center !bg-[#10291b] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[.09em] !text-white transition hover:!bg-[#dd6714]" href={INSTAGRAM_URL} target="_blank" rel="noopener">Consultar por Instagram ↗</a></div></div>
    </div>
  </div>;
}
