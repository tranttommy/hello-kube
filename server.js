const app = require('./src/index')
const { port } = require('./src/config')

const PORT = port || 2309

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))
