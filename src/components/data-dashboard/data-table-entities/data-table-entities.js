/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - data table entities component.
 */

// Core dependencies
import React, {useContext} from "react";

// App dependencies
import ContextDashboardFilter from "../context-dashboard-filter/context-dashboard-filter";
import DataTable from "../data-table/data-table";

// Styles
import compStyles from "./data-table-entities.module.css";

function DataTableEntities(props) {

    /* Grab the entities. */
    const {entities, tableHeadersEntities} = useContext(ContextDashboardFilter);
    const showEntities = entities.length > 0;

    return (
        showEntities ?
            <>
            <h2 className={compStyles.headerNoBorder}>Search Results</h2>
            <DataTable studies tableHeaders={tableHeadersEntities} tableRows={entities} {...props}/>
            </> : null
    );
}

export default DataTableEntities;
