import ham from '../img/logoWhite.png';
import kim from '../img/logoBlack.png';
import styled from 'styled-components';

const Div = styled.div`
float:left;
margin: 5px 5px 5px 5px;
`;

const Img = styled.img`
`;

const Li = styled.li`
margin: 5px 5px 5px 5px;
`;

const Ul = styled.ul`
margin: 55px 5px 5px 5px;
font-size:20px;
list-style-type:none;
`;

const Members = () => {
    const MembersInfo = [
        {id:201835546, img: ham, name: 'Ham Geonwook', contact:'tomy8964@naver.com', info: 'Graceful design'},
        {id:201835546, img: kim, name: 'Kim     ', contact:'tomy8964@naver.com', info: 'Functional of hign level'},
        {id:201835546, img: ham, name: 'Audi    ', contact:'tomy8964@naver.com', info: 'Car'},
        {id:201835546, img: ham, name: 'K5      ', contact:'tomy8964@naver.com', info: 'Car'},
        {id:201835546, img: ham, name: 'GENESIS ', contact:'tomy8964@naver.com', info: 'Popular Car'}];
    
    return (
    <div>
    <h1 align="center">Members</h1>
    <ul>
        {MembersInfo.map((member)=> <Member key={member.id} id={member.id} img={member.img} name={member.name} contact={member.contact}  info={member.info}/>)}
    </ul>
    </div>
    );
    
};

export default Members;

function Member(props) {
    return (
    <Div>
        <Div>
           <Img alt="face" width="50%" src={props.img}></Img>
        </Div>
        <Div>
           <Ul><Li>Student ID: {props.id}</Li> <Li>Name: {props.name}</Li> <Li>Contact: {props.contact}</Li> <Li>Info: {props.info}</Li></Ul>
        </Div>
        <hr></hr>
    </Div>
    );
}
