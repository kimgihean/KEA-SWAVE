import logo_white from '../img/logoWhite.png';
import logo_black from '../img/logoBlack.png';
import styled from 'styled-components';

const Img = styled.img`
    margin: 20px 20px 20px 20px;
`;

const Home = () => {
    return (
    <div>
        <h1 align="center">Logo</h1>
        <div align="center">
            <Img size = "50%" className="Logo" alt="logo_white" src={logo_white}/>
            <Img size = "50%" className="Logo" alt="logo_black" src={logo_black}/>
        </div>
    </div>
    );
};

export default Home;