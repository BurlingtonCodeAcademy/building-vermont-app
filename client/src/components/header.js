import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: ``,
      allContent: ``,
    };
  }
  componentDidMount = async () => {
    const PATH = 'http://localhost:1337';
    const contentTypes = ['buildings', 'architects', 'events', 'posts'];
    const [buildings, architects, events, posts] = await Promise.all(
      contentTypes.map(type =>
        fetch(`${PATH}/${type}`).then(response => response.json())
      )
    );
    this.setState({
      allContent: {
        buildings,
        architects,
        events,
        posts,
      },
    });
  };

  filterResults = query => {
    const { buildings, architects, events, posts } = this.state.allContent;
    const filteredBuildings = buildings.filter(document =>
      document.name.toLowerCase().includes(query)
      || document.year.toString().includes(query)
      || document.type.toLowerCase().includes(query)
      || document.style.toLowerCase().includes(query)
      || document.city.toLowerCase().includes(query)
    );
    const filteredArchitects = architects.filter(document =>
      document.name.toLowerCase().includes(query)
    );
    const filteredEvents = events.filter(document =>
      document.name.toLowerCase().includes(query)
    );
    const filteredPosts = posts.filter(document =>
      document.title.toLowerCase().includes(query)
    );
    return {
      buildings: filteredBuildings,
      architects: filteredArchitects,
      events: filteredEvents,
      posts: filteredPosts,
    };
  };
  render() {
    return (
      <div
        style={{
          background: '#222',
        }}
      >
        <div>
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '.6rem 1.0875rem',
            }}
          >
            <h2 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {this.props.siteTitle}
              </Link>
            </h2>
          </div>
        </div>
        <h3>
          <div
            style={{
              background: '#494c58',
              marginBottom: '1.45rem',
            }}
          >
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0 auto',
              }}
            >
              <div style={{
                margin: 0,
                display: 'flex',
                alignItems: 'center',
              }}>
                <div style={{ color: '#fff', borderBottom: '0px solid white', alignSelf: 'center', paddingLeft: 20 }}>Yesterday</div>
                <div style={{ padding: 0, }}>
                  <MuiThemeProvider>
                    <DropDownMenu underlineStyle={{ borderTop: '0px' }}>
                      <MenuItem><a href="/architects"><h4 style={{margin: 0}}>Architects</h4></a></MenuItem>
                      <MenuItem><a href="/buildings"><h4 style={{margin: 0}}>Buildings</h4></a></MenuItem>
                    </DropDownMenu>
                  </MuiThemeProvider>
                </div>
                <div style={{ color: '#fff', }}>Today</div>
                <div style={{ padding: 0, alignSelf: 'center' }}>
                  <MuiThemeProvider>
                    <DropDownMenu underlineStyle={{ borderTop: '0px' }}>
                      <MenuItem><a href="/posts"><h4 style={{margin: 0}}>Blog</h4></a></MenuItem>
                      <MenuItem><a href="/events"><h4 style={{margin: 0}}>Events</h4></a></MenuItem>
                    </DropDownMenu>
                  </MuiThemeProvider>
                </div>
                <div style={{ paddingLeft: 20, }}>
                  <MuiThemeProvider>
                    <SearchBar
                      value={this.state.query}
                      onChange={input => {
                        this.setState({
                          query: input,
                          results: this.filterResults(input),
                        });
                      }}
                      onRequestSearch={() => {
                        navigate(`/search`, {
                          state: { results: this.state.results },
                        });
                      }}
                      style={{
                        margin: '0 auto',
                        minWidth: 380,
                        maxWidth: 800,
                      }}
                    />
                  </MuiThemeProvider>
                </div>
                <div style={{ paddingLeft: 40, }}>
                  <Link
                    to="/about"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    About
        </Link>
                </div>
              </div>
            </div>
          </div>
        </h3>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;