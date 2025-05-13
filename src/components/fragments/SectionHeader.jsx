import React from "react";
// import { useState } from "react";
import '../../styles/assets/css/service.css'

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

export default SectionHeader;