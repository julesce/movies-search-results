import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderNav from './HeaderNav';
import { Container } from 'semantic-ui-react'

storiesOf('HeaderNav', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('default', () => <HeaderNav />)