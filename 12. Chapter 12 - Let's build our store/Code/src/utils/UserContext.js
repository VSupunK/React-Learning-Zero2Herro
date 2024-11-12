import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Guest",
})

export default UserContext;