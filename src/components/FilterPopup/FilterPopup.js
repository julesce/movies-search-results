import React, { Component } from 'react'
import { Popup, Label, Icon, Form } from 'semantic-ui-react';

import './FilterPopup.css'

class FilterPopup extends Component {

  constructor(props) {
    super()
  }

  handleChange = (e, data) => {
    this.props.onChange(e, data, this.props.identifier);
  }

  render () {
    const {title, items = []} = this.props

    const checkboxes = (
      <Form>
        { items.map(item => (
          <Form.Checkbox className='filterCheckbox' key={item.name} label={item.name} checked={item.selected} onChange={this.handleChange} />
        )) }
      </Form>
    )

    return (
      <Popup
        trigger={<Label as='a' size='large' style={{background:'none'}}>{title} <Icon name='dropdown' /></Label>}
        content={checkboxes}
        on='click'
        position='bottom center'
      />
    )
  }
}

export default FilterPopup