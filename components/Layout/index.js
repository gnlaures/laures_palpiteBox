import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ( {children} ) => {
    return(
        <div>
            <Header></Header>
            <div className="container mx-auto">
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout