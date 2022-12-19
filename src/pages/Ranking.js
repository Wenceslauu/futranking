import { useEffect, useState } from "react"
import { Navigate, useLoaderData } from 'react-router-dom'

import { loadRanking } from "../services/PlayerServices"

import Card from "../components/Card"

const players = [
    {
        name: "Pelé",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/v1671456382/fut-ranking/93947722-913006105786957-7296841504158624479-n_tqr83l.png",
        id: "1"
    },
    {
        name: "R9",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/v1671458041/fut-ranking/ronaldo/R9-1_jov8em.png",
        id: "2"
    },
    {
        name: "Baixinho",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/c_scale,w_670/v1671458756/fut-ranking/rom%C3%A1rio/2001-027487-_19940717_dpsq5o.png",
        id: "3"
    },
    {
        name: "Zico",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/c_scale,w_670/v1671459102/fut-ranking/zico/zico-libertadores_s8wpna.png",
        id: "4"
    },
    {
        name: "Garrincha",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/v1671460298/fut-ranking/garrincha/wp4717336_pjbthm.png",
        id: "5"
    },
    {
        name: "Didi",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/c_scale,w_670/v1671460959/fut-ranking/didi/Didi_x422el.png",
        id: "6"
    },
    {
        name: "Rivellino",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/c_scale,w_670/v1671461283/fut-ranking/rivellino/roberto-rivelino-brasilien-1586521126-36334_rt7sd9.png",
        id: "7"
    },
    {
        name: "Bruxo",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/c_scale,w_670/v1671461473/fut-ranking/bruxo/DtiL7F3X4AAgW7Z_d8kfav.png",
        id: "8"
    },
    {
        name: "Neymar",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/c_scale,w_670/v1671462455/fut-ranking/neymar/1433671394_extras_noticia_foton_7_1_fp0kgf.png",
        id: "9"
    },
    {
        name: "Carlos Alberto",
        photo: "https://res.cloudinary.com/dtxsobdxk/image/upload/v1671461904/fut-ranking/carlos%20alberto/carlos-alberto-torres-copa1970-original_czhtbx.png",
        id: "10"
    },
]

// export async function loader() {
//     try { 
//         const data = await loadRanking();
//         return data
//     } catch (error) {
//         console.log(error.response.data.error)
//         return <Navigate to='/error' />
//     }
// }

const Ranking = () => {
    // const players = useLoaderData()
    // const [players, setPlayers] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await loadRanking()
    //             setPlayers(data)
    //         } catch (error) {
    //             console.log(error.response.data.error)
    //             return <Navigate to='/error' />
    //         }
    //     }

    //     fetchData()
    // }, [])

    const cardItems = players.map((player, index) => {
        return <Card key={player.id} player={player} ranking={index + 1} />
    })

    return (
        <div className="sm:w-4/5 sm:mx-auto md:w-3/5 lg:w-2/5">
            <ol className="flex flex-col gap-8 justify-center items-center sm:grid sm:auto-cols-fr sm:gap-12">
                {cardItems}
            </ol>
        </div>
    )    
}

export default Ranking