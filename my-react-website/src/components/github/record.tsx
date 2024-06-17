import React from 'react';
import ActivityCalendar from 'react-github-calendar';


interface Activity {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }

const selectLastHalfYear = (contributions: Activity[]) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter((activity: Activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  

const EmbededGraph: React.FC = () => {
    return (
        <ActivityCalendar
        username="JunhaoLi-Nic" 
        transformData={selectLastHalfYear} 
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
              totalCount: '{{count}} activities in last 6 months',
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
              "#f0f0f0",
              "#c4edde",
              "#7ac7c4",
              "#f73859",
              "#384259"
            ],
            "dark": [
              "hsl(0, 0%, 22%)",
              "#4D455D",
              "#7DB9B6",
              "#F5E9CF",
              "#E96479"
            ]
          }}
        />
    );
};

export default EmbededGraph;