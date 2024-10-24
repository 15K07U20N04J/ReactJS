import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// function UserContextProvider(children) {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default UserContextProvider