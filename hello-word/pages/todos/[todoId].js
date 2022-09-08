import Link from "next/link";

export async function getStaticProps(context) {
    const {params} = context;
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
    const todo = await data.json();
    return {
        props: { todo }
    }
}

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const data = await response.json();

    const path = data.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`,
            },
        }
    })

    return { paths: path, fallback: false }
    // eu posso retornar tb um objeto com path, fallback: false que significa que caso mude
    // o backend não vai renderizar na pagina e se eu colocar true tudo que mudar no back
    // vai mudar quando carregar a pagina 
    // exemplo do return {path, fallback: false }
    //  return dessa função tem que conter a chave paths se não dá erro de renderização
}

export default function TodoId({todo}) {
    return(
        <div>
            <Link href="/">
                <a>Voltar</a>
            </Link>
            <h1>Exibindo o id {todo.id}</h1>
            <h2>Text: {todo.title}</h2>
            <p>Comentario: la la la ...<Link href={`/todos/${todo.id}/coments/1`}><a>Detalhes</a></Link></p>
            <p>Comentario: li li li  ...</p>
            <p>Comentario: ta ta ta  ...</p>
            <p>Comentario: test test test ...</p>
        </div>
    )
}