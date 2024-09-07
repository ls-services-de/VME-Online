import React, { useRef, useState, useEffect } from 'react';
import { products } from "../assets";
import styles, { layout } from '../style';

const Billing = () => {
  const slides = [
    { id: 0, value: "Keywords", text: "Die Keywords (deutsch: Schlüsselwörter) sind die Phrasen, die eine Aktion auslösen, bzw. auf die automatisch geantwortet werden. Dies können einzelne Wörter, kleinere Wortketten, aber auch ganze Sätze sein. Gute Beispiele dafür wären „neues Produkt“, „Öffnungszeiten“ oder „Wann ist diese Leistung wieder verfügbar?“." },
    { id: 1, value: "APIs", text: "Ein Application Programming Interface, auch vereinfacht Programmierschnittstelle genannt, ist die Basis einer Künstlichen Intelligenz und sorgt dafür, dass die verschiedenen Programme miteinander Harmonieren und untereinander Daten austauschen können, sodass sie am Ende ein gemeinsames Produkt ausgeben können." },
    { id: 2, value: "Chatbots", text: "Ein Chatbot ist eine Künstliche Intelligenz, die dazu fähig ist, mit Texteingaben umzugehen und darauf zu antworten. Wenn man einen Chatbot für einen bestimmten Anwendungsbereich, wie z. B. Kundensupport nutzen möchte, wird dieser auf einen bestimmten Bereich abgestimmt, um eine hohe Leistungsfähigkeit erhalten zu können, und den Umfang der Datenbank optimieren zu können." },
  ];

  const [wordData, setWordData] = useState(slides[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const changeSlide = () => {
      const nextIndex = (activeIndex + 1) % slides.length;
      setWordData(slides[nextIndex]);
      setActiveIndex(nextIndex);
    };

    const timer = setInterval(changeSlide, 7000);

    return () => clearInterval(timer);
  }, [activeIndex, slides]);

  const handleClick = (index) => {
    const selectedSlide = slides[index];
    setWordData(selectedSlide);
    setActiveIndex(index);
  }

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={products} alt="products" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-3 -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-3 -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>KI für Effizienz: <br className="sm:block hidden" />  Automatisierte APIs, Chatbots und mehr!</h2>
        <h1 className="font-poppins semibold text-gradient text-[25px] mt-10">{wordData.value}</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{wordData.text}</p>

        <div className='flex flex-row mt-8'>
          {slides.map((data, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
            >
              <div className={`px-2 flex items-center justify-center`}>
                <div className={`w-10 h-10 rounded-full ${activeIndex === i ? 'bg-blue-gradient fill-animation transition-all duration-5000 ease-in-out' : 'bg-white'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Billing;
