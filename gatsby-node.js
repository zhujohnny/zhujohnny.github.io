const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

	const projectPost = path.resolve(`./src/templates/project-post.js`)
	const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
								project
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

		// Create blog posts pages.
		const createPages = (posts, component) => {
			posts.forEach((post, index) => {
				const previous = index === posts.length - 1 ? null : posts[index + 1].node
				const next = index === 0 ? null : posts[index - 1].node
	
				createPage({
					path: post.node.fields.slug,
					component: component,
					context: {
						slug: post.node.fields.slug,
						previous,
						next,
					},
				})
			})
		}
		
		const projectPosts = result.data.allMarkdownRemark.edges.filter((post => post.node.frontmatter.project))
		createPages(projectPosts, projectPost);
		const blogPosts = result.data.allMarkdownRemark.edges.filter((post => !post.node.frontmatter.project))
		createPages(blogPosts, blogPost);
		
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
