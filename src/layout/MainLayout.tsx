import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div className="flex pt-5 justify-end">
                <Link to='/login'>
                    <Button variant="outlined" className="">
                        Logout
                    </Button>
                </Link>
            </div>
            <Outlet />
        </>
    );
}

export default MainLayout;