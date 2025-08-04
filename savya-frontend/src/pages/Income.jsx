import Dashboard from "../components/Dashboard.jsx";
import {useUser} from "../hooks/useUser.jsx";
import {useEffect, useState} from "react";
import {API_ENDPOINTS} from "../util/apiEndpoints.js";
import axiosConfig from "../util/axiosConfig.jsx";
import toast from "react-hot-toast";
import IncomeList from "../components/IncomeList.jsx";

const Income = () =>{
    useUser();
    const [incomeData, setIncomeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState([]);
    const[openAddIncomeModal,setOpenAddIncomeModal] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false;
        data: null;
    });

    const fetchIncomeDetails = async()=> {
        if(loading) return;
        setLoading(true);

        try{
            const response = axiosConfig(API_ENDPOINTS.GET_ALL_INCOMES);
            if(response.status === 200){
                console.log("Income list",response.data);
                setIncomeData(response.data);
            }
        }catch(error){
            console.error("Failed to fetch the income details",error);
            toast.error(error.response?.data?.message || "Failed to fetch the income details");
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchIncomeDetails();
    }, []);

    return(
        <Dashboard activeMenu="Income">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        {/*overview for income with line char*/}
                    </div>
                    <IncomeList

                        transactions={incomeData}
                        onDelete={(id) => console.log('deleting the income',id)}
                    />


                </div>

            </div>
        </Dashboard>
    )
}

export default Income;