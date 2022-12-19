import { useState, useEffect } from "react"
import { Navigate, useLoaderData } from 'react-router-dom'

import { loadPlayer } from '../services/PlayerServices'

const player = {
    name: 'Gabriel Barbosa',
    nickname: 'Gabigol',
    rookie: 2010,
    retirement: null,
    club: 'Flamengo',
    position: 'ST',
    world_cup: 3,
    description: 'Um dos melhores centroavantes de todos os tempos!',
    image: ['https://res.cloudinary.com/dtxsobdxk/image/upload/c_scale,w_670/v1671457291/24327792_2068244450070859_3815103880056799232_n_pg1azq.png', 'https://res.cloudinary.com/dtxsobdxk/image/upload/v1671458430/fut-ranking/ronaldo/1532124114417_mgdshb.png', 'https://res.cloudinary.com/dtxsobdxk/image/upload/v1671458529/fut-ranking/ronaldo/Final20Brasil20x20Alemvestiario20e20campo2026_j4m4np.png', "https://res.cloudinary.com/dtxsobdxk/image/upload/c_scale,w_670/v1671458164/fut-ranking/ronaldo/esporte-ronaldo-cruzeiro-2_uqhvua.png"],
}

// export async function loader({ params }) {
//     try { 
//         const data = await loadPlayer(params.playerId);
//         return data
//     } catch (error) {
//         console.log(error.response.data.error)
//         return <Navigate to='/error' />
//     }
// }

const Player = () => {
    // const player = useLoaderData()
    // const [player, setPlayer] = useState({})

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await loadPlayer(params.playerId)
    //             setPlayer(data.player)
    //         } catch (error) {
    //             console.log(error.response.data.error)
    //             return <Navigate to='/error' />
    //         }
    //     }

    //     fetchData()
    // }, [])

    return (
        <div className="mx-auto md:flex md:gap-8 lg:mx-28">
            <div className="md:w-3/5 lg:w-2/5">
                    <div className="carousel">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={player.image[1]} className="w-full object-cover" alt={player.name}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={player.image[2]} className="w-full object-cover" alt={player.name}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={player.image[3]} className="w-full object-cover" alt={player.name}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                    </div>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-left flex flex-col items-center gap-2 font-mono text-lg">
                <div className="font-sans">
                    <h1 className="font-bold text-2xl">{player.nickname}</h1>
                    <p className="italic text-md">{player.name}</p>
                </div>
                {(player.world_cup) ? (<div className="badge badge-accent font-bold">{player.world_cup} x WC Titles</div>) : null}
                <p>Career years: {player.rookie} - {(player.retirement) ? player.retirement : 'Ongoing'}</p>
                <p>First Club: {player.club}</p>
                <p>Position: {player.position}</p>
                <p>Description: {player.description}</p>
            </div>
        </div>
    )    
}

export default Player