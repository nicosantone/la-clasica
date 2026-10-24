
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="La Clásica, inicio">
          <img
            src="/logoRebranding.png"
            alt="La Clásica"
          />
        </a>

        <a
          className="whatsapp-link"
          href="https://wa.me/5491164650151"
          target="_blank"
          rel="noreferrer"
        >
          Hacer un pedido
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Picadas que reúnen</h1>
            <p>Picadas, fiambres y delicias varias para compartir.</p>
          </div>

          <img
            className="hero-image"
            src="/banner_picada3.png"
            alt="Picada de La Clásica"
          />
        </section>

        <section className="featured">
          <div className="featured-heading">
            <p className="section-eyebrow">PARA COMPARTIR</p>
            <h2>Nuestros destacados</h2>
            <p>Opciones ideales para disfrutar cada momento.</p>
          </div>

          <div className="featured-grid">
            <article className="product-card">
              <img src="/IMG_1485.jpg" alt="Picada de La Clásica" />
              <div className="product-info">
                <h3>Picadas para compartir</h3>
                <p>
                  Una selección de fiambres y quesos para disfrutar entre
                  amigos o en familia.
                </p>
              </div>
            </article>

            <article className="product-card">
              <img
                src="/IMG_1492.jpg"
                alt="Selección de fiambres y quesos"
              />
              <div className="product-info">
                <h3>Fiambres y quesos</h3>
                <p>
                  Sabores clásicos y productos seleccionados para armar tu
                  mesa.
                </p>
              </div>
            </article>

            <article className="product-card">
              <img src="/IMG_1502.jpg" alt="Productos de La Clásica" />
              <div className="product-info">
                <h3>Para cada ocasión</h3>
                <p>
                  Alternativas para compartir algo rico y disfrutar de cada
                  encuentro.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="picadas">
          <div className="picadas-heading">
            <p className="section-eyebrow">PARA COMPARTIR</p>
            <h2>Nuestras picadas</h2>
            <p>
              Una selección de sabores para disfrutar alrededor de la mesa.
            </p>
          </div>

          <div className="picadas-grid">
            <article className="picada-card">
              <div className="picada-image">
                <img src="/IMG_1496.jpg" alt="Picada de La Clásica" />
                <span>Para 2 personas</span>
              </div>
              <div className="picada-info">
                <h3>Picada para 2</h3>
                <ul>
                  <li>Longaniza</li>
                  <li>Cantimpalo ahumado</li>
                  <li>Mortadela</li>
                  <li>Jamón cocido natural</li>
                  <li>Jamón crudo</li>
                  <li>Queso Holanda</li>
                  <li>Queso azul</li>
                  <li>Queso pategrás</li>
                  <li>Queso tybo</li>
                  <li>Olivas verdes y negras</li>
                </ul>
                <p className="picada-price">$38.000</p>
                <a
                  className="picada-order"
                  href="https://wa.me/5491164650151?text=Hola%2C%20quiero%20pedir%20una%20picada%20para%202%20personas."
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </article>

            <article className="picada-card">
              <div className="picada-image">
                <img src="/TablaGourmet.png" alt="Picada de La Clásica" />
                <span>Para 4 a 6 personas</span>
              </div>
              <div className="picada-info">
                <h3>Picada para 4 a 6</h3>
                <ul>
                  <li>Longaniza</li>
                  <li>Cantimpalo ahumado</li>
                  <li>Mortadela</li>
                  <li>Jamón cocido natural</li>
                  <li>Jamón crudo</li>
                  <li>Queso Holanda</li>
                  <li>Queso azul</li>
                  <li>Queso pategrás</li>
                  <li>Queso tybo</li>
                  <li>Olivas verdes y negras</li>
                </ul>
                <p className="picada-price">$48.000</p>
                <a
                  className="picada-order"
                  href="https://wa.me/5491164650151?text=Hola%2C%20quiero%20pedir%20una%20picada%20para%204%20a%206%20personas."
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </article>

            <article className="picada-card">
              <div className="picada-image">
                <img src="/TablaGourmet2.png" alt="Picada de La Clásica" />
                <span>Para 6 a 8 personas</span>
              </div>
              <div className="picada-info">
                <h3>Picada para 6 a 8</h3>
                <ul>
                  <li>Longaniza</li>
                  <li>Cantimpalo ahumado</li>
                  <li>Mortadela</li>
                  <li>Jamón cocido natural</li>
                  <li>Jamón crudo</li>
                  <li>Queso Holanda</li>
                  <li>Queso azul</li>
                  <li>Queso pategrás</li>
                  <li>Queso tybo</li>
                  <li>Olivas verdes y negras</li>
                </ul>
                <p className="picada-price">$58.000</p>
                <a
                  className="picada-order"
                  href="https://wa.me/5491164650151?text=Hola%2C%20quiero%20pedir%20una%20picada%20para%206%20a%208%20personas."
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </article>

            <article className="picada-card">
              <div className="picada-image">
                <img src="/TablaGourmet3.png" alt="Picada de La Clásica" />
                <span>Para 10 personas</span>
              </div>
              <div className="picada-info">
                <h3>Picada para 10</h3>
                <ul>
                  <li>Longaniza</li>
                  <li>Cantimpalo ahumado</li>
                  <li>Mortadela</li>
                  <li>Jamón cocido natural</li>
                  <li>Jamón crudo</li>
                  <li>Queso Holanda</li>
                  <li>Queso azul</li>
                  <li>Queso pategrás</li>
                  <li>Queso tybo</li>
                  <li>Olivas verdes y negras</li>
                </ul>
                <p className="picada-price">$65.000</p>
                <a
                  className="picada-order"
                  href="https://wa.me/5491164650151?text=Hola%2C%20quiero%20pedir%20una%20picada%20para%2010%20personas."
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </article>
          </div>
        </section>
        
        <section className="reviews">
          <div className="reviews-heading">
            <p className="section-eyebrow">LA EXPERIENCIA DE NUESTROS CLIENTES</p>
            <h2>Lo que dicen de nosotros</h2>
          </div>

          <div className="reviews-grid">
            <article className="review-card">
              <p className="review-text">
                "¡Excelente atención y calidad de la picada! Compramos una
                para 8 y comimos bárbaro!"
              </p>
              <p className="review-author">Ariel B.</p>
            </article>

            <article className="review-card">
              <p className="review-text">
                "Los productos son impecables y la atención de primera,
                siempre que tenemos alguna reunión no dudamos en pedir una
                picada."
              </p>
              <p className="review-author">Candela A.</p>
            </article>

            <article className="review-card">
              <p className="review-text">
                "Siempre te sacan del apuro con las comidas para hornear y
                las picadas son excelentes, sin duda nuestra primera opción!"
              </p>
              <p className="review-author">Martín R.</p>
            </article>
          </div>
        </section>

        
        {/* Sección de ubicación */}
        <section className="location">
          <div className="location-heading">
            <p className="section-eyebrow">VENÍ A VISITARNOS</p>
            <h2>Encontranos en Devoto</h2>
            <p>Te esperamos en La Clásica para que encuentres todo lo rico que necesitás para compartir.</p>
          </div>

          <div className="location-content">
            <div className="location-info">
              <span className="location-label">NUESTRA DIRECCIÓN</span>
              <h3>La Clásica</h3>
              
                <p className="location-address">
                  Cortina 1929<br />
                  Villa Devoto, Ciudad de Buenos Aires
                </p>

                <div className="location-hours">
                  <h4>Horarios de atención</h4>
                  <p>
                    <span>Lunes a viernes</span>
                    <span>8:00 a 13:00 y 16:00 a 20:30</span>
                  </p>
                  <p>
                    <span>Sábados</span>
                    <span>8:00 a 13:00</span>
                  </p>
                </div>


              <a
                className="location-link"
                href="https://www.google.com/maps/place/Cortina+1929,+C1408CXK+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="location-map">
              <iframe
                src="https://maps.google.com/maps?q=Cortina%201929%2C%20Villa%20Devoto%2C%20Buenos%20Aires&output=embed"
                title="Ubicación de La Clásica en Cortina 1929, Villa Devoto"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>


      </main>

    
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/LaClasica_LogoSinFondo2.png" alt="La Clásica" />
            <p>Picadas que reúnen.</p>
          </div>

          <div className="footer-column">
            <h3>Seguinos</h3>
            <a
              href="https://www.instagram.com/laclasicapicadas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/laclasica.picadas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <a
              href="https://wa.me/5491164650151"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/Cortina+1929,+C1408CXK+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cortina 1929, Villa Devoto
            </a>
          </div>

          <div className="footer-column footer-hours">
            <h3>Horarios de atención</h3>
            <p>Lunes a viernes</p>
            <span>8:00 a 13:00 y 16:00 a 20:30</span>
            <p>Sábados</p>
            <span>8:00 a 13:00</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} La Clásica. Todos los derechos reservados.</p>
        </div>
      </footer>


    </>
  )
}

export default App
