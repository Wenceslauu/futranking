import { useEffect, useState } from "react"
import { Navigate } from 'react-router-dom'

import { loadRanking } from "../services/PlayerServices"

import Card from "../components/Card"

const Ranking = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await loadRanking()
                setPlayers(data)
            } catch (error) {
                console.log(error.response.data.error)
                return <Navigate to='/error' />
            }
        }

        fetchData()
    }, [])

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