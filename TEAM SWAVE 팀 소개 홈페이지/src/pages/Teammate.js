import team from '../user.png';

function clicked (index, e){
    e.preventDefault();
    alert(index);
};

function PrintPerson(props){
    return (
        <div style={conStyle}>
            <img style={imgStyle} onClick={(e) => clicked(props.person.index,e)} className="Team" alt="team" src={props.person.img}></img>
            <p>{props.person.name}</p>
        </div>
    );
}

const divStyle = {
    width: "100%",
    height: "60%",
    display: "flex",
    align:"center",
    justifyContent: "space-between",
};

const conStyle = {
    width: "16%",
    display: "flex",
    flexDirection:"column",
    alignItems: "center"
};

const imgStyle = {
    width: "100%",
    alignItems: "center"
};

const info = [
    {index :0 , img: team, name:"강준희"},
    {index :1 , img: team, name:"김기현"},
    {index :2 , img: team, name:"김성국"},
    {index :3 , img: team, name:"이승섭"},
    {index :4 , img: team, name:"전강훈"},
    {index :5 , img: team, name:"함건욱"}];

const Teammate = () =>{
    return (
        <>
        <h1 align="center">Teammate</h1>
        <div style={divStyle}>
            {info.map((person) => <PrintPerson person = {person}/>)}
        </div>
        </>
    );
};

export default Teammate;