/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - markdown component.
 */

// Core dependencies
import React from "react";
import rehypeReact from "rehype-react";

// App dependencies
import DataDashboard from "../data-dashboard/data-dashboard";
import EventHero from "../event-hero/event-hero";
import Events from "../events/events";
import FigureCaption from "../figure-caption/figure-caption";
import Hero from "../hero/hero";
import News from "../news/news";
import Platforms from "../platforms/platforms";
import StyleGuideColorPalette from "../style-guide-color-palette/style-guide-color-palette";
import StyleGuideDownloadLogo from "../style-guide-download-logo/style-guide-download-logo";
import StyleGuideTypography from "../style-guide-typography/style-guide-typography";
import StyleGuideTypographyExample from "../style-guide-typography-example/style-guide-typography-example";
import Tools from "../tools/tools";
import Workspaces from "../workspaces/workspaces";

// Styles
import compStyles from "./markdown.module.css";

let classNames = require("classnames");

class Markdown extends React.Component {

    componentDidMount() {

        this.addClassList();
    }

    addClassList = () => {

        /* Grab the content element. */
        const contentEl = document.querySelector('[id^="content"]');

        if ( !contentEl ) {
            return;
        }

        /* Grab <span> that wraps the images for medium-zoom capability (therefore will exclude gif images). */
        const imagesWithZoomEl = Array.from(contentEl.getElementsByClassName("gatsby-resp-image-wrapper"));

        /* Grab <div> that wraps videos. */
        const videosEl = Array.from(contentEl.getElementsByClassName("gatsby-resp-iframe-wrapper"));

        /* Add class name. */
        imagesWithZoomEl.map(imageEl => imageEl.classList.add(compStyles.zoomIcon));
        videosEl.map(videoEl => videoEl.classList.add(compStyles.video));
    };

    render() {
        const {children, className} = this.props;
        const renderAst = new rehypeReact({
            createElement: React.createElement,
            components: {
                "data-dashboard": DataDashboard,
                "event-hero": EventHero,
                "events": Events,
                "figure-caption": FigureCaption,
                "hero": Hero,
                "news": News,
                "platforms": Platforms,
                "style-guide-color-palette": StyleGuideColorPalette,
                "style-guide-download-logo": StyleGuideDownloadLogo,
                "style-guide-typography": StyleGuideTypography,
                "style-guide-typography-example": StyleGuideTypographyExample,
                "tools": Tools,
                "workspaces": Workspaces
            }
        }).Compiler;
        const identifier = Date.now();
        const markdownClassNames = classNames(className, compStyles.content);
        return (
            <div id={`content${identifier}`} className={markdownClassNames}>{renderAst(children)}</div>
        );
    }
}

export default Markdown;
