import React from "react"
import { Link } from "gatsby"

import logo from "./pearl-logo.png"
import { rhythm, scale } from "../utils/typography"

const pages = {
	home: {
		display: `Projects`,
		url: `/`,
	},
	about: {
		display: `About me`,
		url: `/about`,
	}
}

const Nav = ({ title }) => (
	<div style={{
		display: `flex`,
		flexDirection: `row`,
		justifyContent: `space-between`,
		alignItems: `center`,
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

export default Nav