
const Button = ({ color }) => {
    return (
        <>
            <button>
                <div>
                    <span>
                        <p>Escoger</p>
                    </span>
                </div>
                <div>
                    <span>
                        <p>Thanks</p>
                    </span>
                </div>
            </button>

            <style jsx> {`
            button {
                outline: 0;
                border: 0;
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 140px;
                height: 50px;
                border-radius: 0.5em;
                box-shadow: 0 0.625em 1em 0 ${color};
                overflow: hidden;
                letter-spacing: 1.9;
                line-height: 0;
                font-family: 'Roboto', sans-serif;
                text-transform: uppercase;
                margin-bottom: 9px;
               }
               
               button div {
                transform: translateY(0px);
                width: 100%;
               }
               
               button,
               button div {
                transition: 0.6s cubic-bezier(.16,1,.3,1);
               }
               
               button div span {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                padding: 0.75em 1.125em;
               }
               
               button div:nth-child(1) {
                background-color: ${color};
               }
               
               button div:nth-child(2) {
                background-color: ${color};
               }
               
               button:hover {
                box-shadow: 0 0.625em 1em 0 whitesmoke;
               }
               
               button:hover div {
                transform: translateY(-50px);
               }
               
               button p {
                font-size: 17px;
                font-weight: bold;
                color: #ffffff;
               }
               
               button:active {
                transform: scale(0.95);
               }
        `}</style>
        </>

    )
}

export default Button