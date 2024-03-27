import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // checking if online 
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect( () => {

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

    }, []);

    // online status (bollean)
    return onlineStatus;
}

export default useOnlineStatus;


