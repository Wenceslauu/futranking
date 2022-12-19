import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="pt-40 text-center flex flex-col items-center gap-4">
            <div>
                <p className="text-6xl">Error 404</p>
                <p className="text-2xl">Page not found</p>
            </div>
            <p>You might want to go to go <span className='font-bold underline hover:text-primary'><Link to='/'>back</Link></span></p>
            <img src='https://thumbs.gfycat.com/LimpingFrequentBluetickcoonhound-size_restricted.gif' className='w-80 h-80 rounded-lg' alt='gabigol' />
        </div>
    )    
}

export default Error