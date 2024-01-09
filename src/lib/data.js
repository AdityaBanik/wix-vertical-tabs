
const testScheduleManagementData = [
    {
        title: 'Resources Availability Status',
        description: 'Explore the calendar view to track the schedule of resources, encompassing their current status, upcoming assignments, and their availability.',
        image: 'https://static.wixstatic.com/media/454d4b_818cb260ad9244f3b17c54b4b07d8fc1~mv2.png',
    },
    {
        title: 'Effortless Equipment Tracking',
        description: 'When checking out/checking in an equipment, record the equipment\'s location through a simple check-in and checkout procedure, ensuring nothing gets misplaced.',
        image: 'https://static.wixstatic.com/media/b8fe2a_e8f5e4ac47494febbd0f396c2b906a83~mv2.png',
    },
    {
        title: 'Equipment Reservation Calendar',
        description: 'Schedule and reserve equipment in a shared calendar for organized allocation and planning. You can schedule it for test requests/events.',
        image: 'https://static.wixstatic.com/media/454d4b_66eda8b1a25e46d9bee1622d73a6f0bd~mv2.png',
    },
    {
        title: 'Work Order Scheduling',
        description: 'Plan ad hoc maintenance or calibration schedules in advance and receive timely notifications, preventing unexpected breakdowns and reducing downtime.',
        image: 'https://static.wixstatic.com/media/b8fe2a_0fb5f4c16d6b4677ae3030308aa880d3~mv2.png',
    },
    {
        title: 'Preventive Maintenance Logs',
        description: 'Reminder for the upcoming calibration events and keeping all records of calibration/maintenance activities.',
        image: 'https://static.wixstatic.com/media/454d4b_e389328ab4654687847ef5ba64e4e3b1~mv2.png',
    },
    {
        title: 'Utilization Record',
        description: 'Easily assists Overall Equipment Effectiveness (OEE) and track usage records, empowering you to optimize and forecast your asset performance.',
        image: 'https://static.wixstatic.com/media/454d4b_7e85dafae2004557b0a4ba159035b9a6~mv2.png',
    },
    {
        title: 'Equipment Details Management',
        description: 'Centralize and update equipment data, including name, type, specs, purchase details, manufacturer, supplier, and warranty information for efficient management.',
        image: 'https://static.wixstatic.com/media/454d4b_6890023ebab84434bbb287d426bb8c6e~mv2.png',
    },
    {
        title: 'Clone and Archive Equipment',
        description: 'Effortlessly duplicate equipment profiles, simplify additions, and streamline retirement with preserved records and archives for efficient lifecycle management.',
        image: 'https://static.wixstatic.com/media/454d4b_784158ea37b84b37b16b81fe5dcc710a~mv2.png',
    },
    {
        title: 'Overdue Checked-Out Equipment',
        description: 'Receive alerts for overdue equipment checkouts, ensuring equipment is returned on time and avoiding unnecessary delays.',
        image: 'https://static.wixstatic.com/media/454d4b_9e1a320933fc4c498aecfe79fbaa6d17~mv2.png',
    },
    {
        title: 'Barcode Printing for Identification',
        description: 'Generate unique barcodes for each piece of equipment, simplifying identification and tracking of warranty, calibration, and other essential details.',
        image: 'https://static.wixstatic.com/media/454d4b_4e5677fce5484cbcb5870884e351e219~mv2.png',
    },
    {
        title: 'Other Features',
        description: 'Other features include',
        image: 'https://static.wixstatic.com/media/b8fe2a_c9114b3c038142c78d0a2f2ebf01a4ea~mv2.png',
    },
];


const issueMangementData = [
    {
        title: 'Create Issues from Test',
        description: 'You can create an incident from a test and skip entering all the meta data twice. Navigate through issue workflows with ease. The Progress Tracker empowers your teams to efficiently move through stages – from identifying the problem to its resolution, ensuring accountability at every step.',
        image: 'https://static.wixstatic.com/media/454d4b_2121622bbe544ff28cd800186d9401fb~mv2.png',
    },
    {
        title: 'Issue dashboard',
        description: 'You can visualize all the Test Incidents related to the team, individual team members, or to the individual or team the incidents are assigned to for resolution. Easy sort, filter and search functions to assist.',
        image: 'https://static.wixstatic.com/media/454d4b_f3cf27268e8746198601080f376c65f5~mv2.png',
    },
    {
        title: 'Categorize Issues',
        description: 'Classify issues effortlessly based on their source, ensuring a targeted approach to resolution. Prototype hiccups, test lab glitches, equipment malfunctions – Titan sees them all.',
        image: 'https://static.wixstatic.com/media/454d4b_34c7006545d1409b839bfb584001cfcd~mv2.png',
    },
    {
        title: 'Stay informed',
        description: 'Assign issue to the appropriate individual to judge and assess whether it is an incident or concern. Add watchers to incidents so email notifications for important updates are automatically sent to users, like being assigned a new incident or when status changes for an incident.',
        image: 'https://static.wixstatic.com/media/454d4b_4d66868a04d84cc796b04397a37a3089~mv2.png',
    },
    {
        title: 'Capture Root Cause and Add Countermeasures',
        description: 'Go beyond surface-level problems. Titan\'s root cause analysis dives deep, allowing you to capture the essence of issues. Craft effective countermeasures to fortify your processes against future challenges.',
        image: 'https://static.wixstatic.com/media/454d4b_c82b92e53f5b4df1a5e96334ccdba136~mv2.png',
    },
    {
        title: 'Prioritize Issues',
        description: 'Prioritize tasks seamlessly. From critical issues demanding immediate attention to low-priority concerns, Titan ensures that your team\'s efforts are strategically aligned with project goals.',
        image: 'https://static.wixstatic.com/media/454d4b_3c23c24dc3ac43b48aeb29a5bda621e7~mv2.png',
    },
    {
        title: 'Link Issues',
        description: 'Forge connections effortlessly. Link issues to relevant test requests, work orders, and equipment. This ensures no duplications occur by linking multiple similar or identical incidents together and keep the context in one place.',
        image: 'https://static.wixstatic.com/media/454d4b_9e5255cd0ecc4c0d9c0a87da24607c32~mv2.png',
    },
    {
        title: 'User Time Log',
        description: 'Capture time investments with precision. The User Time Log in Titan provides a visual and quantitative understanding of the resources invested in issue resolution, fostering efficiency.',
        image: 'https://static.wixstatic.com/media/454d4b_94080f50a15544fbb42f762e13084019~mv2.png',
    },
    {
        title: 'Issue Statistics',
        description: 'Analyze trends and performance. Titan\'s Issue Statistics feature provides insightful data on issue creation, closure, and open issues, empowering your teams with data-driven insights for strategic decision-making.',
        image: 'https://static.wixstatic.com/media/454d4b_8417fed590f04b0f9eb098c5fadd83c1~mv2.png',
    },
    {
        title: 'More Features',
        description: 'More features include',
        image: 'https://static.wixstatic.com/media/b8fe2a_18096b6ad804432ba47aeb5ef21b94c7~mv2.png',
    },
];



const data = issueMangementData;

export default data;