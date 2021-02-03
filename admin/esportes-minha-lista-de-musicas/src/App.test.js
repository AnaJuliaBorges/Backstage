import React from "react"
import { render } from "react-dom"

it("works", () => {
  expect(1 + 1).toEqual(2)
})

it("works async", done => {
  expect.assertions(1)

  setTimeout(() => {
    expect(1 + 1).toEqual(2)
    done()
  }, 100)
})
