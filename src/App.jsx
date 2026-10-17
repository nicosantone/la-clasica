
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="La Clásica, inicio">
          <img
            src="/LaClasica_LogoNuevo.png"
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
            <h1>Picadas que reúnen.</h1>
            <p>Picadas, fiambres y delicias varias para compartir.</p>
          </div>

          <img
            className="hero-image"
            src="/banner_picada.png"
            alt="Picada de La Clásica"
          />
        </section>

        
<section className="featured">
  <div className="featured-heading">
    <p className="section-eyebrow">PARA COMPARTIR</p>
    <h2>Nuestros destacados</h2>
    <p>Opciones ideales para disfrutar de buenos momentos.</p>
  </div>

  <div className="featured-grid">
    <article className="product-card">
      <img src="/IMG_1485.jpg" alt="Picada de La Clásica" />
      <div className="product-info">
        <h3>Picadas para compartir</h3>
        <p>Una selección de fiambres y quesos para disfrutar entre amigos o en familia.</p>
      </div>
    </article>

    <article className="product-card">
      <img src="/IMG_1492.jpg" alt="Selección de fiambres y quesos" />
      <div className="product-info">
        <h3>Fiambres y quesos</h3>
        <p>Sabores clásicos y productos seleccionados para armar tu mesa.</p>
      </div>
    </article>

    <article className="product-card">
      <img src="/IMG_1502.jpg" alt="Productos de La Clásica" />
      <div className="product-info">
        <h3>Para cada ocasión</h3>
        <p>Alternativas para compartir algo rico y disfrutar de cada encuentro.</p>
      </div>
    </article>
  </div>
</section>


      </main>

    </>
  )
}

export default App
