import React from 'react'
import Layout from '../layouts/index'
import logo from '../assets/img/logo-large.png'

const IndexPage = () => (
  <Layout>
    <img className='logo' src={logo} height='150' width='150' />
    <div className='wholescreen'>
      <div className='centered'>
        {/*
          <h1>ateliers créatifs et cours de <br />cuisine pour les enfants</h1>
          <p className=''>6-10 ans</p>
          <p className=''>EN ANGLAIS</p>
          <p>
            contact: <a href='mailto:petitsanglais@gmail.com'>petitsanglais@gmail.com</a><br />
            stages vacances
          </p>
        */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
