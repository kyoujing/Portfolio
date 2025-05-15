import { useState } from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  const [lang, setLang] = useState("fi");

  const content = {
    fi: {
      intro: `Valmistuin keväällä 2024 Metropolia Ammattikorkeakoulusta, pääaineenani
  mediatekniikka. Opinnoissani perehdyin erityisesti web-ohjelmointiin
  (JavaScript ja React) sekä Adobe- ja Office-ohjelmistoihin. Olen ollut
  mukana tiimiprojekteissa, kuten infonäytön kehittämisessä JavaScriptillä
  sekä mobiilisovelluksen toteutuksessa Nokialle (Flutter & Firebase,
  QR-skannaus Raspberry Pi:llä).`,
      extra: `Lisäksi olen tehnyt omia pienprojekteja, kuten maa- ja lippuhakusivun
  sekä kivi-paperi-sakset-pelin. Löydät projektini GitHubistani. Olen
  oma-aloitteinen, oppimishaluinen ja nopeasti uuteen tarttuva tekijä,
  joka haluaa kasvaa ohjelmistokehityksen ammattilaiseksi.`,
    },

    en: {
      intro: `Hi there! I’m a front-end developer who loves turning creative ideas into interactive, user-friendly websites. For me, coding isn’t just about making things work—it’s about crafting experiences that are both beautiful and functional.`,
      extra: `I spend most of my time working with JavaScript and React, but I also enjoy experimenting with new frameworks and tools to explore what’s possible. Recently, I’ve been diving into ways to make web experiences more engaging and dynamic, especially through animation and interactive design.
  In terms of interests, I’m an avid gamer and a big fan of music, particularly classical music. It’s the perfect way to make life feel richer and more enjoyable, and I often find that the rhythm of music sparks creativity in my work as well.
  If you're into technology, design, or just want to chat about anything that inspires you, feel free to reach out! I’d love to connect and exchange ideas—or even collaborate on a project!`,
    },
  };

  return (
    <>
      <button
        onClick={() => setLang(lang === "fi" ? "en" : "fi")}
        className="lang-button"
      >
        {lang === "fi" ? "English" : "Suomeksi"}
      </button>
      <h1>Jingwang Jiang (Jing)</h1>
      <p>{content[lang].intro}</p>
      <p>{content[lang].extra}</p>
    </>
  );
};

export default AboutMe;
