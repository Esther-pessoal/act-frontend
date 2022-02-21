import axios from "../../Services";
import { useEffect, useState } from "react";



export function LocationsContainer(){
    const [locations, setLocation] = useState();

    async function getLocations(){
        const response = await axios({
            url: '/location-area',
            method: 'GET'    
        });
        if(response.status >= 200 && response.status < 300) {
            setLocation(response.data);
            console.log(response.data);
        } else {
            console.log(response);
        }
    }

    useEffect(() => {
       getLocations();
    }, []);

    return <h1>Teste</h1>;
}