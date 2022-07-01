import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Router } from "./components/Router"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { Event } from "./pages/Event"
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import { BrowserRouter } from "react-router-dom";

//Essa função é um componente chamado no 'main'.
function App() {
  

//Tudo que é exibido no retorno da função é o arquivo Html mostrado na página.//
//All that is displayed in the function return is the Html file shown on the page.
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          < Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App