import fetch from 'node-fetch'

const dogFacts = (req, res) => {
    fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=7')
        .then((response) => {
            return response.json()
        })
        .then((body) => {
            const facts = body.map(({ fact }) => fact)
            res.send(facts)
        })
}

export default dogFacts
