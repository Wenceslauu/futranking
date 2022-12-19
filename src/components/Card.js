import { Link } from 'react-router-dom'

const Card = ({ player, ranking }) => {
    console.log(ranking)
    return (
        <li className={`relative ${(ranking === 1) ? 'col-span-2' : ''}`}>
            <Link to={`/players/${player.id}`}>
                <div className={`card card-compact bg-base-100 shadow-xl before:content-['${ranking}'] before:absolute before:top-4 before:left-[-32px] before:font-bold text-2xl bg-accent`}>
                    <figure><img src={player.photo} className="object-fill" alt={player.name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base-100">{player.name}</h2>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Card