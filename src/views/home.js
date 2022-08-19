import { Link } from 'react-router-dom'



export const Home = () => {
    return (
        <>
            <Link to="/signup" className='border-2 rounded-full px-8 py-3.5 md:w-52 lg:w-auto md:py-5 md:px-12 lg:px-16 font-bold bg-none shadow-xl border-yellow-600 hover:bg-teal-800 hover:border-teal-800 hover:text-white transition-colors'> SIGN UP</Link>
        </>
    )
}