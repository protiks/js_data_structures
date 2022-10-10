import { useSession, signIn, signOut } from "next-auth/react"

const LoginButton = () => {
    const { data: session } = useSession()
    if (session) {
        <>
        <div>Signed In as {session.user?.name}</div>
        <button onClick={() => signOut()}>Sign Out</button>
        </>
    }
    return (
        <>
            <div>Not Signed In</div>
            <button onClick={() => signIn()}>Sign In</button>
        </>
    )
}

export default LoginButton 