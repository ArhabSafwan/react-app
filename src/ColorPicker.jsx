import { useState } from "react";
function Colorpicker(){
    const [color, setColor] = useState("white");
    function handleColorChange(event) {
        setColor(event.target.value);
    }
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-info" style={{ backgroundColor: color }}>
                <h2>Selected Color: {color}</h2>
            </div>
            <label htmlFor="color">Choose a color:</label>
            <input
                type="color"
                id="color"
                value={color}
                onChange={handleColorChange}
            />
        </div>
    );
}
export default Colorpicker;