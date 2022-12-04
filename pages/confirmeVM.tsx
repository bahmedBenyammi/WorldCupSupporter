import {GetServerSideProps, NextPage} from "next";

import Link from "next/link";

import {Short} from "../components/Country";
import Flag from "react-flagkit";
import Head from "next/head";
import {
    FacebookIcon,
    FacebookShareButton, RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import Navbar from "../components/Navbar";
import {confirmeVoteMatch, IConfirmeVM} from "../lib/voteCalcul";

const Confirme: NextPage<IConfirmeVM> = ({agains,support,link}) => {

    return(
        <>
            <Navbar border={true} sticky={true} />
            <Head>
                <title>Confirme Vote</title></Head>
            <div className='flex  justify-center items-center lg:p-6 fill-page md:h-auto '>
                <div className='flex flex-col items-center justify-center h-full  '>
                    <div className='flex justify-center items-center space-x-3 m-4 '>
                        <p className="text-3xl font-serif font-sans font-bold">Congratulation </p>
                        <p className='rotate-6 text-3xl font-bold'>!</p>
                    </div>
                    <p className="text-xl font-bold">you support </p>
                    <Flag className='h-40 w-40' country={Short[support.replace(" ","_")]} />
                    {/*<Flag className='h-40 w-40' country={Short['DZ']} />*/}
                    <p className="text-xl m-2 font-bold">{support}</p>
                    <p className="text-xl font-bold">{"in his match agains "+agains }</p>

                    {/*<p className="text-xl m-2 font-bold">Algeria</p>*/}
                    <div className='flex justify-center items-center space-x-4 p-4'>
                        <p>Share in :</p>
                        <FacebookShareButton url={ 'https://footballsuppurters.com'} quote="hi" contextMenu={'dd'}
                                             hashtag={"#worldcup2022"}>
                            <FacebookIcon size={32} round={true}></FacebookIcon>
                        </FacebookShareButton>
                        <TwitterShareButton  title={"worldcup2022"} url={process.env.URL!}>
                            <TwitterIcon  size={32} round={true}></TwitterIcon>
                        </TwitterShareButton>
                        <RedditShareButton url={ 'https://footballsuppurters.com'}>
                            <RedditIcon size={32} round={true}></RedditIcon>
                        </RedditShareButton>

                    </div>
                    <p className="m-2 font-bold">view more
                        <Link href={link} ><span className="text-blue-500 hover:cursor-pointer"> here</span></Link>
                    </p>
                </div>
            </div></>)
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    let {email,id,match}=query
    console.log(email)
    console.log(id)
    console.log(match)
    let redirect={
        redirect: {
            permanent: false,
            destination: "/404",
        }}
    if (!email||!id)
        return redirect
    let confirme=await confirmeVoteMatch(email as string, id as string,match as string)
    if (confirme.text==='not found')
        return redirect

    return {
        props:confirme
    }
}

export default Confirme;