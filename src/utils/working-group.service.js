/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * Basic service for working groups.
 */

// App dependencies
import {WorkingGroupsStaticQuery} from "../hooks/working-groups-query";

// Template variables
const groups = {
    "bioconductor": "Bioconductor",
    "data_processing": "Data processing",
    "dockstore": "Dockstore",
    "galaxy": "Galaxy",
    "gen3": "Gen3",
    "pheno": "Pheno/data model",
    "portal": "Portal",
    "terra": "Terra"
};

/**
 * Returns the people within the specified working group.
 *
 * @param type
 * @returns {Array}
 */
export function getWorkingGroupByType(type) {

    if ( !type ) {

        return [];
    }

    const workingGroups = WorkingGroupsStaticQuery();

    /* Find the working group, specified by working group type. */
    const workingGroup = workingGroups.find(group => group.fieldValue === groups[type]);

    if ( !workingGroup ) {

        return [];
    }

    /* Return the people. */
    return workingGroup.edges.map(e => e.node);
}
