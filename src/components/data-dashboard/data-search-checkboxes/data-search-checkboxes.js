/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - data search checkboxes component.
 * Wrapper component handling checkbox component.
 */

// Core dependencies
import React, {useContext} from "react";

// App dependencies
import Checkboxes from "../../checkboxes/checkboxes";
import ContextDashboardFilter from "../context-dashboard-filter/context-dashboard-filter";

function DataSearchCheckboxes() {

    const {checkboxGroups} = useContext(ContextDashboardFilter);

    return (
        checkboxGroups.map((checkboxGroup, c) =>
            <Checkboxes key={c}
                        checkboxes={checkboxGroup.checkboxes}
                        groupName={checkboxGroup.groupName}/>)
    )
}

export default DataSearchCheckboxes;
