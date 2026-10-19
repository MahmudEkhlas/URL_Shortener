import express from 'express'


const app = express();
const port = 5175;



app.listen(port, () => console.log(`Server has started at Port no: ${port}`));