import { useState } from "react"


function RandomColor(){
    const [typeOfColor,setTypeOfColor]=useState('hex')
    const [color,setColor]=useState('#000000')

function randomColorUtility(len){
    return Math.floor(Math.random()*len)
}

function handleGenerateRandom(){
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexcolor="#"

    for(let i=0;i<6;i++){
        hexcolor+=hex[randomColorUtility(hex.length)]
    }
    console.log(hexcolor)
    setColor(hexcolor)
    setTypeOfColor('hex')
}
function handleCreateRgb(){
    const r=randomColorUtility(256);
    const g=randomColorUtility(256);
    const b=randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`)
    setTypeOfColor('rgb')
}
function handleCreateHex(){
    let value=prompt("Give a HEX color, eg:#FF1234")
    if(value.length!==7){
        alert("Give a proper HEX color")
    }
    setColor(value)
    setTypeOfColor('hex')
}

    return (
        <div className="container"
        style={{
            width:'100vw',
            height:'100vh',
            background:color
        }}
        >
            <button className="generateH" onClick={handleCreateHex}>Create HEX color</button>
            <button className="generateRGB" onClick={handleCreateRgb}>Create RGB color</button>
            <button className="generateRand" onClick={handleGenerateRandom}>Generate Random Color</button>
            <span></span>
            <span></span>
            <div
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                color:'white',
                fontSize:'40px',
                marginTop:'100px',
                flexDirection:'column'

            }}
            >   
                <h3>{typeOfColor=="rgb"?"RGB Color:":"HEX Color:"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
        
    )
}

export default RandomColor;