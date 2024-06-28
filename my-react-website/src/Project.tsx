import React from "react";
import "./Project.css";
import { Header } from "@components/Header/header";

const Project: React.FC = () => {
    return (
        <div className="app">
                <Header />
            <div className="project">
                <div className="heading">
                    <span className="my-2">
                        My
                    </span>
                    <span className="projects">
                        Projects
                    </span>
                </div>
                <div className="project-1">
                    <div className="image">
                        <div className="image-771">
                        </div>
                    </div>
                    <div className="details">
                        <div className="container">
                            01
                        </div>
                        <div className="crypto-screener-application">
                            Crypto Screener Application
                        </div>
                        <div className="im-evren-shah-lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500-swhen-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book">
                            I&#39;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                        </div>
                        <div className="read-more">
                            <img className="export" src="src/assets/vectors/Export5_x2.svg" />
                        </div>
                    </div>
                </div>
                <div className="project-2">
                    <div className="details-1">
                        <div className="container-1">
                            02
                        </div>
                        <div className="euphoria-ecommerce-apparels-website-template">
                            Euphoria - Ecommerce (Apparels) Website Template
                        </div>
                        <div className="im-evren-shah-lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500-swhen-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book-when-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book">
                            I&#39;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.<br />
                            when an unknown printer took a galley of type and scrambled it to specimen book.
                        </div>
                        <div className="read-more-1">
                            <img className="export-1" src="src/assets/vectors/Export9_x2.svg" />
                        </div>
                    </div>
                    <div className="image-1">
                        <div className="image-770">
                        </div>
                    </div>
                </div>
                <div className="project-3">
                    <div className="image-2">
                        <div className="image-7701">
                        </div>
                    </div>
                    <div className="details-2">
                        <div className="container-2">
                            03
                        </div>
                        <div className="blog-website-template">
                            Blog Website Template
                        </div>
                        <div className="im-evren-shah-lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industrys-standard-dummy-text-ever-since-the-1500-swhen-an-unknown-printer-took-agalley-of-type-and-scrambled-it-to-specimen-book-1">
                            I&#39;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                        </div>
                        <div className="read-more-2">
                            <img className="export-2" src="src/assets/vectors/Export13_x2.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Project;