import React, { useEffect } from 'react';
import 'github-calendar/dist/github-calendar-responsive.css'; // Import the CSS directly
import 'github-calendar'; 

const EmbededGraph: React.FC = () => {
    useEffect(() => {
        // Dynamically import the GitHubCalendar library to ensure it's loaded when needed
        import('github-calendar').then((GitHubCalendar) => {
            GitHubCalendar.default(".calendar", "your-username", {
                responsive: true,
                proxy: (username: string) => fetch(`https://your-proxy.com/github?user=${username}`).then(r => r.text())
            });
        });
    }, []);

    return (
        <div className="calendar">Loading the data just for you.</div>
    );
};

export default EmbededGraph;
