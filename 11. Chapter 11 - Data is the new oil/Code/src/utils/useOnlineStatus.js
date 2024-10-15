import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlieStatus, setOnlineStatus] = useState(true);
    // check if online

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, []);


    // boolean value
    return onlieStatus;
}

export default useOnlineStatus;