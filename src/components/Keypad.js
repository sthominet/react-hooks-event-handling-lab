// Code Keypad Component Here
function Keypad () {

    function password() {
        console.log('Entering password...')
    }

    return (
        <input onChange={password}type="password" />
    );
}

export default Keypad;