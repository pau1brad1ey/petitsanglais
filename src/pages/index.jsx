import React from 'react'
import Layout from '../layouts/index'
import logo from '../assets/img/logo-large.png'

const IndexPage = () => (
  <Layout>
    <div className='wholescreen'>
      <img className='logo' src={logo} height='150' width='150' />
      <h1>Coming soon / Bientôt disponible</h1>
      <p>
        contact: <a href='mailto:petitsanglais@gmail.com'>petitsanglais@gmail.com</a><br />
      </p>
    </div>
  </Layout>
)

export default IndexPage
