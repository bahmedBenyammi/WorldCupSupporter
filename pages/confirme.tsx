import {GetServerSideProps, NextPage} from "next";

import Link from "next/link";
import {confirmeGlobal} from "../lib/GlobalVote";
import {Short} from "../components/Country";
import Flag from "react-flagkit";
import Head from "next/head";
import {FacebookIcon, FacebookShareButton} from "react-share";
interface PropsConfirme{
    country:string
}
 const Confirme: NextPage<PropsConfirme> = ({country}) => {

    return(
        <>
            <Head>
                <title>Confirme Vote</title></Head>
        <div className='flex fill-page justify-center items-center  '>
           <div className='flex flex-col items-center justify-center h-full  '>
               <div className='flex justify-center items-center space-x-3 m-4 '>
               <p className="text-3xl font-serif font-sans font-bold">Congratulation </p>
                   <p className='rotate-6 text-3xl font-bold'>!</p>
               </div>
               <p className="text-xl font-bold">you support in world cup 2022</p>
               <Flag className='h-40 w-40' country={Short[country.replace(" ","_")]} />
              {/* <Flag className='h-40 w-40' country={Short['DZ']} />*/}
              <p className="text-xl m-2 font-bold">{country}</p>
                {/*<p className="text-xl m-2 font-bold">Algeria</p>
               <div className='flex justify-center items-center'>
                   <p>Share in :</p>
                   <FacebookShareButton url={ 'https://footballsuppurters.com'} quote="hi" contextMenu={'dd'}
                                        hashtag={"#footballsuppoerts"}
                   >

                       <FacebookIcon size={32} round={true}></FacebookIcon>
                   </FacebookShareButton>
               </div>*/}
               <p className="m-2 font-bold">consulte the global ranking from
                   <Link href={'/'} ><span className="text-blue-500 hover:cursor-pointer"> here</span></Link>
               </p>
           </div>
    </div></>)
}
export const getServerSideProps: GetServerSideProps = async ({query}) => {
    let {email,id}=query
    let redirect={
        redirect: {
            permanent: false,
            destination: "/404",
        }}
    if (!email||!id)
        return redirect
    let confirme=await confirmeGlobal(email as string, id as string)
    console.log(confirme)
    if (confirme==='not found')
        return redirect
    return {
        props:{country:confirme}
    }
}

export default Confirme;
