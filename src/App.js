import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';


const getMaterial = gql `{
  book {
    title
    author {
      name
    }
  }
}`;

const App = () => {
  return (
    <Query query={getMaterial}>
      {({ loading, error, data }) => {
        if (loading) return <p>Relax, it's worth the wait...</p>
        if (error) return <p>Looks like we've got a problem...</p>
        return (
          <div className="container">
            <h1>Users</h1>
            <div className="row">
                
                  <h2>UserID: {data.book.title}</h2>
            
            </div>
          </div>
        )
      }}
    </Query>
  );
}
export default App;