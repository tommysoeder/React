import { useEffect,useRef,useState } from "react";

const MountedMessage = () => {
    const isMounted = useRef(false);
        
    useEffect(() => {
        if (!isMounted.current) {
            console.log('Hello');
            isMounted.current = true;
        }
    }, []);
}

export default MountedMessage