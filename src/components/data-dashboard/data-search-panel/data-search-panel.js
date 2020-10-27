/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - data search panel component.
 */

// Core dependencies
import React from "react";

// Styles
import compStyles from "./data-search-panel.module.css";

let classNames = require("classnames");

function DataSearchPanel(props) {

    const {children, error} = props;
    const classNamesPanel = classNames({[compStyles.error]: error}, compStyles.panel);

    return (
        <div className={classNamesPanel}>{children}</div>
    )
}

export default DataSearchPanel;
