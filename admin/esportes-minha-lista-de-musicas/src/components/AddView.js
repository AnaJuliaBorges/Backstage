import React from "react"

import { AddView } from "backstage-admin"
import Form from "./Form"

const MyAddView = props => (
  <AddView {...props}>
    <Form />
  </AddView>
)

export default MyAddView
