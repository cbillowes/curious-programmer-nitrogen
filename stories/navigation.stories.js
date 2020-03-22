import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from '../src/components/menu'
import MenuItem from '../src/components/menuItem'

storiesOf('Nav: Menu', module)
  .add('closed', () => <Menu isOpen={false} />)
  .add('open', () => <Menu isOpen={true} />)

storiesOf('Nav: Menu item', module)
  .add('active', () =>
    <MenuItem
      item={{ to: `/blog`, name: `Blog` }}
      active={true}
      toggleOnClick={function () { }}
    />
  )
  .add('inactive', () =>
    <MenuItem
      item={{ to: `/blog`, name: `Blog` }}
      active={false}
      toggleOnClick={function () { }}
    />
  )
