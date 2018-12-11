import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export class Search extends Component {
  renderResults = () => {
    const { results } = this.props.location.state;
    return (
      results &&
      Object.keys(results).map(
        type =>
          results[type] &&
          results[type].map(entry => (
            <li key={entry._id}>
              <Link to={`/${type}/${entry._id}`}>
                {entry.name || entry.title}
              </Link>
            </li>
          ))
      )
    );
  };

  render() {
    return (
      <Layout>
        <h1>Results</h1>
        <ul>{this.renderResults()}</ul>
      </Layout>
    );
  }
}

export default Search;
