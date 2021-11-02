import { useState } from 'react'
import { ButtonCV, IconTheme, Download } from "./BtnCV.element";
import CV from '../../assets/CV.pdf'

const BtnCV = () => {
    const [cvDownload, setCvDownload] = useState(false)

    return (
        <>
            {cvDownload && <Download>Descarga mi CV</Download>}
           <ButtonCV onMouseOver={() => setCvDownload(true)} onMouseOut={() => setCvDownload(false)} href={CV} target='_blank' download><IconTheme/></ButtonCV> 
        </>
    )
}

export default BtnCV
