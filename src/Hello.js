import React from 'react';

const Hello = (props) => {
  return <div>
            <h1>Hello, {props.name}!</h1>
            <form  method='get' action='https://hn.algolia.com/api/v1/search?query=javascript'>
              <input type="submit" value={props.name}/>
            </form>
        </div>;
};

export default Hello;