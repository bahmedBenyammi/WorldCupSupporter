import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ball from "../images/ball.svg"

const Home: NextPage = () => {
    return(<div className=''>
        <div className='w-screen h-[25rem] bg-[url("../images/support.jpg")] bg-cover bg-center'>
            <div className='w-full  object-fill h-full bg-blue-800/80 flex justify-center items-center  '>
                <div>
                <div className="h-20 relative">
                    <Image src={ball} width={"80"} height={"80"} layout={"fill"} />
                </div>

                <p className='flex items-center justify-center text-5xl text-white p-3'>Beinvenue</p>
                <p className='flex items-center justify-center text-2xl text-white  p-3'>A SmartDZ-TransportStation</p>
                <p className='flex items-center justify-center text-2xl text-white  p-3'>Gare Apllication</p></div>
            </div>
        </div>
    </div>

)
}

export default Home
