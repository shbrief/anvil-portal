/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL footer component.
 */

// Core dependencies
import {Link} from "gatsby";
import React from "react";

// Images
import gitHub from "../../../images/logo-git-hub.png";
import hhs from "../../../images/logo-hhs.svg";
import nhgri from "../../../images/logo-nhgri.svg";
import nih from "../../../images/logo-nih.svg";
import twitter from "../../../images/logo-twitter.png";
import usaGov from "../../../images/logo-usa-gov.png";

// Styles
import compStyles from "./footer.module.css";
import globalStyles from "../../styles/global.module.css";

let classNames = require("classnames");

class Footer extends React.Component {

    render() {
        const {homePage} = this.props;
        return (
            <div className={classNames(compStyles.footer, {[compStyles.centre]: homePage})}>
                <div className={classNames(globalStyles.container, compStyles.container, globalStyles.flex)}>
                    <div className={compStyles.logos}>
                        <div><img className={compStyles.nhgri} src={nhgri} alt="nhgri"/></div>
                        <div>
                            <img className={compStyles.nih} src={nih} alt="nih"/>
                            <img className={compStyles.hhs} src={hhs} alt="hhs"/>
                            <img className={compStyles.usaGov} src={usaGov} alt="usa.gov"/>
                        </div>
                    </div>
                    <div className={classNames(compStyles.directory, globalStyles.flex)}>
                        <div className={compStyles.content}>
                            <div>
                                <div>
                                    <Link to="/about">About</Link>
                                    <ul>
                                        <li><Link to="/about/team">Team</Link></li>
                                        <li><Link to="/about/working-groups">Working Groups</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <Link to="/data">Data</Link>
                                    <ul>
                                        <li><Link to="/data/requesting-data-access">Requesting <span>Data</span> Access</Link></li>
                                        <li><Link to="/data/bringing-your-own-data">Bringing <span>Your Own</span> Data</Link></li>
                                        <li><Link to="/data/data-submission">Submitting <span>Consortium</span> Data</Link></li>
                                        <li><Link to="/data/data-access">Data Access Controls</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <Link to="/training">Training</Link>
                                    <ul>
                                        <li><Link to="/training/guides">Guides</Link></li>
                                        <li><Link to="/training/featured-workspaces">Featured Workspaces</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Link to="/tools">Tools</Link>
                                <Link to="/news">News</Link>
                                <Link to="/events">Events</Link>
                            </div>
                            <div>
                                <Link to="/faq">FAQ</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                            <div>
                                <Link to="/help">Help</Link>
                                <Link to="/privacy">Privacy</Link>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(globalStyles.flex, compStyles.socials)}>
                        <a href="https://twitter.com/useAnVIL" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter"/></a>
                        <a href="https://gitter.im/anvil-project/Lobby" target="_blank" rel="noopener noreferrer">
                            <i className="material-icons-outlined">forum</i></a>
                        <a href="https://github.com/anvilproject" target="_blank" rel="noopener noreferrer">
                            <img src={gitHub} alt="gitHub"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
