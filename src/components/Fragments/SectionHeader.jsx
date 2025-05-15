import React from "react";
// import { useState } from "react";
import { Container } from "react-bootstrap";
import '../../styles/assets/css/fragments/sectionHeader.css'

const SectionHeader = ({ data }) => {
    // const [isParagraph, setIsParagraph] = useState(true);

    return (
        <>
            <div class="section-header">
                <h2 class="section-title">{data[0].sectionHeading}</h2>
                <p>{data[0].sectionText}</p>
            </div>
        </>
    )
}

export const SectionHeaderDouble = ({ data }) => {

    return (
        <>
            <div className='heading-section'>
                <h1 className="big big-2">{data.sectionHeading}</h1>
                <h2 className='section-title mb-4'>{data.sectionHeadingTwo}</h2>
                <p>{data.sectionText}</p>
            </div>
        </>
    )
}

export default SectionHeader;