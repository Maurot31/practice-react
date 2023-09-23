import Button from "./Button"

const Card = ({personaje}) => {
    
    const {img, name, text, color, bgcolor}= personaje
    return (
        <>
            <figure>
                <div className="imgcard">
                     <img src={img} alt="" />
                </div>
                <figcaption>
                    <h3>{name}</h3>
                    <p>{text}</p>
                </figcaption>
                <Button color={color} />
            </figure>

            <style jsx> {`
                figure{
                    height: 355px;
                    width: 230px;
                    border: 3px solid ${color};
                    border-radius: 20px;
                    background-image: ${bgcolor};
                    box-shadow: 1.5px 1.5px 5px whitesmoke;
                    transition: 0.3s;
                    margin-top: 1.5rem;
                    margin-left: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 15px;
                }

                figure:hover{
                    box-shadow: 2px 2px 10px whitesmoke;
                    transform: scale(1.05);
                } 

                img{
                    height: 160px;
                    width: 160px;
                    object-fit: contain;
                    margin-top: 10px;
                }
                
                figcaption{
                    padding: 3px;
                    height: 150px;
                    top: 25px;
                    text-align: center;
                    font-weight: bold;
                    line-height: 1.1;
                    color: whitesmoke;
                }

                h3{
                    font-size: 25px;
                    font-family: 'Permanent Marker', cursive;
                    letter-spacing: 3px;
                    text-shadow: 1px 0px 3px gray;
                    padding-bottom: 15px;
                    color: whitesmoke;
                }

                p{
                    font-style: italic;
                    padding: 0 2px 0 2px;
                }
            `} </style>
        </>
    )
}

export default Card