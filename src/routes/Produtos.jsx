import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpeg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'


const Produtos=()=>{
    return(
        <>
        <h1>Nossos produtos</h1>
        <section className="produto-item">
                    <img src={image1} alt="produto-1" id="image"/>
                    <div>
                        <h3>Tesla Model S Plaid 2024</h3>
                        <button>Compre por R$ 1.700.000</button>
                        <p>O Tesla Model S é um sedã totalmente elétrico, conhecido por seu desempenho de alto nível e tecnologia avançada. Ele oferece autonomia de até 650 km e aceleração impressionante, indo de 0 a 100 km/h em apenas 1,99 segundos na versão Plaid. Com um design elegante, tração nas quatro rodas e interior espaçoso, o Model S combina luxo, inovação e sustentabilidade em um único veículo​.</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img src={image2} alt="produto-2" id="image"/>
                    <div>
                        <h3>Tesla model 3 Performance 2024</h3>
                        <button>Compre por R$ 1.290.000</button>
                        <p>O Tesla Model 3 Performance 2024 é um dos carros elétricos mais potentes e desejados da marca, com dois motores que juntos geram 510 cv e permitem que ele acelere de 0 a 100 km/h em apenas 2,9 segundos. Além do desempenho impressionante, ele possui tração integral e uma autonomia de cerca de 476 km com uma bateria de 82 kWh.</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image3} alt="produto-3" id="image"/>
                    <div>
                        <h3>Nissan Leaf</h3>
                        <button>Compre por R$ 301.340</button>
                        <p>Este carro elétrico é equipado com um motor de 150 cv, alimentado por uma bateria de 40 kWh, oferecendo uma autonomia de até 272 km. O Leaf conta com a tecnologia e-Pedal, que permite dirigir de forma mais eficiente, utilizando apenas um pedal para acelerar e frear. O veículo também se destaca pela segurança, com sistemas avançados como alerta de colisão, controle de tração e estabilidade, e assistência de frenagem inteligente</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image4} alt="produto-4" id="image"/>
                    <div>
                        <h3>Nissan Ariya</h3>
                        <button>Compre por R$ 350.000</button>
                        <p>O Ariya oferece duas opções de bateria: uma de 65 kWh, com autonomia de até 360 km, e outra de 90 kWh, que pode chegar a 500 km de autonomia. Suas configurações variam de 215 a 389 cavalos de potência, com versões de tração dianteira e integral, sendo um modelo que combina performance com alta tecnologia e design futurista​</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image5} alt="produto-5" id="image"/>
                    <div>
                        <h3>Chevrolet Bolt EV</h3>
                        <button>Compre por R$ 329.000</button>
                        <p>Este hatch elétrico oferece um motor de 203 cavalos de potência e uma bateria de 66 kWh, que proporciona uma autonomia de até 416 km com uma única carga. Ele também é equipado com tecnologia avançada de regeneração de energia, permitindo que o carro desacelere sem o uso do freio convencional.</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image8} alt="produto-6" id="image"/>
                    <div>
                        <h3>Chevrolet Bolt EuV</h3>
                        <button>Compre por R$ 279.990</button>
                        <p>O modelo conta com diversas tecnologias, como freios regenerativos, que ajudam a aumentar a autonomia, além de recursos avançados de segurança, como alerta de colisão, frenagem automática de emergência, assistente de permanência em faixa, e 10 airbags. No interior, traz uma central multimídia de 10,2 polegadas, suporte para Android Auto e Apple CarPlay sem fio, além de Wi-Fi nativo.</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image6} alt="produto-7" id="image"/>
                    <div>
                        <h3>Bmw i3</h3>
                        <button>Compre por R$ 257.950</button>
                        <p>O BMW i3 é um carro compacto totalmente elétrico, projetado para ser eficiente e ágil em ambientes urbanos. Ele possui um motor de 170 cv e torque de 25,5 kgfm, alcançando 100 km/h em aproximadamente 7,3 segundos. Com um design inovador e materiais sustentáveis, como fibra de carbono e plásticos reciclados, o i3 não é apenas um veículo ecológico, mas também um modelo de luxo que reflete o padrão de qualidade da BMW</p>
                    </div>
                </section>
                
                <section className="produto-item">
                    <img src={image7} alt="produto-8" id="image"/>
                    <div>
                        <h3>Bmw ix</h3>
                        <button>Compre por R$ 1.101.950</button>
                        <p>O BMW iX é um SUV elétrico de luxo, concebido para oferecer uma experiência de condução única e inovadora. Com um design futurista e uma cabine inspirada em lounges, o iX combina conforto e tecnologia avançada. Ele possui duas opções de motorização: a versão xDrive40 com 326 cv e a xDrive50 com 523 cv, ambas com tração integral e autonomia de até 528 km</p>
                    </div>
                </section>

        </>
    )
}

export default Produtos