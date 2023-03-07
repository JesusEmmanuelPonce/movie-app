import { Outlet } from 'react-router-dom';

import CustomNavbar from 'components/CustomNavbar';

const AppLayout = () => {
    return (
        <main>
            <CustomNavbar />
            <Outlet />
        </main>
    )
}

export default AppLayout