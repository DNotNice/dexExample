import express from "express";
const app = express();

app.use(express.json())
app.listen(3000 , ()=>{console.log("server up 3000")});

let Houses = 10 ; 
let Money = 20 ;

app.post("/buy-asset" ,(req ,res)=>{
    const houseToBuy = req.body.quantity ; 
    const constProdMarket = Houses * Money ; 
    const updatedHouse = Houses - houseToBuy; 
    const updatedMoney  = constProdMarket/updatedHouse;
    const moneyPaid = updatedMoney  - Money ; 
    Houses = updatedHouse ; 
    Money = updatedMoney ; 

    return res.json({
        message : `You paid ${moneyPaid} for ${houseToBuy} houses` 
    });
});

app.post("/sell-asset" , (req,res)=>{
    const HouseToSell = req.body.quantity ; 
    const constProdMarket = Houses * Money ; 
    const updatedHouse = Houses + HouseToSell; 
    const updatedMoney  = constProdMarket/updatedHouse;
    const gottenUSDC = Money - updatedMoney; 
    Houses = updatedHouse  ; 
    Money = updatedMoney; ;
    return res.json({
        message : `You got ${gottenUSDC} USDC for ${HouseToSell} Houses` 
    });
});
