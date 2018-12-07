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

  const getEventDates = makeRequest(
    graphql,
    `
    {
      allStrapiEvent {
        edges {
          node {
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
    });
  });

  const getEventNames = makeRequest(
    graphql,
    `
    {
      allStrapiEvent {
        edges {
          node {
            name
            date
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each event name.
    result.data.allStrapiEvent.edges.forEach(({ node }) => {
      createPage({
        path: `/events/${moment(node.date).format('MM-DD-YY')}/${(node.name).split(' ').join('-')}`,
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
  return Promise.all([getBuildings, getYears, getEventDates, getEventNames, getArchitects]);
};
