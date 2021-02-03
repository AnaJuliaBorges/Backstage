import React from "react"

import { SchemaForm, Form } from "backstage-admin"

const MyForm = props => (
  <Form>
    <SchemaForm {...props} />
  </Form>
)

export default MyForm
