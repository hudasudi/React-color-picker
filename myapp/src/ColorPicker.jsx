
import React,{useState} from "react"
function ColorPicker(){

const [color,setColor] = useState("#ffffff");

function handleColorChange(event){
  setColor(event.target.value);
}
return(<div>
    <h1>Color Picker</h1>
    <p>Selected Color: {color}</p>
    <label>Select Color: </label>
    <input type="color" value={color} onChange={handleColorChange}></input>
</div>);

}

export default ColorPicker