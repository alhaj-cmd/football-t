import React from 'react';
//import Bootstrap
import {Button,Card}from 'react-bootstrap';
//fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Team = (props) => {
 

  //api data
    const{idTeam,strTeam,strTeamLogo,strStadium} = props.team;
   
    // const history = useHistory();
    // const handleClick = () => {
    //   history.push(`/team/$(idTeam)`)
    // }

    return (
      //card title
 <Card className='m-2 text-center' style={{ width: '15rem' }}>
  <Card.Img className='img-fluid m-50 mx-auto' variant="top" src={strTeamLogo}/>
  <Card.Body>
    <Card.Title>{strTeam}</Card.Title>
    <Card.Text>
    <p>Id:{idTeam}</p> 
    <p>Stadium:{strStadium}</p>
    </Card.Text>
    {/* <form method="get" action="/Deails"> */}
  

    <Button variant="dark"  type="submit"> <Link to={`/Team/${idTeam}`}> Explore  <FontAwesomeIcon icon={faCheck}/> </Link> </Button>
    {/* </form> */}
  </Card.Body>
</Card>

    );
};


export default Team;
/**<div className='container col-md-3'>
           <div className='header'>
           <img src = {strTeamBanner} alt=''/>
           <h4>Gender:{strGender}</h4>
           <p>Id:{idTeam}</p> 
           <p>Stadium:{strStadium}</p>
          </div>
           <Button>aaaa</Button>
    
        </div> */