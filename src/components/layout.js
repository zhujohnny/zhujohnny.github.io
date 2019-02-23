import React from "react"

import Nav from "./nav"
import Header from "./header"
import Footer from "./footer"

import { rhythm } from "../utils/typography"

const Layout = ({ title, subtitle, children }) => (
	<div
		style={{
			marginLeft: `auto`,
			marginRight: `auto`,
			maxWidth: rhythm(30),
			padding: `${rhythm(6 / 4)} ${rhythm(3 / 4)}`,
		}}
	>
		<nav><Nav title={title}/></nav>
		<header><Header subtitle={subtitle} /></header>
		<main>{children}</main>
		<footer><Footer /></footer>
	</div>
)

export default Layout
