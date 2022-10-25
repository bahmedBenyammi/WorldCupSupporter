import { NextPage} from "next";


import ReactCountryFlag from "react-country-flag"

import Link from "next/link";
interface PropsConfirme{
    country:string
}
 const Confirme: NextPage<PropsConfirme> = ({country}) => {

    return(<div className='flex fill-page justify-center items-center border border-red-800'>
           <div className='flex flex-col items-center justify-center h-full border border-red-800'>
               <div className='flex justify-center items-center space-x-3 m-12'>
               <p className="text-3xl font-serif font-sans font-bold">Congratulation </p>
                   <p className='rotate-6 text-3xl font-bold'>!</p>
               </div>
               <p>you support</p>
               <ReactCountryFlag countryCode={'DE'} svg style={{fontSize: '8em', lineHeight: '8em'}}/>
               <p>Germany</p>
               <p>consulte the global ranking from <Link href={'/'}>here</Link></p>
           </div>
    </div>)
}
// export const getServerSideProps: GetServerSideProps = async ({query}) => {
//     let {email,id}=query
//     let redirect={
//         redirect: {
//             permanent: false,
//             destination: "/404",
//         }}
//     if (!email||!id)
//         return redirect
//     let confirme=await confirmeGlobal(email as string,id as string)
//     if (confirme==='not found')
//         return redirect
//     return {
//         props:{country:confirme}
//     }
// }

export default Confirme;