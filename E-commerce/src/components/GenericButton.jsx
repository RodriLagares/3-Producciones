export default function GenericButton ({nema, color}){
    const myStyles = {
        backgroundColor: color,
        fontFamily: 'monospace',
        color: 'white'
    }
    return (
        <>
        <button style={myStyles}>{name}</button>
        </>
    )
}