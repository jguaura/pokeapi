import app from './app'
import '@babel/polyfill'

async function main() {
    await app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`) )
}

main()