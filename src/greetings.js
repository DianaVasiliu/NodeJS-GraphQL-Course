const greeting = ({ params }, response) => {
    if (!params.name) {
        response.send('Hello World')
    } else {
        response.send(`Hello, ${params.name}!`)
    }
}

export default greeting
