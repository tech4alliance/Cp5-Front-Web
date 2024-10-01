import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const Home=()=>{
    return(
        <>
        <header>
            <h1>EletroDrive</h1>
        </header>

        <main>

            <section className="bem-vindo">
                <h1>Bem-vindo à EletroDrive, Á revolução da mobilidade elétrica!</h1>
                <p>Na EletroDrive, estamos movendo o futuro. Somos apaixonados por inovação e sustentabilidade, oferecendo uma seleção  de veículos elétricos que combina tecnologia de ponta, eficiência e compromisso com o meio ambiente. Acreditamos que a mobilidade pode ser mais inteligente, mais ecológica e acessível para todos.</p>
            </section>

            <section className="razao">
                <h2>Por que escolher a EletroDrive?</h2>
                <nav>
                    <ul>
                        <li>Sustentabilidade em primeiro lugar: Todos os nossos veículos são 100% elétricos, proporcionando uma experiência de direção silenciosa e limpa, sem emissões de carbono.</li>
                        <li>Tecnologia de ponta: A EletroDrive oferece os mais avançados modelos de carros elétricos, equipados com sistemas inteligentes de condução, design futurista e autonomia de alto desempenho.</li>
                        <li>Economia e eficiência: Com custos reduzidos de manutenção e abastecimento, nossos carros oferecem uma solução econômica para quem busca inovar na maneira de se locomover.</li>
                        <li>Atendimento especializado: Nossa equipe é composta por especialistas no setor automotivo elétrico, prontos para guiá-lo na escolha do veículo ideal para o seu estilo de vida.</li>
                    </ul>
                </nav>

            <section className="missao">
                <h2>Nossa missão</h2>
                <p>Nossa missão é redefinir a experiência de dirigir, promovendo uma transformação para um mundo mais sustentável e inteligente. Na EletroDrive, a mobilidade do futuro já está ao seu alcance.</p>
            </section>

            <section className="modelos">
                <h2>Nossos modelos</h2>
                <p>Descubra nossa linha completa de veículos elétricos, desde compactos urbanos a SUVs de luxo, todos prontos para levar você a um novo patamar de inovação e conforto.</p>

            </section>
            </section>
            <article className="produtos-grid">

                <section className="produto-item">
                    <img src={image1} alt="produto-1" id="image"/>
                    <div>
                        <h3>Produto 1</h3>
                        <p>100 reais</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img src={image2} alt="produto-2" id="image"/>
                    <div>
                        <h3>Produto 2</h3>
                        <p>100 reais</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image3} alt="produto-3" id="image"/>
                    <div>
                        <h3>Produto 3</h3>
                        <p>100 reais</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image1} alt="produto-4" id="image"/>
                    <div>
                        <h3>Produto 4</h3>
                        <p>100 reais</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image2} alt="produto-5" id="image"/>
                    <div>
                        <h3>Produto 5</h3>
                        <p>100 reais</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image3} alt="produto-6" id="image"/>
                    <div>
                        <h3>Produto 6</h3>
                        <p>100 reais</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image1} alt="produto-7" id="image"/>
                    <div>
                        <h3>Produto 7</h3>
                        <p>100 reais</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image2} alt="produto-8" id="image"/>
                    <div>
                        <h3>Produto 8</h3>
                        <p>100 reais</p>
                    </div>
                </section>

            </article>
        </main>
        </>
    )
}

export default Home 