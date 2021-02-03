import React from "react"

import { Admin, Api, BackstageApisRestClient } from "backstage-admin"

import MyAddView from "./components/AddView"
import MyEditView from "./components/EditView"
import MyListView from "./components/ListView"

const apiSlug = "esportes-minha-lista-de-musicas"

const RestClient = BackstageApisRestClient({
  slug: apiSlug,
  version: 2,
})

const itemName = "esportes-minha-lista-de-musicas"
const collectionName = `${itemName}s`

const App = props => {
  return (
    <Admin env={props.env}>
      <Api
        AddView={<MyAddView />}
        EditView={<MyEditView />}
        ListView={<MyListView />}
        isMultiTenant
        slug={apiSlug}
        itemName={itemName}
        collectionName={collectionName}
        RESTClient={RestClient}
      />
    </Admin>
  )
}

export default App
