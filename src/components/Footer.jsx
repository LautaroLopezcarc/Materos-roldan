import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../data';
import logo from '../assets/logomateros.png';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const tiktokUrl = 'https://www.tiktok.com/@materos.roldan';

  return <footer className="site-footer">
    <div className="container footer-content">
      <img className="footer-logo" src={logo} alt="Materos Roldan" />
      <p className="footer-motto">Tradicion que se comparte</p>
      <nav className="footer-socials" aria-label="Redes sociales">
        <a className="footer-social" href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram @materos.roldan"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg></a>
        <a className="footer-social" href={whatsappUrl} target="_blank" rel="noopener" aria-label="WhatsApp Materos Roldan"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.1 21.7h-.1c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2 6.4 6.5 2 12.1 2c2.6 0 5.1 1 7 2.9s2.9 4.3 2.9 7c0 5.4-4.5 9.8-9.9 9.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.4.9-1.4.1-.2.1-.4 0-.6l-1-2.4c-.2-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.6.8.3 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.2-.2-.4-.3-.7-.4Z" /></svg></a>
        <a className="footer-social" href={tiktokUrl} target="_blank" rel="noopener" aria-label="TikTok @materos.roldan"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.5 2h3.1c.3 1.8 1.4 3.2 3.4 3.8v3.1a8.3 8.3 0 0 1-3.4-1v7.2a6.9 6.9 0 1 1-6-6.8v3.2a3.8 3.8 0 1 0 2.9 3.6V2Z" /></svg></a>
      </nav>
      <div className="footer-links"><a href={INSTAGRAM_URL} target="_blank" rel="noopener">@materos.roldan</a><span aria-hidden="true">·</span><a href={tiktokUrl} target="_blank" rel="noopener">TikTok @materos.roldan</a></div>
      <small className="footer-copyright">© {new Date().getFullYear()} Materos Roldan</small>
    </div>
  </footer>;
}
