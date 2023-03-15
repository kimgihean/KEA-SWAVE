import React from 'react';

import { Container, Card, Col, Button, Row } from 'react-bootstrap';
import img1 from '../image/logo_black.png';

import { styled } from '@mui/material/styles';
import CardMain from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import profile1 from '../image/강준희.jpg';
import profile2 from '../image/김기현.jpg';
import profile3 from '../image/김성국.jpg';
import profile4 from '../image/이승섭.jpg';
import profile5 from '../image/전강훈.jpg';
import profile6 from '../image/함건욱.jpg';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// const [expanded, setExpanded] = React.useState(false);

// const handleExpandClick = () => {
//   setExpanded(!expanded);
// };

function Teammate(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Container className='p-4'>
      <Row>

        <div className='ComponentBox'>
          <CardMain sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {props.icon}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={props.name}
              subheader="March 8, 2023"
            />
            <CardMedia
              component="img"
              height="400"
              image={props.img}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              {props.info.split("\n").map((txt) => (<>{txt}<br/></>))}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {props.desc.split("\n").map((txt) => (<>{txt}<br/></>))}
                </Typography>
              </CardContent>
            </Collapse>
          </CardMain>
        </div>

      </Row>
    </Container>
  );
}

function App() {
  const teammates1 = [
    { number: "201835610", icon: "K", name: "강준희", info: "좋은 프로그램에 좋은 사람들과 함께 해서 영광입니다.\n열심히 하겠습니다!", desc: "About Me\n201835610 컴퓨터공학과\nJava ,Python ,JS ,C , C++", img: profile1 },
    { number: "201732505", icon: "K", name: "김기현", info: "협업과 소통을 즐기는 개발자가 되겠습니다.", desc: "About Me\n201732506 글로벌경영학사, 소프트웨어공학사\nJava, SpringBoot, JPA", img: profile2 },
    { number: "201835422", icon: "K", name: "김성국", info: "한학기 열심히 하겠습니다!	", desc: "About Me\n201835422 소프트웨어학과\nC Java Python", img: profile3 },
  ];

  const teammates2 = [
    { number: "201835494", icon: "L", name: "이승섭", info: "팀에 도움이 될 수 있도록 열심히 하겠습니다. ", desc: "About Me\n201835494 소프트웨어학과\nC Python", img: profile4 },
    { number: "201835516", icon: "J", name: "전강훈", info: "프로젝트에 적극적으로 기여하고 함께 성장하는 팀원이 되겠습니다. ", desc: "About Me\n201835516 소프트웨어학과\nC Java Python C#", img: profile5 },
    { number: "201835546", icon: "H", name: "함건욱", info: "열심히 배워서 성장하겠습니다!!.", desc: "About Me\n201835546 소프트웨어학과\nC Java Python", img: profile6 },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      columnCount: "3"
    }}>
      <div>
        {teammates1.map((student) => <Teammate name={student.name} icon={student.icon} number={student.number} info={student.info} desc={student.desc} img={student.img} />)}
      </div>
      <div>
        {teammates2.map((student) => <Teammate name={student.name} icon={student.icon} number={student.number} info={student.info} desc={student.desc} img={student.img} />)}
      </div>
    </div>
  );
}

export default App;  