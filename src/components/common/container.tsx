import React from 'react'

const Container = ({ className, children }: any) => {
    return (
        <div className={`${className} my-20 max-w-6xl m-auto`}>
            {children}
        </div>
    )
}

export default Container
