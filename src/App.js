import React from "react";
import OrderForm from "./OrderForm";
import "./App.css"

function App(){
  return(
<div className="container">
  <header className="hero">
   <h1 className="animated-title hero-title">
  Trasforma la tua Idea in un'App Android & iOS Professionale
</h1>

  </header>

  <section className="features">
    <h2>Perche scegliere la nostra App</h2>
    <div className="cards">
      <div className="card">
        <h3>veloce  e moderna</h3>
        <p>App progettate per essere fluide e performanti.</p>
      </div>

      <div className="card">
        <h3> Design personalizzato</h3>
        <p>UI curate nei  minimi dettagli per la miglior  esperienza utente.</p>
      </div>

      <div className="card">
        <h3>Android  & Aios</h3>
        <p>Un' unica  app per  tutti i dispositivi</p>
      </div>
    </div>
  </section>


  <section id="prezzi" className="pricing">
    <h2> Prezzi delle nostre App </h2>
    <div className="pricing-cards">
      <div className="pricing-card">
        <h3>Starter</h3>
        <p className="price">£ 499 </p>
        <p>App base Android + IOS</p>
        <ul>
          <li>Funzionalita base</li>
          <li>Pubblicazione sugli store</li>
          <li> 1 mese supporto</li>
        </ul>

          <a href="#contatti" className="cta"> Ordina</a>
      </div>
       <div className="pricing-card">
        <h3> Business</h3>
        <p className="price">£899</p>
        <p> App completa con Funzionalità extra</p>
        <ul>
          <li> Integrazioni pagamenti</li>
          <li> Notifiche push avanzate</li>
          <li> 3 mesi di supporto</li>
        </ul>

        <a href="#contatti" className="cta"> Ordina</a>
       </div>

    </div>
  </section>

  <section id="contatti" className="contact">
    <h2>Contattaci</h2>

    <p>Compila il modulo o scrivici su whatsApp per ottenere informazioni.</p>
     <OrderForm />
    <a className="cta whatsapp"href="https://wa.me/+393283187865">
    contattaci  su  whatsApp
    </a>
   
  </section>
<footer>
        <p>© 2025 AndromedaProg – Sviluppo App Professionali</p>
      </footer>
    </div>
  );
}

export default App;



