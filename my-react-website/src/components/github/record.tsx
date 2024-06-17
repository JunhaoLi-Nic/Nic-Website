import React, { useEffect } from 'react';
import ActivityCalendar from 'react-github-calendar';

interface Activity {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}


const EmbededGraph: React.FC = () => {
    return (
        <ActivityCalendar
        username="JunhaoLi-Nic" 
        year = {2024}
        labels={{
            months: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              weekdays: [
                'Sun', // Sunday first!
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
              ],
              totalCount: '{{count}} activities in {{year}}',
              legend: {
                less: 'Less',
                more: 'More',
              },
        }}

        colorScheme = 'light'
        blockSize={14}
        blockRadius={7}
        blockMargin={5}
        fontSize={20}
        theme={{
            "light": [
              "hsl(0, 0%, 92%)",
              "rebeccapurple"
            ],
            "dark": [
              "hsl(0, 0%, 22%)",
              "hsl(225,92%,77%)"
            ]
          }}
        />
    );
};

export default EmbededGraph;
