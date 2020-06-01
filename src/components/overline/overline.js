/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * This component applies an "overline" style to all children, and children are delimited with bubble. 
 */

// Core dependencies
import React from "react";

// Styles
import compStyles from "./overline.module.css";

let classNames = require("classnames");

class Overline extends React.Component {

    render() {
        const {headline, children} = this.props;
        return (
            <div className={classNames(compStyles.overline, {[compStyles.heading]: headline})}>
                {children}
            </div>
        );
    }
}

export default Overline;
