import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Projects extends React.Component {
  render() {
    const { data } = this.props
		const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} subtitle={`Projects`}>
        <SEO
          title={`Projects`}
          keywords={[`projects`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					const subtitle = node.frontmatter.subtitle || null
					const excerpt = node.frontmatter.excerpt || node.excerpt
          return (
						<div 
							key={node.fields.slug}
							style={{
								marginBottom: rhythm(5 / 4),
							}}
						>
              <h3
                style={{
									marginBottom: rhythm(3 / 4),
									textDecoration: `underline`,
                }}
              >
								<Link 
									style={{ boxShadow: `none`, textDecoration: `underline`, color: `#000` }} 
									to={node.fields.slug}
								>
                  {title}{subtitle && `: ${subtitle}`}
                </Link>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
			filter: {
				frontmatter: {project: {eq: true}}
			}
			sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
						project
						title
						subtitle
            date(formatString: "MMMM DD, YYYY")
						excerpt
          }
        }
      }
    }
  }
`
