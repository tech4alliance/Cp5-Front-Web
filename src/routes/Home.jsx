import { 
    Body, MainContainer, Header, WelcomeSection, ReasonSection, 
    MissionSection, ProductGrid, ProductItem, SlideShowContainer 
  } from '../css/HomeStyle';
  import SlideShow from '../components/SlideShow';
  import image1 from '../assets/image1.jpg';
  import image2 from '../assets/image2.jpg';
  import image3 from '../assets/image3.jpg';
  // ...outros imports de imagens
  
  const Home = () => {
    return (
      <Body>
        <MainContainer>
          <Header>
            <h1>EletroDrive</h1>
          </Header>
    
          <SlideShowContainer>
            <SlideShow />
          </SlideShowContainer>
    
          <WelcomeSection>
            <h1>Bem-vindo à EletroDrive, À revolução da mobilidade elétrica!</h1>
            <p>Na EletroDrive, estamos movendo o futuro. Somos apaixonados por inovação e sustentabilidade, oferecendo uma seleção de veículos elétricos que combina tecnologia de ponta, eficiência e compromisso com o meio ambiente.</p>
          </WelcomeSection>
    
          <ReasonSection>
            <h2>Por que escolher a EletroDrive?</h2>
            <ul>
              <li>Sustentabilidade em primeiro lugar...</li>
              <li>Tecnologia de ponta...</li>
              <li>Economia e eficiência...</li>
              <li>Atendimento especializado...</li>
            </ul>
          </ReasonSection>
    
          <MissionSection>
            <h2>Nossa missão</h2>
            <p>Nossa missão é redefinir a experiência de dirigir...</p>
          </MissionSection>
    
          <ProductGrid>
            <ProductItem>
              <img src={image1} alt="produto-1" />
              <h3>Tesla Model S Plaid 2024</h3>
              <button>Compre por R$ 1.700.000</button>
              <p>O Tesla Model S é um sedã totalmente elétrico...</p>
            </ProductItem>
    
            <ProductItem>
              <img id='produto-2' src={image2} alt="produto-2" />
              <h3>Tesla Model 3 Performance 2024</h3>
              <button>Compre por R$ 1.290.000</button>
              <p>O Tesla Model 3 Performance 2024 é um dos carros elétricos...</p>
            </ProductItem>
          </ProductGrid>
        </MainContainer>
      </Body>
    );
  };
  
  export default Home;
  