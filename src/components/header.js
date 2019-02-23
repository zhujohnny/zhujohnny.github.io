import React from "react"

import profilePic from "./profile-pic.png"
import { rhythm } from "../utils/typography"

const Header = ({ subtitle }) => (
	<div style={{
		display: `flex`,
		justifyContent: `space-between`
	}}>
		<h2 style={{ marginBottom: rhythm(2) }}>
		{subtitle}
		</h2>
		{subtitle === `About me` && 
			<img 
				src={profilePic}
				alt={``}
				width={`20%`} 
				height={`20%`}
				style={{
					marginTop: rhythm(-3 / 4),
					marginBottom: rhythm(-2 / 4),
					float: `right`
				}}
			/>
		}
	</div>
)

export default Header