import { useState } from 'react'
import ludo from '../../assets/ludo.jpg'
import './home.css'


export default function Home() {

    const [name, setName] = useState('Name')
    return (
        <>
            <h1>Website coming Soon!</h1>
            <h2>name: {name}</h2>

            <img className='mainImage' src={ludo} alt='Ludo'></img>
            
            <a href='https://www.kauripointconstruction.co.nz/home'>KPC</a>
        </>
    )
}