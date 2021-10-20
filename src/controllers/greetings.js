const handleGreeting = ({ params }, response) => {
    if (!params.name) {
        response.send('Hello World')
    } else {
        let message = `Hello, ${params.name}!`
        response.send(message)
    }
}

export default handleGreeting
