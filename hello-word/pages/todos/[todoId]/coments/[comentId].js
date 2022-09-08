import { useRouter } from "next/router";
export default function Comment() {
    const router = useRouter();
    const todId = router.query.todoId;
    const commentId = router.query.comentId;

    return (
        <div>
            <p>o todo é {todId}</p>
            <p>O commentId é {commentId}</p>
        </div>
    )
}