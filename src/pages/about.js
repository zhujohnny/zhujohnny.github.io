import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
		
		function link(display, lookup) {
			return <a href={links[lookup]} target="_blank" rel="noopener noreferrer">{display}</a>
		}

		const links = {
			dogpatch: `https://en.wikipedia.org/wiki/Dogpatch,_San_Francisco`,
			comma: `https://www.grammarly.com/blog/what-is-the-oxford-comma-and-why-do-people-care-so-much-about-it/`,
			servicenow: `https://www.servicenow.com/company/investor-relations.html`,
			itsm: `https://www.servicenow.com/products/it-service-management.html`,
			apple: `https://support.apple.com/`,
			vmware: `https://www.vmware.com/products/nsx.html`,
			hp: `http://www8.hp.com/us/en/hp-information/index.html`,
			berkeley:`https://haas.berkeley.edu/`,
			losangeles: `http://www.lakersnation.com/`,
			sandiego: `https://economics.ucsd.edu/undergraduate-program/major-minor-requirements/mgmt-sci.html`,
			ottawa: `https://www.nhl.com/senators`,
			shanghai: `http://www.fudan.edu.cn/en/channels/view/52/`
		}

    return (
      <Layout location={this.props.location} title={siteTitle} subtitle={`About me`}>
        <SEO
          title="About me"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
				<p>{`Hello, my name is Johnny Zhu.`}</p>
				<p>
					{`I'm a software engineer living in San Francisco's `}
					{link(`Dogpatch`, `dogpatch`)}
					{` neighborhood with a passion for web development, technology`}
					{link(`,`, `comma`)}
					{` and design.`}
				</p>
				<p>
					{`Currently, I'm employed as an application developer at  `}
					{link(`ServiceNow`, `servicenow`)}
					{` in the `}
					{link(`ITSM`, `itsm`)}
					{` business unit.  We're building enterprise applications`}
					{` to improve digital workflows for the everyday employee.`}
				</p>
				<p>
					{`Previously, I had the privilege
					of working as a business analyst for amazing companies such as `}
					{link(`Apple`, `apple`)}
					{`, `} 
					{link(`VMware`, `vmware`)}
					{`, and `}
					{link(`Hewlett-Packard`, `hp`)}
					{`. I also [mistakenly] completed my MBA at `}
					{link(`UC Berkeley`, `berkeley`)}.
				</p>
				<p>
					{`I'm originally from `}
					{link(`Los Angeles`, `losangeles`)}
					{`, went to school in `}
					{link(`San Diego`, `sandiego`)}
					{`, and have also spent significant time in parts of `}
					{link(`Canada`, `ottawa`)}
					{` and `}
					{link(`China`, `shanghai`)}.
					{` In my spare time I enjoy trying to make sense of the world around us,
					usually through the lens of basketball, analytics, and team dynamics.`}
				</p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
