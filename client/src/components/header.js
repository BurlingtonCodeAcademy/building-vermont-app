import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import DropDownMenu from 'material-ui'
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
          padding: '.4rem .2rem',
        }}
      >
        <div style={{
          margin: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <div style={{
          }}>
            <Link
              to="/architects"
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '.5rem',
              }}
            >
              Yesterday
        </Link>
          </div>
          <div>
            <Link
              to="/events"
              style={{
                display: 'flex',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Today
        </Link>
          </div>
          <div>
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
          <div>
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
