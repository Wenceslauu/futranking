import { useState, useEffect } from "react"
import { Navigate, useParams } from 'react-router-dom'

import { loadPlayer } from '../services/PlayerServices'

const Player = () => {
    const { playerId } = useParams()
    const [player, setPlayer] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await loadPlayer(playerId)
                setPlayer(data)
            } catch (error) {
                console.log(error.response.data.error)
                return <Navigate to='/error' />
            }
        }

        fetchData()
    }, [playerId])

    return (
        <div className="mx-auto md:flex md:gap-8 lg:mx-28">
            <div className="md:w-3/5 lg:w-2/5">
                    <div className="carousel">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={player.image2} className="w-full object-cover" alt={player.name}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={player.image3} className="w-full object-cover" alt={player.name}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={player.image4} className="w-full object-cover" alt={player.name}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                    </div>
            </div>
            <div className="md:w-2/5 mt-4 md:mt-0 text-center md:text-left items-center md:items-start flex flex-col gap-2 font-mono text-lg">
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