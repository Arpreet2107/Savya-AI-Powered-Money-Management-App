import Menubar from "./Menubar.jsx";
import {Sidebar} from "../components/Sidebar.jsx";

const Dashboard = ({children, activeMenu}) => {
    return(
        <div>
            <Menubar activeMenu={activeMenu} />

            <div className="flex">
                <div className="max-[1080px]:hidden">
                    {/*Sidebar content*/}
                    <Sidebar activeMenu={activeMenu}/>
                </div>
                <div className="grow mx-5">{children}</div>
            </div>
        </div>
    )
}

export default Dashboard;