import React, {useEffect, useState} from "react";
import { getAllAlerts } from "../services/bookServices";
import AlertList from "../components/AlertList";

const AlertsPage = () => {
    const [alerts, setAlerts] = useState([]);

    const getAllAlertsFromAPI = async() => {
        try {
            const response = await getAllAlerts();
            setAlerts(response.data);
        } catch(error) {
            console.error("Error while fetching the alerts:", error);
        } 
    }

    useEffect(() => {
        getAllAlertsFromAPI()
    },[]);

    return (
        <div>
            <AlertList alerts= {alerts}/>
        </div>
    );
}

export default AlertsPage;