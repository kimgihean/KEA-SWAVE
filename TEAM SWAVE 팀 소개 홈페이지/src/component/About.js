import { useParams } from "react-router-dom";
import classes from './css/About.module.css'
import logo from '../image/logo_black.png';

import profile1 from '../image/강준희.jpg';
import profile2 from '../image/김기현.jpg';
import profile3 from '../image/김성국.jpg';
import profile4 from '../image/이승섭.jpg';
import profile5 from '../image/전강훈.jpg';
import profile6 from '../image/함건욱.jpg';
const About = () => { 
    const { member } = useParams();
    const teammates=[
        {number:"201835610",name:"강준희",info:"18학번 컴퓨터공학과 강준희입니다.",desc:"KEA에 참여하여 데이터 관리기술, 차세대 챗봇, 시스템 아키택처를 수강하고 있습니다.\n한 학기동안 열심히 배워 시스템 아키텍처가 되겠습니다.",img:profile1},
        {number:"201732505",name:"김기현",info:"글로벌경영학사, 소프트웨어공학사 김기현입니다.",desc:"KEA 에서 많은 기술을 배워서 사회가 원하는 소프트웨어 엔지니어가 되겠습니다.\nrlgus2738@naver.com\nhttps://github.com/kimgihean",img:profile2},
        {number:"201835422",name:"김성국",info:"18학번 소프트웨어학과 김성국입니다.",desc:"한학기 열심히 하겠습니다!\nSystem Architecture/Algorithm Research\nkjk7212@gmail.com\nhttps://github.com/kjk7212",img:profile3},
        {number:"201835494",name:"이승섭",info:"18학번 소프트웨어학과 이승섭입니다.",desc:"데이터관리기술, 차세대 챗봇, 시스템아키텍처를 수강하고 있습니다.\n열심히 하겠습니다.\ndltmd0116@gachon.ac.kr",img:profile4},
        {number:"201835516",name:"전강훈",info:"18학번 소프트웨어학과 전광훈입니다.",desc:"프로젝트에 적극적으로 기여하고 함께 성장하는 팀원이 되겠습니다.\nartisheep@naver.com\nhttps://github.com/artisheep ",img:profile5},
        {number:"201835546",name:"함건욱",info:"18학번 소프트웨어학과 함건욱입니다.",desc:"열심히 배워서 성장하겠습니다!!\ntomy8964@naver.com\nhttps://github.com/tomy8964",img:profile6},
      ];
    return ( 
        <div className={classes.AboutMe} id="about">
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>{teammates[member-1].name}</h2>
                    <p>
                       {teammates[member-1].info} 
                    </p>
                    
                    <p>
                        {teammates[member-1].desc.split("\n").map((txt) => (<>{txt}<br/></>))}
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