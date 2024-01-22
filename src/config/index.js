import {LayoutBasic} from '../layouts';
import { 
    Home, 
    Error404, 
} from '../pages';

//Routes
const routesWebsite = [
    {
        path: '/',
        exact: true,
        layout: LayoutBasic,
        render: <Home />,
    },
    {
        path: '*',
        exact: true,
        layout: LayoutBasic,
        render: <Error404/>,
    },
]
export { routesWebsite }