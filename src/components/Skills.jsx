import "../styles/Skills.css";

const Skills = () => {
  return (
    <>
      <ul className="sList">
        <li>
          <h2>Web-teknologiat</h2>
          <p>
            JavaScript, CSS ja HTML – Hyvä perusosaaminen.
            <br />
            Hallitsen responsiivisen suunnittelun (Flexbox, Grid, media
            queries), käytän moderneja JavaScript-ominaisuuksia (ES6+,
            async/await) ja rakennan käyttöliittymiä tehokkaasti.
          </p>
        </li>
        <li>
          <h2>React</h2>
          <p>
            Perustason osaaminen. Olen toteuttanut useita pieniä projekteja
            komponenttipohjaisella rakenteella. Käytän hookeja (useState,
            useEffect) ja opin jatkuvasti lisää tilanhallinnasta ja
            komponenttien optimoinnista.
          </p>
        </li>
        <li>
          <h2>Microsoft 365 apps</h2>
          <p>
            Word, Excel, PowerPoints – Hallitsen Wordin, Excelin ja PowerPointin
            peruskäytön osana päivittäistä työskentelyä.
          </p>
        </li>
        <li>
          <h2>Adobe</h2>
          <p>
            PhotoShop, Premiere, After Effects – Hyvä perusosaaminen:
            kuvankäsittely, videoeditointi ja yksinkertaisten animaatioiden
            luominen.
          </p>
        </li>
        <li>
          <h2>Flutter, WordPress</h2>
          <p>
            Perustason kokemus. Osaan kehittää monialustaisia sovelluksia
            Flutterilla, kuten käyttöliittymien luonti ja API-yhteyksien käyttö.
            Lisäksi minulla on kokemusta WordPress-sivustojen kehittämisestä,
            kuten teeman mukauttaminen, lisäosien käyttäminen ja SEO-perusteet.
          </p>
        </li>
        <li>
          <h2>Kielitaidot</h2>
          <p>
            suomi: sujuva <br />
            englanti: tyydyttävä <br />
            kiina: äidinkieli <br />
            japani: hyvä <br />
            ruotsi: alkeet <br />
          </p>
        </li>
      </ul>
    </>
  );
};

export default Skills;
