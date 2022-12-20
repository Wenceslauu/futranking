import { Link } from 'react-router-dom'

const Card = ({ player, ranking }) => {
    return (
        <li className={`relative ${(ranking === 1) ? 'col-span-2' : ''}`}>
            <Link to={`/players/${player.id}`}>
                <div className='absolute top-4 left-[-32px] font-bold text-2xl'>{ranking}.</div>
                <div className={`card card-compact bg-base-100 shadow-xl text-2xl bg-accent`}>
                    <figure><img src={player.image1} className="object-fill" alt={player.name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base-100">{player.nickname}</h2>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Card