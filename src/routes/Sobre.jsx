import image5 from '../assets/sobre.jpeg'

const Sobre=()=>{
    return(
        <>

        <header className="sobre-nos">
            <h1>Sobre a EletroDrive</h1>
        </header>

        <section className="imagem">
            <img src={image5} alt="produto-1" id="EletroDrive"/>
        </section>

        <section className="textos">
            <p>A EletroDrive nasceu de uma visão ousada: transformar a maneira como nos locomovemos, impulsionando o futuro da mobilidade com sustentabilidade, inovação e tecnologia. Desde o início, nosso compromisso foi claro, oferecer aos nossos clientes os melhores veículos elétricos, redefinindo o conceito de dirigir.</p>

            <h2 className="historia">Nossa história</h2>
            <p>Fundada por apaixonados por tecnologia e pela preservação do meio ambiente, a EletroDrive foi criada para responder à crescente demanda por soluções de transporte mais limpas e eficientes. Acreditamos que os veículos elétricos são o futuro, e queremos tornar essa realidade acessível a todos.</p>

            <h2 className="compromisso">Nosso compromisso</h2>
            <p>Na EletroDrive, cada cliente é parte dessa transformação. Estamos aqui para fornecer não apenas veículos, mas uma nova forma de pensar sobre mobilidade. Nossa missão é ajudar você a reduzir sua pegada de carbono, economizar com custos de combustível e manutenção, e, ao mesmo tempo, desfrutar de uma experiência de direção inovadora e emocionante.</p>
        </section>
        
        <section className="diferenca">
            <nav>
                <ul>
                    <li>Expertise no setor elétrico: Contamos com uma equipe de especialistas que conhece cada detalhe dos veículos elétricos, garantindo que você tenha todo o suporte necessário desde a compra até o pós-venda.</li>
                    <li>Seleção exclusiva de veículos: Trabalhamos com as marcas mais renomadas do mercado, oferecendo uma linha diversificada que atende desde motoristas urbanos a aventureiros que buscam maior autonomia e potência.</li>
                    <li>Compromisso com o meio ambiente: Cada carro que sai de nossa loja é mais um passo rumo a um futuro sustentável, ajudando a reduzir a poluição nas cidades e a dependência de combustíveis fósseis.</li>
                    <li>Inovação constante: A mobilidade elétrica está em constante evolução, e a EletroDrive está sempre à frente, trazendo o que há de mais moderno e eficiente para nossos clientes.</li>
                </ul>
            </nav>
        </section>

        <section className="textos2">
            <h2 className="futuro">Nossa visão para o futuro</h2>
            <p>Mais do que vender veículos, queremos promover uma verdadeira mudança de mentalidade, onde a sustentabilidade e a tecnologia caminham juntas para criar um futuro mais limpo, acessível e inovador. Acreditamos que todos podem fazer parte dessa revolução, e a EletroDrive está aqui para guiá-lo nessa jornada.</p>
        </section>

        <section className="equipe">
            <h2>Membros da Equipe</h2>
            <nav>
                <ul>
                    <li>Bruno Carneiro Leão</li>
                    <li>Matheus Heneiques do Amaral</li>
                    <li>Paulo Akira Okama</li>
                    <li>Victor Mattenhauer Lopes Capp</li>
                </ul>
            </nav>
        </section>
        </>

    )
}

export default Sobre 