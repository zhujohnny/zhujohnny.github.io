import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import logo from "./pearl-logo.png"
import { rhythm, scale } from "../utils/typography"

const pages = {
	home: {
		display: `Projects`,
		url: `/`,
	},
	blog: {
		display: `Blog`,
		url: `/blog`,
	},
	about: {
		display: `About`,
		url: `/about`,
	}

}

const Nav = ({ title }) => {

	const MOBILE_WIDTH = 480;

	const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= MOBILE_WIDTH : true);
	
	useEffect(() => {
		const updateWindowDimensions = () => {
			setIsMobile(window.innerWidth <= MOBILE_WIDTH);
		}
		window.addEventListener('resize', updateWindowDimensions);
		return () => {
			window.removeEventListener('resize', updateWindowDimensions);
		}
	})	

	return (
		<div style={{
			display: `flex`,
			flexDirection: isMobile ? `column` : `row`,
			alignItems: isMobile ? `flex-start` : `center`,
			justifyContent: `space-between`,
			marginBottom: rhythm(6 / 4),
		}}>
			<div style={{
				display: `flex`,
				flexDirection: `row`,
			}}>
				<img 
					src={logo}
					alt={``}
					width={`40px`} 
					height={`40px`} 
					style={{
						marginTop: `4px`,
					}}
				/>
				<h1
					style={{
						marginBottom: 0,
						marginLeft: rhythm(5 / 4),
						...scale(6 / 4),
					}}
				>
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`,
						}}
						to={`/`}
					>
						{title}
					</Link>
				</h1>
			</div>
			<div style={{
				display: `flex`,
				flexDirection: `row`,
				marginTop: isMobile ? `-7px` : `0px`,
				paddingLeft: isMobile ? `47px` : `0px`
			}}>
				{Object.entries(pages).map(([key, page]) => (
					<Link
						key={key}
						style={{
							fontSize: `14px`,
							fontWeight: `500`,
							boxShadow: `none`,
							textDecoration: `none`,
							color: `gray`,
							marginLeft: rhythm(1)
					}}
						to={page.url}
					>
						{page.display}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Nav