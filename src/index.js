import app from './app'
import '@babel/polyfill'

async function main() {
    await app.listen(process.env.PORT || 4000, () => console.log(`Listening on port ${process.env.PORT || 4000}`) )
}

main()