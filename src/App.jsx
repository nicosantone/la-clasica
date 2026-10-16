
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
      </main>

    </>
  )
}

export default App
