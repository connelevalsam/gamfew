import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = ({ children }) => {
    const [userCtx, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)

    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user)
            netlifyIdentity.close()
            console.log("login event...")
        })

        netlifyIdentity.on('logout', () => {
            setUser(null)
            console.log('logout event')
        })

        netlifyIdentity.on('init', (user) => {
            setAuthReady(true)
            setUser(user)
        })
        
        netlifyIdentity.init()

        return () => {
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
    }, [])

    const loginCtx = () => {
        netlifyIdentity.open()
    } 

    const logoutCtx = () => {
        netlifyIdentity.logout()
    }

    const ctx = {
        user: userCtx,
        login: loginCtx,
        logout: logoutCtx,
        authReady,
    }

    return (
        <AuthContext.Provider value={ctx}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;