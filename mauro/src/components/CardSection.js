import CardList from "./CardList"

const CardSection = () => {
    return (
        <>
        <div>
            <CardList />
        </div>

        <style jsx> {`
            div{
                background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b04ee0d0-9794-4382-bbb2-d02b3079d1d8/d7r00a9-d0b811e6-817e-439a-9546-738c3daeb157.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwNGVlMGQwLTk3OTQtNDM4Mi1iYmIyLWQwMmIzMDc5ZDFkOFwvZDdyMDBhOS1kMGI4MTFlNi04MTdlLTQzOWEtOTU0Ni03MzhjM2RhZWIxNTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Qi6woPE-SxPpixBYvsyKKlQKBT1bjrAlfr1V-Ou7XqQ);
                object-fit: contain;
                height: 130vh;
                display: grid;
                width: 100%; 
            }
        `}
        </style>
        
        </>

    )
}

export default CardSection