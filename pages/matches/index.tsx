import {NextPage} from "next";
import Navbar from "../../components/Navbar";
import NavMathes from "../../components/NavMathes";

const Matches: NextPage=()=>{
    return(<div>
        <Navbar border={false} sticky={false} />
        <NavMathes/>
        <div className="flex justify-center items-center fill-pageWait">
            <p className="text-xl">Coming soon ...</p>
        </div>

    </div>)
}
export default Matches