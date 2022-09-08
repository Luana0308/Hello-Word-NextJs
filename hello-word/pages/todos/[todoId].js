import Link from "next/link";

import { useRouter } from "next/router";

export default function TodoId() {

    const router = useRouter();
    const todoId = router.query.todoId;

    return(
        <div>
            <Link href="/">
                <a>Voltar</a>
            </Link>
            <h1>Exibindo o id {todoId}</h1>
            <p>Comentario: la la la ...<Link href={`/todos/${todoId}/coments/1`}><a>Detalhes</a></Link></p>
            <p>Comentario: li li li  ...</p>
            <p>Comentario: ta ta ta  ...</p>
            <p>Comentario: test test test ...</p>
        </div>
    )
}