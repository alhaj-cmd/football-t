import React, { useState , useEffect} from 'react';
import { Jumbotron,Container } from 'react-bootstrap';
import Team from '../Team/Team';

const Home = () => {
    const[team,setDetails] = useState([]);
 
    useEffect(() => {
      fetch( 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => res.json())
      .then(data =>setDetails(data.teams))
    }, [])
  
    console.log(team);
    return (<div>
      <Jumbotron fluid className='headerimg' >
      <Container className='text-center header_text_center'>
        <h1> Football Team</h1>
       
      </Container>
    
    </Jumbotron>
    

<div className='d-flex flex-wrap justify-content-center'>
{
  team.map(team =><Team team={team}></Team>)
}
</div>
</div>
    );
};

export default Home;