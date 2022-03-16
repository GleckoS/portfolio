import React from 'react'
import Layout from './src/components/layout'
import 'typeface-la-belle-aurore'
import '@fontsource/source-sans-pro'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
    <Layout>
      {element}
    </Layout>
  );
  