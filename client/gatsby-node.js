const moment = require('moment');

const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getBuildings = makeRequest(
    graphql,
    `
    {
      allStrapiBuilding {
        edges {
          node {
            id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each building.
    result.data.allStrapiBuilding.edges.forEach(({ node }) => {
      createPage({
        path: `/buildings/${node.id}`,
        component: path.resolve(`src/templates/building.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  const getYears = makeRequest(
    graphql,
    `
    {
      allStrapiBuilding {
        edges {
          node {
            year
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each year.
    result.data.allStrapiBuilding.edges.forEach(({ node }) => {
      createPage({
        path: `/buildings/${node.year}`,
        component: path.resolve(`src/templates/year.js`),
        context: {
          year: node.year,
        },
      });
    });
  });

  const getCity = makeRequest(
    graphql,
    `
    {
      allStrapiBuilding {
        edges {
          node {
            city
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each city.
    result.data.allStrapiBuilding.edges.forEach(({ node }) => {
      createPage({
        path: `/buildings/${(node.city).split(' ').join('-')}`,
        component: path.resolve(`src/templates/city.js`),
        context: {
          city: node.city,
        },
      });
    });
  });

  const getStyle = makeRequest(
    graphql,
    `
    {
      allStrapiBuilding {
        edges {
          node {
            style
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each style.
    result.data.allStrapiBuilding.edges.forEach(({ node }) => {
      createPage({
        path: `/buildings/${(node.style).split(' ').join('-')}`,
        component: path.resolve(`src/templates/style.js`),
        context: {
          style: node.style,
        },
      });
    });
  });

  const getType = makeRequest(
    graphql,
    `
    {
      allStrapiBuilding {
        edges {
          node {
            type
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each type.
    result.data.allStrapiBuilding.edges.forEach(({ node }) => {
      createPage({
        path: `/buildings/${(node.type).split(' ').join('-')}`,
        component: path.resolve(`src/templates/type.js`),
        context: {
          type: node.type,
        },
      });
    });
  });

  const getPosts = makeRequest(
    graphql,
    `
    {
      allStrapiPost {
        edges {
          node {
            id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each post.
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/posts/${node.id}`,
        component: path.resolve(`src/templates/post.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  const getEvents = makeRequest(
    graphql,
    `
    {
      allStrapiEvent {
        edges {
          node {
            id
            name
            date
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each event date.
    result.data.allStrapiEvent.edges.forEach(({ node }) => {
      createPage({
        path: `/events/${moment(node.date).format('MM-DD-YY')}`,
        component: path.resolve(`src/templates/date.js`),
        context: {
          date: node.date,
        },
      });
      createPage({
        path: `/events/${moment(node.date).format('MM-DD-YY')}/${(node.name).split(' ').join('-')}`,
        component: path.resolve(`src/templates/event.js`),
        context: {
          name: node.name,
        },
      });
      createPage({
        path: `/events/${node.id}`,
        component: path.resolve(`src/templates/event.js`),
        context: {
          name: node.name,
        },
      });
    });
  });

  const getArchitects = makeRequest(
    graphql,
    `
    {
      allStrapiArchitect {
        edges {
          node {
            id
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each architect.
    result.data.allStrapiArchitect.edges.forEach(({ node }) => {
      createPage({
        path: `/architects/${node.id}`,
        component: path.resolve(`src/templates/architect.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  // Queries for buildings and architects nodes to use in creating pages.
  return Promise.all([getBuildings, getYears, getCity, getStyle, getType, getPosts, getEvents, getArchitects]);
};
