const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs').promises
const port = 3000;


app.use(express.static(path.join(__dirname, ".." , "public")))
app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})
app.post('/', async (req, res) => {
    try {
        const reqData = req.body

        let readFile = await fs.readFile('src/cpu-data.json', 'utf-8');

        let cpuData = JSON.parse(readFile);

        let nextID = cpuData.length + 1;
        const currentID = 'cpu' + String(nextID).padStart(3, '0')

        const structuredCPU = {
            id: currentID,
            manufacturer: reqData.manufacturer.toUpperCase(),

            specs: {
                model_name: reqData.model_name.toUpperCase() || null,
                cores: Number(reqData.cores) || null,
                threads: Number(reqData.threads) || null,
                base_clock: Number(reqData.base_clock) || null,
                boost_clock: Number(reqData.boost_clock) || null,
                socket: reqData.socket.toUpperCase() || null,
                consumption: Number(reqData.consumption) || null,
                integrated_graphics: reqData.integrated_graphics.toUpperCase() || null
            }
        }

        cpuData.push(structuredCPU);

        await fs.writeFile('src/cpu-data.json', JSON.stringify(cpuData, null, 2));

        console.log("✅ Data saved successfully!");

        res.json({
            success: true
        });

    } catch (error) {

        console.error("❌ Error happened:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})