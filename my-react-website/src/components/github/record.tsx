import React, { useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

const EmbededGraph: React.FC = () => {
    return (
        <GitHubCalendar username="JunhaoLi-Nic" year = 'last'/>
    );
};

export default EmbededGraph;
