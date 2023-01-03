function Welcome (props, children){
    console.log(props)
    return <><h1>Bonjour {props.nom} {props.name}</h1>
    <p>
        {children}
    </p>
    </>
}


ReactDOM.render(<Welcome name="Steven" nom='LADOUR'>Le saumon c bon</Welcome>, document.querySelector('main'))