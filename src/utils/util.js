export async function customWare (req, res, next) {
    let cache = {}
    const key = req.url 
    if (cache[key]) {
        res.send('from cache')
    } else {
        res.sendResponse = res.send
        res.send = (body) => {
            cache[key] = body
            res.sendResponse(body)
        }
        next()
    }
}