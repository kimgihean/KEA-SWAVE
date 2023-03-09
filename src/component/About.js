import { useParams } from "react-router-dom";
import classes from './css/About.module.css'
import logo from '../image/logo_black.png';

import profile1 from '../image/강준희.jpg';
import profile2 from '../image/김기현.jpg';
import profile3 from '../image/김기현.jpg';
import profile4 from '../image/이승섭.jpg';
import profile5 from '../image/전강훈.jpg';
import profile6 from '../image/함건욱.jpg';
const About = () => { 
    const { member } = useParams();
    const teammates=[
        {number:"201",name:"강준희",info:"**학번 ~과 강준희입니다.",desc:"1",img:profile1},
        {number:"201",name:"김기현",info:"**학번 ~과 김기현입니다.",desc:"2",img:profile2},
        {number:"201",name:"김성국",info:"**학번 ~과 김성국입니다.",desc:"3",img:profile3},
        {number:"201835494",name:"이승섭",info:"18학번 소프트웨어학과 이승섭입니다.",desc:"4",img:profile4},
        {number:"201",name:"전강훈",info:"**학번 ~과 전광훈입니다.",desc:"5",img:profile5},
        {number:"201",name:"함건욱",info:"**학번 ~과 함건욱입니다.",desc:"6",img:profile6},
      ];
    return ( 
        <div className={classes.AboutMe} id="about">
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>{teammates[member-1].name}</h2>
                    <p>
                       {teammates[member-1].info}    
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Profile} src={teammates[member-1].img} alt="profile"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;