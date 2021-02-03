import React from "react"

import { EditView } from "backstage-admin"
import Form from "./Form"

const MyEditView = props => (
  <EditView {...props}>
    <Form />
  </EditView>
)

export default MyEditView
