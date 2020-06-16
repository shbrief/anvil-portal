/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - working group component.
 *
 * This component may be used within markdown.
 * To render use: <working-group group="propValue"></working-group>.
 * The component accepts a single prop "group" of one of the following values:
 * "bioconductor", "data_processing", "dockstore", "galaxy", "gen3", "pheno", "portal", or "terra".
 *
 */

// Core dependencies
import React from "react";

// App dependencies
import * as WorkingGroupService from "../../utils/working-group.service";

class WorkingGroup extends React.Component {

    render() {
        const {people} = this.props;

        const Person = (props) => {

            const {person} = props,
                {location, name} = person || {};

            return (
                <li>
                    <span>{name}</span>
                    {location ? <span> ({location})</span> : null}
                </li>
            )

        };

        return (
            <ul>
                {people.map((person, p) => <Person key={p} person={person}/>)}
            </ul>
        );
    }
}

export default (props) => {

    const groupType = props.group;
    const people = WorkingGroupService.getWorkingGroupByType(groupType);

    return (
        people.length ? <WorkingGroup people={people}/> : null
    )
}
