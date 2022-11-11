import Wrapper from "./DashWrapper"
import Header from "./Header"
import Dashboard from "./Dashboard"
import { useState } from "react"

const Layout = (props) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <Header  setShow={setShow} profileIcon={props.profileIcon} />
            <Wrapper>
                {show ? <Dashboard /> : null}

            </Wrapper>
        </>
    )
}

export default Layout;