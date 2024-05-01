import React from "react";
import ReactDOM from "react-dom/client"

// React element = object => when we render its to DOM then its beacome html

// JSX - we can write react without JSX 

// react functional components 

const Title = () =>{
    return (<h1>Title</h1>)
}

const HeadingComponent = () =>{
    return (
        <div>
            <Title/>
        <h1>this is heading</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent></HeadingComponent>)