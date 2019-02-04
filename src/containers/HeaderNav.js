import React from 'react';
import './HeaderNav.css';
import { Menu, Header, Icon } from 'semantic-ui-react';

class HeaderNav extends React.Component {
  state = { activeItem: 'Movies' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    const navItems = [
      { name: 'All', icon: null },
      { name: 'Movies', icon: 'film' },
      { name: 'TV Shows', icon: 'tv' },
      { name: 'Games & Apps', icon: 'game' },
      { name: 'Blog', icon: 'talk' },
      { name: 'Other', icon: 'question' }
    ]

    return (
        <Menu stackable secondary as='nav' id="headerNav">
          <Menu.Item>
            <Header as='h1'>Search <br />Results</Header>
          </Menu.Item>

          <Menu.Menu position='right'>
            { navItems.map((navItem) => (
              <Menu.Item
                key={navItem.name}
                name={navItem.name}
                active={activeItem === navItem.name}
                onClick={this.handleItemClick}>
                  <Icon name={navItem.icon}></Icon>{navItem.name}
              </Menu.Item>
            )) }

            <Menu.Item>
              <Icon link name='grid layout' size='big' />
              <Icon link name='list layout' size='big' color='grey' />
            </Menu.Item>
          </Menu.Menu>
        </Menu> 
    )
  }
}

export default HeaderNav;