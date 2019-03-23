import React from "react"

import { rhythm } from "../utils/typography"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faEnvelope);

const social = {
	linkedin: {
		icon: `linkedin`,
		display: `jozhu`,
		url: `https://www.linkedin.com/in/jozhu`,
	},
	twitter: {
		icon: `twitter`,
		display: `zhujohnny`,
		url: `https://twitter.com/zhujohnny`
	},
	github: {
		icon: `github`,
		display: `zhujohnny`,
		url: `https://github.com/zhujohnny`
	}
};

const Footer = () => (
	<div
		style={{
			marginTop: rhythm(3),
	}}>
		<hr style={{ marginBottom: rhythm(1) }} />
		<div
			style={{
				display: `flex`,
				justifyContent: `space-between`
		}}>
			<div style={{alignSelf: `flex-end`}}>
				<div>
					<FontAwesomeIcon icon={`envelope`} size={`lg`} />
					<span style={{marginLeft: rhythm(1 / 4)}}>Johnny Zhu</span>
				</div>
				<div
					style={{
						marginTop: rhythm(1 / 4),
						marginBottom: rhythm(1 / 4),
					}}
				>
					mailto:
					<a href="mailto:zhujohnny@gmail.com" style={{marginLeft: rhythm(1 / 4)}}>zhujohnny</a>
				</div>
			</div>
			<div
				style={{
					display: `flex`,
					flexDirection: `column`,
					alignItems: `flex-end`
				}}
			>
				{Object.entries(social).map(([key, site]) => (
					<div 
						key={key} 
						style={{
							display: `flex`,
							alignItems: `center`,
						}}
					>
						<a href={site.url} target="_blank" rel="noopener noreferrer">{site.display}</a>
						<FontAwesomeIcon 
							icon={[`fab`, site.icon]} 
							size={`lg`}
							style={{
								margin: rhythm(1 / 4),
								width: rhythm(5 / 4)
							}}
						/>
					</div>
				))}
			</div>
		</div>
	</div>
)

export default Footer