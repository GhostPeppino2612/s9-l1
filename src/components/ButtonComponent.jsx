

function ButtonComponent(props) {
    const prop = {
        width: "200px",
        fontSize: "2em",
        marginBlock: "3em",
        marginInline: "auto",
        display: "block"
    }
    
    return (
        <>
            <button style={prop} type="button">{props.name}</button>
        </>
    )
}

export default ButtonComponent