import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from '../src/components/menu'
import MenuItem from '../src/components/menuItem'

storiesOf('Components/button/menu', module)
  .add('closed', () => <Menu isOpen={false} />)
  .add('open', () => <Menu isOpen={true} />)

storiesOf('Components/navigation', module)
  .add('active item', () =>
    <MenuItem
      item={{ to: `/blog`, name: `Blog` }}
      active={true}
      toggleOnClick={function () { }}
    />
  )
  .add('inactive item', () =>
    <MenuItem
      item={{ to: `/blog`, name: `Blog` }}
      active={false}
      toggleOnClick={function () { }}
    />
  )
