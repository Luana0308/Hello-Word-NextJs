import styles from "../../styles/Todos.module.css"

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    const response = await data.json();
    return {
        props: { response }
    }
}
export default function Todos(props) {
    const { response } = props;
    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <ul className={ styles.todolist}>
                {response.map((item) => {
                    return <li key={item.id}> {item.title}</li>
                })}
            </ul>
        </div>
    )
}