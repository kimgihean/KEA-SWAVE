import { Outlet, Link } from "react-router-dom";

const navStyle = {
    width: "100%",
    height: "60px",
    display: "flex"
};
const divStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const Layout = () => {
    return (
        <>
        <div>
            <h1 align="center">SWAVE</h1>
        </div>
        <div>
            <nav style={navStyle}>
                <div style={divStyle}>
                    <Link to="/">Home</Link>
                </div>
                <div style={divStyle}>
                    <Link to="/teammate">Teammate</Link>
                </div>
                <div style={divStyle}>
                    <Link to="/vision">Vision</Link>
                </div>
                <div style={divStyle}>
                    <Link to="/custom">Custom</Link>
                </div>
            </nav >
            <Outlet />
        </div>
        </>
    );
}

export default Layout;