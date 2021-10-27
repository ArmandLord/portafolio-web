import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { FormContact } from '../../components'



const Contact = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <FormContact/> 
            {/* <LogosContact/>  */}
        </>
    )
}

export default Contact

