import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { Event } from "./pages/Event"

//Essa função é um componente chamado no 'main'.
function App() {
  

//Tudo que é exibido no retorno da função é o arquivo Html mostrado na página.//
//All that is displayed in the function return is the Html file shown on the page.
  return (
    <div>
      < Event />
    </div>
  )
}

export default App