import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { faItalic } from "@fortawesome/free-solid-svg-icons";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle} subtitle={post.frontmatter.title}>
				<h3
					style={{
					display: `block`,
					marginBottom: rhythm(3 / 4),
					marginTop: rhythm(-5 / 4),
					fontWeight: 700
          }}
				>
					{post.frontmatter.subtitle}	
				</h3>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <p
          style={{
            display: `block`,
            marginBottom: rhythm(6 / 4),
						color: `gray`,
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
				<hr style={{ marginBottom: rhythm(1) }} />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
						padding: 0,
						marginLeft: 0,
						marginBottom: rhythm(-10 / 4)
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
				title
				subtitle
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
