import React from 'react'
// import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import './theme.css'

const Footer = () => (
  <footer className='footer'>
    <p>Copyright &copy; {new Date().getFullYear()}</p>
    <a href='mailto:petitsanglais@gmail.com'>petitsanglais@gmail.com</a>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Petits Anglais - Carcassonne, France'
      meta={[
        { name: 'description', content: 'Petits Anglais. Teaching children to speak English.' },
        { name: 'keywords', content: 'Language, Education, Kids, Children, Carcassonne, English, French, Francias, Anglais' }
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600&family=Kalam:wght@300;400;700&display=swap' },
        {/*
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Martel:400,300,700' }
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600&family=Kalam:wght@300;400;700&display=swap" rel="stylesheet">
        */}
      ]}
    />
    {children}
    <Footer />
  </div>
)

export default TemplateWrapper
