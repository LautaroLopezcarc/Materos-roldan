import { useEffect } from "react";
import ItemListContainer from "./ItemListContainer";
import logoFondo from "../assets/logomaterosfondo.png";

export default function Main() {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo placeholder-photo z-0 !opacity-100 text-[0px]" role="img" aria-label="Logo de Materos Roldán">
          // aria-label="Espacio reservado para foto de productos de Materos Roldán"
          <img className="absolute inset-0 z-0 h-full w-full object-contain opacity-90" src={logoFondo} alt="" />
          <span className="placeholder-mark hidden">
            Foto de productos
            <br />
            <small>pendiente de carga</small>
          </span>
        </div>
        <div className="container hero-content animate__animated animate__backInDown">
          <p className="eyebrow">Mates · accesorios · momentos</p>
          <h1 id="hero-title">
            Materos
            <br />
            <em>Roldán</em>
          </h1>
          <p className="hero-lead">Tradición que se comparte</p>
          <a className="button button-gold" href="#catalogo">
            Ver catálogo <span aria-hidden="true">↗</span>
          </a>
        </div>
        {/* <div className="hero-stamp" aria-hidden="true">
          MR
          <br />
          <span>desde 2024</span>
        </div> */}
      </section>
      <ItemListContainer />
      <section
        className="about-section"
        id="nosotros"
        aria-labelledby="nosotros-title"
      >
        <div className="container about-grid">
          <div className="about-art animate__animated animate__slideInLeft scroll-animate" aria-hidden="true">
            <img className="relative z-[1] h-full w-full object-contain p-8" src={logoFondo} alt="" />
            <i></i>
          </div>
          <div className="about-copy animate__animated animate__slideInRight scroll-animate">
            <p className="eyebrow">Nuestra historia</p>
            <h2 id="nosotros-title">
              Hecho para <em>compartir</em>
            </h2>
            <p>
              Somos Lautaro y Candela, y creamos Materos Roldán para compartir
              nuestra pasión por el mate. Seleccionamos cada pieza pensando en
              esos encuentros que empiezan con un “¿Tomamos unos mates?”.
            </p>
            <p className="script-line">Tradición que se comparte.</p>
          </div>
        </div>
      </section>
      <section
        className="contact-section container"
        id="contacto"
        aria-labelledby="contacto-title"
      >
        <div className="contact-card animate__animated animate__zoomIn scroll-animate">
          <div>
            <p className="eyebrow">¿Tenés una consulta?</p>
            <h2 id="contacto-title">
              Hablemos de <em>mates</em>
            </h2>
            <p>
              Escribinos por Instagram y te ayudamos a encontrar el compañero
              ideal para tu ritual.
            </p>
          </div>
          <a
            className="button button-dark"
            href="https://www.instagram.com/materos.roldan/"
            target="_blank"
            rel="noopener"
          >
            Consultar por Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
