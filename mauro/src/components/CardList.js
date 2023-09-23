import Card from "./Card"

const personajes = [
    {
        id: 1,  
        img: "https://i.pinimg.com/originals/74/22/6a/74226a3bddafca4f0ac4ac02e1057b53.png",
        name: "El Chavo",
        text: "Es torpe y poco inteligente, aunque en algunas ocasiones tiene salidas muy ingeniosas y cómicas",
        color:"#399C08",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #8CCE08 100%);"
    },
    {
        id: 2,  
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/93f5c4e4-b50e-4f5b-adbc-be054d6fcd78/dfqpklm-d0fd8e70-8118-43ad-856e-d7a1ef4c320c.png/v1/fill/w_750,h_1066/quico_vector_by_jarquin10_dfqpklm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1NSIsInBhdGgiOiJcL2ZcLzkzZjVjNGU0LWI1MGUtNGY1Yi1hZGJjLWJlMDU0ZDZmY2Q3OFwvZGZxcGtsbS1kMGZkOGU3MC04MTE4LTQzYWQtODU2ZS1kN2ExZWY0YzMyMGMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KvigRsu0873NhrpGZ7mmeIqLgtbrDhXF5Cwi_O80LK4",
        name: "Kiko",
        text: "Es el único hijo de Doña Florinda, es el rival del Chavo, y otras veces es su mejor amigo",
        color:"rgba(255,222,0,1)",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #444141 100%);"
    },
    {
        id: 3,  
        img: "https://i.pinimg.com/originals/e3/d6/ce/e3d6ce35378e51a1959a6a6f75ef4aa9.png",
        name: "Chilindrina" ,
        text: "Es algo mandona, manipuladora y estafadora con sus amigos, la más astuta del grupo",
        color: "#D10E12",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #7DC90B 100%);"
    },
    {
        id: 3,  
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/820ad535-c310-4704-a9bc-eecf26bba444/da6uhfr-4f557acd-2425-4ecb-b35c-44abb36de9d3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMGFkNTM1LWMzMTAtNDcwNC1hOWJjLWVlY2YyNmJiYTQ0NFwvZGE2dWhmci00ZjU1N2FjZC0yNDI1LTRlY2ItYjM1Yy00NGFiYjM2ZGU5ZDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kyBKfAZtQa_YooDxD3paSFQC7P6VYJ4hl0_IqV4NbQo",
        name: "Don Ramon",
        text: "Es carismático y de buen corazón, pero con un carácter explosivo",
        color:"#737E84",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%,  #343E64 100%);"
    },
    {
        id: 4,  
        img: "https://i.pinimg.com/originals/b3/56/af/b356afa4ab681b5a06ca442c35d4c56b.png",
        name: "Sr Barriga",
        text: "Es el dueño de la vecindad y también del restaurante de Doña Florinda",
        color:"#62090C",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #863D00 100%);"
    },
    {
        id: 5,  
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/820ad535-c310-4704-a9bc-eecf26bba444/da6uizp-bab6938a-dce3-474d-84cc-2114e55883d7.png/v1/fill/w_267,h_809/profesor_jirafales_animado_by_alexelz_da6uizp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA5IiwicGF0aCI6IlwvZlwvODIwYWQ1MzUtYzMxMC00NzA0LWE5YmMtZWVjZjI2YmJhNDQ0XC9kYTZ1aXpwLWJhYjY5MzhhLWRjZTMtNDc0ZC04NGNjLTIxMTRlNTU4ODNkNy5wbmciLCJ3aWR0aCI6Ijw9MjY3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.a6SmxNQD09pTWAO99a2tV5G-1UcjPxBYRtobCkUAuUY",
        name: "Pr Jirafales",
        text: "Es un hombre soltero, ordenado, educado, ingenuo, presumido y con un trabajoen el área de educación",
        color:"#C53E31",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #446780 100%);"
    },
    {
        id: 6,  
        img: "https://i.pinimg.com/originals/1b/a9/1a/1ba91a3fb945e7b0ad8a26296b2857ad.png",
        name: "Doña Florinda",
        text: "Es una mujer altanera y despectiva, a veces desmesurada, exagerada y hasta sin motivo",
        color:"#FF61BF",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #F3E472 100%);"
    },
    {
        id: 7,  
        img: "https://i.pinimg.com/originals/2c/63/1c/2c631c04e8640ff603732270aaffe37a.png",
        name: "Bruja del 71",
        text: "Es una mujer bondadosa que se preocupa por quedar bien ante todos, especialmente con Don Ramón",
        color:"#AAD1E1",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #4A8FC3 100%);"
    },
    {
        id: 8,  
        img: "https://kindergardenlunalunera.com/wp-content/uploads/2018/10/nono.png",
        name: "Ñoño",
        text: "Es un niño muy inteligente y extremadamente gordo.",
        color:"#F9C812",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #BD1009 100%);"
    },
    {
        id: 9,  
        img: "https://i.pinimg.com/originals/3f/e4/3d/3fe43db95ddfbf69ec51a59cf68427f6.png",
        name: "La Popis",
        text: "Es un niño muy inteligente y extremadamente gordo.",
        color:"#FFAED5",
        bgcolor: "background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #FF1CAD 100%);"
    }
]

const CardList = () => {
    return (
        <>
            <div>
                {
                    personajes.map(personaje => <Card key={personajes.id} personaje={personaje} />)
                }
            </div>

            <style jsx> {`
            div{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
        `}
            </style>

        </>

    )
}

export default CardList

