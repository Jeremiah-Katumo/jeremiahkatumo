import React from "react";
import { useState } from 'react'
import LoadingIcon from '@mui/icons-material/HourglassEmpty';
import { Button } from "react-bootstrap";

export default Button = ({ icon }) => {
    const [isHovered, setIsHovered] = useState(false)

    const defaultIconProps = {
        size: size === 'large' ? 'large' : 'small',
        color: appearance === 'primary' ? 'black' : 'orange',
    };

    const iconElement = icon(defaultIconProps)

    return (
        <>
        <Button>{iconElement} Submit</Button>    
        </>
    );
}