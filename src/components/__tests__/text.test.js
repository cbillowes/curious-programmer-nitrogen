import React from 'react'
import Text from '../text'
import { containsElement } from './_helpers'

function sut(props) {
  return (
    <Text
      limit={props.limit}
    >
      {props.content}
    </Text>
  )
}

function elementsToConvertToText() {
  return (
    <>
      <h1>Don't panic!</h1>
      <p>Time is an illusion.</p>
      <p>
        Would it save you a lot of time if
        <strong>I just gave up and went mad now?</strong>
      </p>
      <span>
          The ships hung in the sky in much the same way
          that bricks don't.
      </span>
    </>
  )
}


describe(`Text`, () => {

  it(`should extract all content from html elements into plain text`, () => {
    const expected = containsElement(
      sut({
        content: elementsToConvertToText(),
      }),
      <span className="text">
        Don't panic! Time is an illusion. Would it save you a lot of
        time if I just gave up and went mad now? The ships hung in the sky in much the same way
        that bricks don't.
      </span>
    )
    expect(expected).toBeTruthy()
  })

  it(`should limit the number of words from extracted html content and follow it by an ellispies`, () => {
    const expected = containsElement(
      sut({
        content: elementsToConvertToText(),
        limit: 2,
      }),
      <span className="text">
        Don't panic!...
      </span>
    )
    expect(expected).toBeTruthy()
  })

  it(`should render all content from plain text`, () => {
    const expected = containsElement(
      sut({
        content: `Don't panic! Time is an illusion.`,
      }),
      <span className="text">
        Don't panic! Time is an illusion.
      </span>
    )
    expect(expected).toBeTruthy()
  })

  it(`should limit the number of words from plain text`, () =>{
    const expected = containsElement(
      sut({
        content: `Don't panic! Time is an illusion.`,
        limit: 3,
      }),
      <span className="text">
        Don't panic! Time...
      </span>
    )
    expect(expected).toBeTruthy()
  })

})