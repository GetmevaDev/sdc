/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getServices = makeRequest(graphql, `
      {
          allStrapiServices {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
  `).then(result => {
    // Create pages for each article.
    result.data.allStrapiServices.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/services.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });


  const getArticle = makeRequest(graphql, `
      {
          allStrapiArticles {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
  `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });


  const getAuthor = makeRequest(graphql, `
      {
          allStrapiUsers {
              edges {
                  node {
                      username
                  }
              }
          }
      }
  `).then(result => {
    // Create pages for each article.
    result.data.allStrapiUsers.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.username}`,
        component: path.resolve(`src/templates/author.js`),
        context: {
          username: node.username,
        },
      })
    })
  });
  // Query for articles nodes to use in creating pages.
  return Promise.all([
    getArticle,
    getServices,
    getAuthor,
  ])
};