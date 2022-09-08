import Link from "next/link";

export default function NotFound() {
   return (
    <div>
        <h1>404</h1>
        <p>Esta pagina não foi encontrada</p>
        <Link href="/"><a>Voltar para o Home!!!</a></Link>
    </div>  
   )
}