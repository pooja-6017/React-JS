import React, { useEffect, useState } from "react";

const PageNotFound = () => {

    useEffect(async () => {
        require('./404.css')
    }, []);
    return (
        <>
            <div id="wrapper" className="row">
                <img src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png" />
                {/* <div id="info" style={{ right: 0 ,textAlign: "center" }} className="col-lg-6 order-1 order-lg-2 text-dark" >
                <h3>This page could not be found</h3>
            </div> */}
            </div >
        </>
    )
}

export default PageNotFound