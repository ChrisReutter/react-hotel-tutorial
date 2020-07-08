import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <Hero hero="errorHero">
      <Banner title="404" subtitle="Something went wrong!">
        <Link to="/" className="btn-primary">
          return to main page
        </Link>
      </Banner>
    </Hero>
  )
}

export default Error
