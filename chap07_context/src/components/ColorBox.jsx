import { useContext } from "react";
import { ColorContext } from './../contexts/ColorContext'
import { useSelectColor } from './../contexts/SelectContext'
function ColorBox() {
  const color = useContext(ColorContext);
  // console.log(color);

  const { storeName, color: colorName, changeColor } = useSelectColor()

  return (
    <div className="mb-5">
      <div className="mb-3">
        <h3>COLOR BOX</h3>
        <div>
          {color.storeName}: {color.color}<br />
          <button onClick={color.changeColor}>COLOR</button>
        </div>
      </div>

      <div className="mb-3">
        <div>
          {storeName}: {colorName}<br />
          <button onClick={() => changeColor('파랑')}>SELECT</button>
        </div>
      </div>
    </div>
  );
}
export default ColorBox;
