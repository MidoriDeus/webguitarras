import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

const NosotrosPage = () => {
  return (
    <div className="app">
      <Header onCartClick={() => {}} cartCount={0} />
      
      <main style={{ marginTop: '80px' }}>
        <FadeInSection>
          <section className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
            <div className="about-content fade-in-section">
              <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                Sobre RiffMaster
              </h1>
              <p style={{
                color: 'var(--text-secondary)',
                maxWidth: '800px',
                margin: '0 auto 2rem',
                fontSize: '1.2rem',
                lineHeight: '1.8'
              }}>
                Somos una empresa chilena dedicada a la venta de guitarras de alta calidad, 
                fundada con la pasión por la música y el compromiso de ofrecer instrumentos 
                excepcionales a músicos de todos los niveles.
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="container" style={{ padding: '2rem 1rem', textAlign: 'center', marginTop: '2rem' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                width: '100%'
              }}>
                <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                  Nuestra Historia
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  textAlign: 'left'
                }}>
                  RiffMaster nació de la pasión compartida por la música y la artesanía de los instrumentos musicales. 
                  Desde nuestros inicios, nos hemos comprometido a ofrecer guitarras de las marcas más reconocidas 
                  del mundo, como Fender, Gibson, Martin y Taylor, asegurando calidad y autenticidad en cada producto.
                  <br/><br/>
                  Nuestro equipo está formado por músicos y expertos en instrumentos que entienden las necesidades 
                  de cada tipo de guitarrista, desde principiantes hasta profesionales de talla mundial.
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                width: '100%'
              }}>
                <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                  Nuestra Misión
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  textAlign: 'left'
                }}>
                  Conectar a músicos con instrumentos de calidad superior, seleccionados meticulosamente 
                  para garantizar el mejor tono y experiencia de ejecución. Desde clásicos atemporales 
                  hasta innovaciones modernas, RiffMaster es tu destino definitivo en Chile.
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                width: '100%'
              }}>
                <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                  Nuestros Valores
                </h2>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                  gap: '1.5rem',
                  textAlign: 'left'
                }}>
                  <div>
                    <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                      Calidad
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Solo vendemos guitarras de marcas reconocidas y certificadas, 
                      asegurando la mejor calidad en cada instrumento.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                      Pasión
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Amamos la música tanto como tú, y eso se refleja en nuestro 
                      compromiso con cada cliente y cada instrumento.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                      Servicio
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Ofrecemos atención personalizada y asesoramiento experto 
                      para ayudarte a encontrar la guitarra perfecta.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                width: '100%'
              }}>
                <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                  Nuestro Compromiso
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  textAlign: 'left'
                }}>
                  Ofrecemos una cuidadosa selección de guitarras eléctricas, acústicas y electroacústicas 
                  de marcas reconocidas. Nuestro equipo de expertos está siempre dispuesto a ayudarte 
                  a encontrar el instrumento perfecto que se adapte a tu estilo musical y presupuesto.
                  <br/><br/>
                  Además, proporcionamos servicios de mantenimiento y reparación para asegurar que 
                  tus instrumentos permanezcan en óptimas condiciones durante años.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="container" style={{ padding: '4rem 1rem', textAlign: 'center', marginTop: '2rem' }}>
            <div style={{
              backgroundColor: 'var(--bg-card)',
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Contáctanos
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem',
                textAlign: 'left'
              }}>
                <div>
                  <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                    Dirección
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Av. Providencia 1234, Oficina 502<br/>
                    Santiago, Chile
                  </p>
                </div>
                
                <div>
                  <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                    Horario
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Lunes a Viernes: 10:00 - 20:00<br/>
                    Sábados: 10:00 - 18:00
                  </p>
                </div>
                
                <div>
                  <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                    Información
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Teléfono: +56 2 1234 5678<br/>
                    Email: contacto@riiffmaster.cl
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default NosotrosPage;