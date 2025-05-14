// This is functional component

function Card1(props) {
    const {name, desc} = props
    return (
        <>
            <h2>{name}</h2>
            <h3>{desc}</h3>
        </>
    )
}

export default  Card1;