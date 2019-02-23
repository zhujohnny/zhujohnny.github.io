import Typography from "typography"

const typography = new Typography({
	baseFontSize: `14px`,
  baseLineHeight: 1.5,
  headerFontFamily: [`Roboto Condensed`, `helvetica`, `sans-serif`],
	bodyFontFamily: [`Roboto Condensed`, `helvetica`, `sans-serif`],
	headerColor: `black`,
	bodyColor: `#444`,
	overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
		'body': {
			fontStretch: `normal`,
			letterSpacing: `.002em`,
			fontFeatureSettings: `'kern' 1 , 'liga' 1`
		},
		'h1': {
			fontSize: `42px`,
		},
		'h2': {
			fontSize: `32px`,
		},
		'h3': {
			fontSize: `20px`,
			fontWeight: `500`,
		},
		'a[href]': {
			textDecoration: `none`,
			color: `#0366d6`
		},
		'a:visited': {
			color: `#1756a9`
		},
		'hr' : {
			color: `#e8e8e8`
		}
	})
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
