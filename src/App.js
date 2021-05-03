import React, { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import { quotes } from "./json/quotes.json";
import { colors } from "./json/colors.json";

function App() {
    //esta linea se encarga de generar el numero random
    const randomQ = Math.floor(Math.random() * (quotes.length - 1));
    const randomC = Math.floor(Math.random() * (colors.length - 1));

    //aqui estamos guardando la cita y le pasamos el numero para obtenerla
    //igual con el color
    const Quote = quotes[randomQ];
    const Color = colors[randomC];

    //creamos el estado del componente y lo inicializamos con el valor de Quote y Color
    const [randomQuote, setRandomQuote] = useState(Quote);
    const [randomColor, setRandomColor] = useState(Color);

    //funcion encargada de cambiar el estado.
    const moreQuote = () => {
        const random = Math.floor(Math.random() * (quotes.length - 1));
        const randomC = Math.floor(Math.random() * (colors.length - 1));
        const Quote = quotes[random];
        const Color = colors[randomC];
        setRandomQuote(Quote);
        setRandomColor(Color);
    };

    return (
        <div className="container" style={{ background: randomColor }}>
            <QuoteBox
                randomQuote={randomQuote}
                moreQuote={moreQuote}
                randomColor={randomColor}
            />
        </div>
    );
}

export default App;
