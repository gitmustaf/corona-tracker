import React from "react";

const BulletInfo = (props) => {
    return(
        <div className="row ml-0 pt-2" >
            <div className="circle column p-0" style={{background:props.bulletColor, marginTop:"2%"}}></div>
            <div className="column ml-2 mt-0 pt-0" style={{fontSize: "14px"}}> {props.infoText} 
                <div className="ml-5" style={{float:"right", textAlign:"right !important"}}>{parseInt(props.infoData).toLocaleString()}</div>
            </div>
        </div>
    )
}

export default BulletInfo;