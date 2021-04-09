// next.js custom hooks
import { useRouter } from "next/router"


export default function User() {
  // opn an instance of useRouter
  const router = useRouter()

  // pull the path param from router object
  const { uid } = router.query

  return(
    <div>
      <h1>Hello User { uid }! </h1>
    </div>
  )
}