import "@css/Skills.css";
import React from "react";

const Skills: React.FC = () => {
    return (
        <div className="app">
            <div className="skills">
                <div className="row">
                    <span className="my">
                        My Professional
                    </span>
                    <span className="skills-1">
                        Skillset
                    </span>
                </div>
                <div className="row-1">
                    <div className="column">
                        <div className="skills-2">
                            <div className="icon-git">
                                <img className="vector-41" src="src/assets/vectors/Vector26_x2.svg" />
                            </div>
                            <span className="javascript">
                                Git
                            </span>
                        </div>
                        <div className="skills-3">
                            <div className="icon-javscript">
                                <img className="vector-43" src="src/assets/vectors/Vector4_x2.svg" />
                            </div>
                            <span className="javascript-1">
                                javascript
                            </span>
                        </div>
                        <div className="skills-4">
                            <img className="icon-react" src="src/assets/vectors/IconReact1_x2.svg" />
                            <span className="javascript-2">
                                React
                            </span>
                        </div>
                        <div className="skills-5">
                            <div className="logosnodejs">
                                <img className="group-24" src="src/assets/vectors/Group7_x2.svg" />
                            </div>
                            <span className="javascript-3">
                                Node.Js
                            </span>
                        </div>
                        <div className="skills-6">
                            <div className="icon-docker">
                                <img className="vector-52" src="src/assets/vectors/Vector84_x2.svg" />
                            </div>
                            <span className="javascript-4">
                                Docker
                            </span>
                        </div>
                    </div>
                    <div className="column-1">
                        <div className="skills-10">
                            <div className="icon-nest">
                                <img className="vector-56" src="src/assets/vectors/Vector57_x2.svg" />
                            </div>
                            <span className="javascript-8">
                                Jenkins
                            </span>
                        </div>
                        <div className="skills-7">
                            <div className="icon-git-1">
                                <img className="vector-53" src="src/assets/vectors/Vector19_x2.svg" />
                            </div>
                            <span className="javascript-5">
                                AWS
                            </span>
                        </div>
                        <div className="skills-11">
                            <img className="icon-storybook" src="src/assets/vectors/IconStorybook_x2.svg" />
                            <span className="javascript-9">
                                Kubernetes
                            </span>
                        </div>
                        <div className="skills-8">
                            <div className="icon-socket">
                                <img className="vector-54" src="src/assets/vectors/Vector49_x2.svg" />
                            </div>
                            <span className="javascript-6">
                                MySQL
                            </span>
                        </div>
                        <div className="skills-9">
                            <div className="icon-sass">
                                <img className="vector-55" src="src/assets/vectors/Vector27_x2.svg" />
                            </div>
                            <span className="javascript-7">
                                Python
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;