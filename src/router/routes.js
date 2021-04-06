// import NotFound from '../components/NotFound';
import ProfilePage from '../views/ProfilePage';
import TimeTrackerPage from '../views/TimeTrackerPage';
import FlexStatusPage from '../views/FlexStatusPage';

export default [{
        path: '*',
        component: TimeTrackerPage
    },
    {
        path: '/',
        component: TimeTrackerPage,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
    },
    {
        path: '/flex-status',
        name: 'flex-status',
        component: FlexStatusPage,
    },
    {
        path: '/time-tracker',
        name: 'time-tracker',
        component: TimeTrackerPage,
    },
]