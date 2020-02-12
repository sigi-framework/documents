import * as React from 'react'
import { Helmet } from 'react-helmet-async'

import androidChrome192 from '../../../assets/android-chrome-192x192.png'
import androidChrome512 from '../../../assets/android-chrome-512x512.png'
import appleTouchIcon from '../../../assets/apple-touch-icon.png'

const Wrapper = ({ children }) => <React.Fragment>
	<Helmet>
		<meta charSet="utf-8" />
		<link rel="icon"
      type="image/png"
      href="/assets/favico.ico"
		/>
    <link rel="icon" type="image/png" href={androidChrome192} sizes="192x192" />
    <link rel="icon" type="image/png" href={androidChrome512} sizes="512x512" />
    <link rel="apple-touch-icon" href={appleTouchIcon} />
	</Helmet>
	{children}
</React.Fragment>
export default Wrapper
