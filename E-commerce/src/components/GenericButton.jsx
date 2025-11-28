export default function GenericButton ({name, color}){
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