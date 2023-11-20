import app from './src/app.js'
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server escutando em http://localhost:${port}`)
})
