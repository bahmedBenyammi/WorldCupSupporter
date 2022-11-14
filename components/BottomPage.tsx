import Link from "next/link";
import Facebook from '../images/facebook.svg'
import Instagrm from '../images/instagram.svg'
import Image from "next/image";
export default function BottomPage (){
    return(
        <div className="bg-gray-900 mt-2 inset-x-0 bottom-0 right-0  w-full  ">
            <div className="w-full md:grid md:grid-cols-3 flex-col h-28 ">
                <div className="flex flex-col justify-center items-center md:col-span-2 text-white space-y-2">
                    <p>Flow us on :</p>
                    <div className='flex justify-center items-center space-x-2'>
                        <div className='relative h-6 w-6 hover:cursor-pointer'>
                           <Link href={"https://www.facebook.com/profile.php?id=100087436096630&sk=friends_likes"}
                           title="football supporters"
                           ><a target={"_blank"}>
                               <Image src={Facebook} layout={"fill"} alt=''></Image></a></Link>
                        </div>
                        <div className='relative h-6 w-6 hover:cursor-pointer'>
                            <Link href={"https://www.instagram.com/football_supporters_live/?hl=en"}
                                  title="football supporters"
                            ><a target={"_blank"}>
                                <Image src={Instagrm} layout={"fill"} alt=''></Image></a></Link>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Link className="hover:cursor-pointer"
                        href="https://www.digitalocean.com/?refcode=7c320f6fa12e&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                        <img className="hover:cursor-pointer" src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" />
                    </Link>
                </div>
            </div>

        </div>
    )

}