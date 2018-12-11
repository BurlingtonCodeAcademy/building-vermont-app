import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



const Header = ({ siteTitle }) => (
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
            {siteTitle}
          </Link>
        </h2>
      </div>
    </div>
    <h3>
      <div
        style={{
          background: '#555',
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
                <div style={{color: '#fff', borderBottom: '0px solid white', alignSelf: 'center', paddingLeft: 20}}>Yesterday</div>
            <div style={{padding: 0,}}>
              <MuiThemeProvider>
                <DropDownMenu underlineStyle={{borderTop: '0px'}}>
                <MenuItem><a href="/architects">Architects</a></MenuItem>
                <MenuItem><a href="/buildings">Buildings</a></MenuItem>
                </DropDownMenu>
              </MuiThemeProvider>
            </div>
            <div style={{color: '#fff',}}>Today</div>
            <div style={{padding: 0, alignSelf: 'center'}}>
            <MuiThemeProvider>
            <DropDownMenu underlineStyle={{borderTop: '0px'}}>
                <MenuItem><a href="/posts">Blog</a></MenuItem>
                <MenuItem><a href="/events">Events</a></MenuItem>
                </DropDownMenu>
              </MuiThemeProvider>
            </div>
            <div style={{paddingLeft: 20,}}>
              <MuiThemeProvider>
                <SearchBar
                  onChange={() => console.log('onChange')}
                  onRequestSearch={() => console.log('onRequestSearch')}
                  style={{
                    margin: '0 auto',
                    minWidth: 380,
                    maxWidth: 800
                  }}
                />
              </MuiThemeProvider>
            </div>
            <div style={{paddingLeft: 40,}}>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
