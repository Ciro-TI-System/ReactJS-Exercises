//Importação do hook 'useState' que permite o uso de 'estado'.
//Import of the 'useState' hook that allows the use of 'state'.
import React,{useState, useEffect} from 'react';

import './style.css';

//Importing the 'Card' folder 'component'.
//Importando o 'componente' da pasta 'Card'.
import { Card } from '../../components/Card';

//function Home() {

export function Home() {
  //importando o 'useState' ele pedirá dois argumentos.O primeiro é o 'estado' onde o conteúdo será armazenado e o segundo é a função (padrão = set_nome do estado) que atualiza este 'estado'.
  //importing the 'useState' it will ask for two arguments. The first is the 'state' where the content will be stored and the second is the function (default = set_state name) that updates this 'state'.
  const[studentName, setStudentName] = useState('');
  const[students, setStudents] = useState([]);
  const[user, setUser] = useState({name: '', avatar: '' });

  //Função para adicionar o 'objeto' student.
  //Function to add the 'object' student.
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    //O uso do 'spreadOperator (...)' é para que o conteúdo armazenado anteriormente seja retirado de seu vetor e fique junto com o vetor do novo conteúdo adicionado.
    //The use of 'spreadOperator (...)' is for the previously stored content to be taken out of its array and stay together with the array of the newly added content.
    setStudents(prevState => [...prevState, newStudent]);
    //Sem o uso do 'spreadOperator' [[prevState], newStudent]
    //Com o uso do 'spreadOperator' [prevState, newStudent]
    //Without using the 'spreadOperator' [[prevState], newStudent]
    //Using 'spreadOperator' [prevState, newStudent]
  }

  //Consumindo a API do GitHub com 'useEffect'.
  //Consuming the GitHub API with 'useEffect'.

  //useEffect Sync
  useEffect(() => {
    fetch("https://api.github.com/users/Ciro-TI-System")
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  }, []);

  //UseEffect Async
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/Ciro-TI-System");
      const data = await response.json();

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData()
  }, []);


//Mostrando na tela a API do GitHub que foi consumida.
//Showing on the screen the GitHub API that was consumed.
  return (
    <div className='container'>
      <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src= {user.avatar} alt="Foto de perfil" />
      </div>
      </header>
      

      <input
        type="text"
        placeholder="Digite o nome..."

        //Pegando conteúdo do 'input'e atualizando o valor do 'estado' com a função 'setStudentName'.
        //Getting the 'input' content and updating the 'state' value with the 'setStudentName' function.
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
        </button>

      {
        students.map(student => (
        <Card 
        key={student.time}
        name={student.name} 
        time={student.time} 
        />)
        )
      }

    </div>
  )
}

//export default Home


//Essa função pode ser substituída colocando 'export' na função e adicionando chaves na função na página 'main'.
//This function can be overridden by putting 'export' in the function and adding curly braces in the function on the 'main' page.