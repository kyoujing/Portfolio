import "../styles/JobExperiences.css";

const JobExperiences = () => {
  return (
    <div className="jList">
      <ul className="ict">
        <span>IT</span>
        <li>
          <h3>Koodaaja (työkokeilu)</h3>
          <p>
            Digitalent Academy / Stadin AO <br />
            11/2024 — 5/2025 <br />
            Useita eri projekteja (koodit GitHubissani): esim. verkkokaupan
            sivu, Todo-sovellus sekä valtioiden ja maiden hakusivu.
          </p>
        </li>
        <li>
          <h3>Tekninen tuki (työharjoittelu)</h3>
          <p>
            RELY Technologies Oy
            <br /> 03—09/2021 <br />
            Projektin teko WordPressillä (start-upin kotisivut)
          </p>
        </li>
      </ul>
      <ul className="other">
        <span>Muu</span>
        <li>
          <h3>Tarjoilija ja kassamyyjä (keikkatyö)</h3>
          <p>Luckiefun's Itis, Helsinki 10/2020—10/2024</p>
        </li>
        <li>
          <h3>Hyllyttäjä ja kassamyyjä (keikkatyö)</h3>
          <p>
            Vara-Apu Henkilöstöpalvelut Oy, Helsinki
            <br />
            06/2019—01/2020
          </p>
        </li>
        <li>
          <h3>Tarjoilija ja kassamyyjä (keikkatyö)</h3>
          <p>
            Ravintola Punainen Aurinko, Helsinki <br />
            10/2015—03/2017
          </p>
        </li>
      </ul>
    </div>
  );
};

export default JobExperiences;
