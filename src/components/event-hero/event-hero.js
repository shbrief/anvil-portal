/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - event hero component.
 */

// Core dependencies
import React from "react";

// App dependencies
import FrontmatterContext from "../context/frontmatter-context";
import Overline from "../overline/overline";
import * as AnchorService from "../../utils/anchor.service";

// Styles
import compStyles from "./event-hero.module.css";let classNames = require("classnames");

class EventHero extends React.Component {

    static contextType = FrontmatterContext;

    render() {
        const frontmatter = this.context,
            {conference, date, eventType, location, registration, time, title} = frontmatter;
        const locationTokens = (location || "").split("/");

        const identifier = AnchorService.buildAnchorIdentifier(title);
        return (
            <div className={compStyles.eventHero}>
                <Overline headline>
                    <span>{conference}</span>
                    <span>{eventType}</span>
                </Overline>
                <div className={compStyles.eventMeta}>
                    <div>
                        <h5>Date</h5>
                        <p>{date}</p>
                    </div>
                    {time ?
                        <div>
                            <h5>Time</h5>
                            <p>{time ? time : null}</p>
                        </div> :
                        null
                    }
                    <div>
                        <h5>Location</h5>
                        <p>
                            {locationTokens.map((value, index) => {
                                return <span key={index}>{value}</span>
                            })}
                        </p>
                    </div>
                    {registration ? 
                        <div>
                            <h5>Registration</h5>
                            <p><a href={registration}>{registration}</a></p>
                        </div> :
                    null}
                </div>
                <h1 id={identifier}>{title}</h1>
            </div>
        );
    }
}

export default EventHero;
