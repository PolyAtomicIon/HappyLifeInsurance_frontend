// import NotFound from '../components/NotFound';
import ProfilePage from '../views/ProfilePage';
import TimeTrackerPage from '../views/TimeTrackerPage';
import FlexStatusPage from '../views/FlexStatusPage';
import UserPermissions from '../views/UserPermissions';

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
        children: [{
                path: 'flex-status',
                name: 'flex-status',
                component: FlexStatusPage,
            },
            {
                path: 'permissions',
                name: 'permissions',
                component: UserPermissions
            },
        ],
    },
    {
        path: '/time-tracker',
        name: 'time-tracker',
        component: TimeTrackerPage,
    },
]