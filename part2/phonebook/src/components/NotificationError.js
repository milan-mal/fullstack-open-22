const NotificationError = ({ messageError }) => {
    const messageStyle = {
        color: 'red',
        fontSize: 20,
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    if ( messageError === null )
        return null

    return (
        <div style={messageStyle}>
            {messageError}
        </div>
    )
}
 
export default NotificationError;