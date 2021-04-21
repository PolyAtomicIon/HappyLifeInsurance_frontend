// import NotFound from '../components/NotFound';
import ProfilePage from '../views/ProfilePage';
import TimeTrackerPage from '../views/TimeTrackerPage';
import FlexStatusPage from '../views/FlexStatusPage';
import UserPermissions from '../views/UserPermissions';
import Login from '../views/Login';
import Register from '../views/Register';

export default [{
        path: '*',
        component: TimeTrackerPage
    },
    {
        path: '/',
        component: TimeTrackerPage,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
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