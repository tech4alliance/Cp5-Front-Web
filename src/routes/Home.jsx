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