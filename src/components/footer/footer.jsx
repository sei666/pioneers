import React, { Fragment } from "react";
import './footer.scss';


export const Footer = React.memo( function Footer(props){

    return(
        <Fragment>
               <div className="footer">
                    <div className="footer__img"></div>
                    <div className="footer__text"> {new Date().getFullYear()} © Pioneers Education. Classes last updated from Sloan: 01/01/21 at 12:30PM.</div>
                    <div className="footer__text">Feel free Contact Support for help request.</div>
                </div>
        </Fragment>
    )
});