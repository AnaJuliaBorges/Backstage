import React from "react"
import { render } from "react-dom"

import App from "../src/"

import { conf } from "backstage-admin"

// Backstage Admin Styles
import "../node_modules/backstage-admin/src/sass/index.scss"

// Demo-related styles
import "./index.scss"

const env = {
  name: "local",
}

conf.auth.redirectUri = "http://localhost:3000/auth"

conf.baseURL = "/"

render(<App env={env} />, document.getElementById("root"))
