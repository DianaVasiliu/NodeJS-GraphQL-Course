import fetch from 'node-fetch'

const books = async (req, res) => {
    fetch(
        'http://libgen.rs/json.php?ids=1,2,3,4,6,7,8,9&fields=Title,Author,Year,Pages,Id'
    )
        .then((response) => {
            return response.json()
        })
        .then((body) => {
            const books = body.map(({ title, author }) => ({
                title,
                author,
            }))

            res.send(books)
        })
}

export default books
