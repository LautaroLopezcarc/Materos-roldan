import { useState } from 'react';
import logo from '../assets/logomaterosfondo.png';

const links = [
  ['Inicio', '#inicio'],
  ['Catálogo', '#catalogo'],
  ['Sobre nosotros', '#nosotros'],
  ['Contacto', '#contacto']
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return <header className="site-header" id="inicio">
    <div className="container header-inner">
      <a className="brand" href="#inicio" aria-label="Materos Roldán, inicio">
        <img src={logo} alt="Logo de Materos Roldán" />
      </a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" aria-label="Abrir menú" onClick={() => setOpen(value => !value)}>
        <span></span><span></span>
      </button>
      <nav id="site-nav" className={`site-nav ${open ? 'open' : ''}`} aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </div>
  </header>;
}
