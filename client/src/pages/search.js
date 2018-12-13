import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import './index.css'

export class Search extends Component {
  renderResults = () => {
    const results =
      (this.props.location &&
        this.props.location.state &&
        this.props.location.state.results) ||
      '';
    return (
      results &&
      Object.keys(results).map(
        type =>
          results[type] &&
          results[type].map(entry => (
            <li key={entry._id}>
            <h3>
              <Link to={`/${type}/${entry._id}`}>
                {entry.name || entry.title}
              </Link>
              </h3>
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
