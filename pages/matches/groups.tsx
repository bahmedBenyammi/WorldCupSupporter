import {NextPage} from "next";
import NavMathes from "../../components/NavMathes";
import Flag from "react-flagkit";
import {Short} from "../../components/Country";
import {teamsStatus,Group} from "../../lib/TeamsStatus";
import {FC} from "react";
import Navbar from "../../components/Navbar";
 interface props{
     groups:Group[]
 }
const Groups: NextPage<props> = ({groups}) => {
    return (<div>
        <Navbar border={false} sticky={false} />
        <NavMathes/>
        <div className=" ">
            {groups.map(e=>{return <GroupComponent group={e} key={e.group}/>})}

        </div>
    </div>)
}

const GroupComponent:FC<{group:Group}>=({group})=>{
    return(
        <div className="w-full md:px-10 p-2 flex justify-center  bg-gray-100/20 w-full">
           <div className="bg-white border rounded p-4 shadow w-full">
            <p className="font-bold  md:text-xl p-2">{group.group}</p>
            <div>
                <table className=" text-center text-gray-500  w-full ">
                    <thead className=" text-gray-700 uppercase text-sm ">
                    <tr className="space-x-2">

                        <th className="p-2  text-left"
                           scope="col" >
                            <div >Team</div>
                        </th>
                        <th scope="col" className="text-center">
                            <div><span >MP</span>
                            </div>
                        </th>
                        <th scope="col" className="text-center">
                            <div><span>W</span>
                            </div>
                        </th>
                        <th scope="col" className="text-center">
                            <div><span >D</span></div>
                        </th>
                        <th scope="col">
                            <div><span >L</span></div>
                        </th>
                        <th scope="col" className="text-center">
                            <div  className="flex justify-center"><span >Pt</span></div>
                        </th>
                        <th scope="col" className="text-center">
                            <div><span >GF</span>
                            </div>
                        </th>
                        <th scope="col" className="text-center">
                            <div><span >GA</span>
                            </div>
                        </th>
                        <th scope="col" className="text-center">
                            <div ><span >GD</span>
                            </div>
                        </th>
                    </tr></thead>
                    <tbody>
                    {group.teams.map(e=>{

                        return (<tr className="odd:bg-gray-50
                        hover:odd:bg-gray-100 hover:bg-gray-50 border-t border-t-gray-100" key={e.name}>
                            <td className="p-2">
                                <div className="flex space-x-2 items-center">
                                    <Flag country={Short[e.name]} ></Flag>
                                    <span>{e.name}</span>
                                </div>
                            </td>

                            <td className="text-center">{e.mathesPlay}</td>
                            <td className="text-center">{e.win}</td>
                            <td className="text-center">{e.drow}</td>
                            <td className="text-center">{e.lost}</td>
                            <td className="text-center">{e.goals}</td>
                            <td className="text-center">{e.goalA}</td>
                            <td className="text-center">{e.goalD}</td>
                            <td className="text-center">{e.point}</td>

                        </tr>)
                    })}

                    </tbody>
                </table>
            </div></div>
        </div>
    )
}
export async function getStaticProps() {
    const res = await teamsStatus()

    return {
        props: {
            groups:JSON.parse( JSON.stringify(res)),
        },
        revalidate: 60*30, // In seconds
    }
}

export default Groups