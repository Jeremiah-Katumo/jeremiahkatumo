import React from "react";



const ServiceCard = ({ data }) => {
    // const [isIcon, setIsIcon] = useState(true)
    // const [isHeading, setIsHeading] = useState(true)


    return (
        <>
            {data.map((item, idx) => (
                <div key={idx} class="service-card">
                    <a href="#" class="services-1">
                        <span class="icon">
                            <i class={item.icon}></i>
                        </span>
                        <div class="desc">
                            <h3 class="mb-5">{item.heading}</h3>
                        </div>
                        {/* <p>item.section</p> */}
                    </a>
                </div>
            ))}
        </>
    )
}

export default ServiceCard