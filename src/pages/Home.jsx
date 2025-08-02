import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <img src="/hero.jpg" alt="カフェの雰囲気" className="hero-image" />
        <div className="hero-text">
          <h1>Cafe Soleil</h1>
          <p>自家焙煎コーヒーと手作りスイーツのお店</p>
        </div>
      </div>


      <section className="intro">
        <h2>ようこそ！ Cafe Soleil へ</h2>
        <p>Cafe Soleil は、素材にこだわった手作りスイーツと、焙煎したての香り高いコーヒーを提供するカフェです。<br></br>
          ゆったりとした空間で、心地良いひとときをお過ごしください。
        </p>
      </section>
    </div>
  );
}

export default Home;