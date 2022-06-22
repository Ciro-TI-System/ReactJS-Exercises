import './style.css';

/*
export function Card(props) {
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}
*/

//Também pode-se desestruturar o componente não sendo preciso o uso do parâmetro 'props'.
//You can also unstructure the component without needing to use the 'props' parameter.

export function Card({name,time}) {
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}