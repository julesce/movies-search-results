import React from 'react'
import { Image, Header } from 'semantic-ui-react'

import './Movie.css'

const Movie = ( {movie} ) => {

  const { name, imgUrl } = movie;

  return (
    <div className='movie'>
      <Image src={imgUrl} />
      <div className='content'>
        <Header as='h6' className='category'>Movie</Header>
        <Header as='h4' className='title'>{ name }</Header>
      </div>
    </div>
  )
}

export default Movie