import React from "react";

const BulletInfo = (props) => {
    return(
        <div className="row ml-0 pt-1" >
            <div className="circle column p-0" style={{background:props.bulletColor, marginTop:"2%"}}></div>
            <div className="column ml-1 col-5 mt-0 pt-0" style={{fontSize: "14px"}}> 
                {props.infoText} 
            </div>
                <div className="column col-5">{parseInt(props.infoData).toLocaleString()}</div>
        </div>
    )
}

export default BulletInfo;