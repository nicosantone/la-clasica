
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="La Clásica, inicio">
          <img
            src="/LaClasica_LogoSinFondo2.png"
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
                  <li>Ingredientes a confirmar</li>
                  <li>Ingredientes a confirmar</li>
                  <li>Ingredientes a confirmar</li>
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
                <img src="/IMG_1496.jpg" alt="Picada de La Clásica" />
                <span>Para 4 a 6 personas</span>
              </div>
              <div className="picada-info">
                <h3>Picada para 4 a 6</h3>
                <ul>
                  <li>Ingredientes a confirmar</li>
                  <li>Ingredientes a confirmar</li>
                  <li>Ingredientes a confirmar</li>
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
                <img src="/IMG_1496.jpg" alt="Picada de La Clásica" />
                <span>Para 6 a 8 personas</span>
              </div>
              <div className="picada-info">
                <h3>Picada para 6 a 8</h3>
                <ul>
                  <li>Ingredientes a confirmar</li>
                  <li>Ingredientes a confirmar</li>
                  <li>Ingredientes a confirmar</li>
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
                <img src="/IMG_1496.jpg" alt="Picada de La Clásica" />
                <span>Para 10 personas</span>
              </div>
              <div className="picada-info">
                <h3>Picada para 10</h3>
                <ul>
                  <li>Ingredientes a confirmar</li>
                  <li>Ingredientes a confirmar</li>
                  <li>Ingredientes a confirmar</li>
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

      </main>
    </>
  )
}

export default App
