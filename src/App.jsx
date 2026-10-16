
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
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
        >
          Hacer un pedido
        </a>
      </header>

      <main>
        
<img
  className="hero-image"
  src="/picada1.jpeg"
  alt="Picada de La Clásica"
/>

        <h1>Picadas que reúnen.</h1>
        <p>Picadas, fiambres y empanadas para compartir.</p>
      </main>
    </>
  )
}

export default App
