import React, { useState } from 'react'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

import { MainTemplate } from './../components/templates/MainTemplate'
import { Conditional } from './../components/atoms/Conditional'

const config = {
  google: {
    families: ['Roboto:100,300,400,500,700,900', 'Viga']
  }
}
export const Main = () => {
  const [fontLoading, setFontLoading] = useState(true)

  const getStatus = status => {
    if (status === 'loading') {
      setFontLoading(true)
    } else {
      setFontLoading(false)
    }
  }

  return (
    <WebfontLoader config={config} onStatus={getStatus}>
      <>
        <Conditional condition={!fontLoading}>
          <MainTemplate/>
        </Conditional>
      </>
    </WebfontLoader>
  )
}
