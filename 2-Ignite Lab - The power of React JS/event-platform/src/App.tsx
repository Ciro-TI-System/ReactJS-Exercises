//Essa função é um componente chamado no 'main'.
import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql '
query {
  lessons {
    id
    title
  }
}
'

//This function is a component called in 'main'.
function App() {
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    })
  }, [])

//Tudo que é exibido no retorno da função é o arquivo Html mostrado na página.
//All that is displayed in the function return is the Html file shown on the page.
  return (
    <h1 className="text-5xl font-bold text-violet-500">Hello World!</h1>
  )
}

export default App