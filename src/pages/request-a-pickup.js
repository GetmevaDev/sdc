import React from "react"
import Layout from "../components/layout"
import SectionHeader from "../components/RequestAPickup/SectionHeader/SectionHeader"
import { Form } from "../components/RequestAPickup/Form/Form"



const RequestAPickup = () =>{

  return(
    <Layout>
      <SectionHeader />
      <Form />
    </Layout>
  )
}

export default RequestAPickup