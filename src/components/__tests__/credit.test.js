import React from 'react'
import Credit from '../credit'
import Tag from '../tag'
import { containsElement } from './_helpers'

function sut(props) {
  return (
    <Credit
      to={props.to}
      title={props.title}
      readonly={props.readonly}
    >
      {props.children}
    </Credit>
  )
}

describe(`Credit`, () => {

  describe(`should render`, () => {

    it(`a basic tag when it links to nowhere`, () => {
      const expected = containsElement(
        sut({
          title: `Douglas Adams`,
          children: `So long and thanks for all the fish`,
        }),
        <div>
          <Tag
            title="Douglas Adams"
          />
          So long and thanks for all the fish
        </div>
      )
      expect(expected).toBeTruthy()
    })

    it(`a clickable tag when it links to somewhere`, () => {
      const expected = containsElement(
        sut({
          to: `https://douglas.adams`,
          title: `Douglas Adams`,
          children: `So long and thanks for all the fish`,
        }),
        <div>
          <Tag
            to="https://douglas.adams"
            title="Douglas Adams"
          />
          So long and thanks for all the fish
        </div>
      )
      expect(expected).toBeTruthy()
    })

  })

})