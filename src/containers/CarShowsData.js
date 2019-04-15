// CarShowsData.js

import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

function CarShowsData({ data }) {
  
  return (
    <div>
      <div>
      {data ? 
          data
          .sort((a,b) => a.name < b.name ? -1 : 0) 
          .map( (shows,i) =>
          {
            return <ListGroup key={i}>  
              <ListGroup.Item  active>{shows.name }</ListGroup.Item>
              {shows.cars
                .sort((a,b) => a.make < b.make ? -1 : 0) 
              .map((cars,i) => <ul> <li> {cars.make} </li> <li> {cars.model }</li></ul>)} </ListGroup>
             
          })
        
         : "No Items to Display" }
        
      </div>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(CarShowsData);