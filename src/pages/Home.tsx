import { useLocation } from "react-router-dom";

const Home = () => {

    const location = useLocation();
    console.log(location.state.user.email);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <a className="text-[56px]">Hello</a>
            <a className="text-[28px]">{location.state.user.email}</a>
        </div>
    )
}

export default Home;