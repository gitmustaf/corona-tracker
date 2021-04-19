import React from "react";

const HeadingInfo = (props) => {
    return(
        <>
            <div className="Align-Left Sidebar-Tags mt-2">{props.headingText}</div>
            <h6 className="Text-Bold Spacing-Zero text-danger">{parseInt(props.headingData).toLocaleString()}</h6> 
        </>
    )
}

export default HeadingInfo;