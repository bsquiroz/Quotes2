import React from "react";

const QuoteBox = ({ randomQuote, moreQuote, randomColor }) => {
    const { quote, author } = randomQuote;
    return (
        <div className="card-quote">
            <p style={{ color: randomColor }}>
                {" "}
                <span>"</span> {quote} <span>"</span>
            </p>
            <h5>{author}</h5>
            <button
                style={{ background: randomColor }}
                onClick={() => moreQuote()}
            >
                other quote
            </button>
        </div>
    );
};

export default QuoteBox;
