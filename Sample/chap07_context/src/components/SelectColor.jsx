import { useContext } from "react"

function SelectColor() {
  return (
    <div className="mb-5">
      <div className="mb-3">
        <h3>SELECT BOX</h3>
        <div>
          COLOR: <br />
          <button>COLOR</button>
        </div>
      </div>

      <div className="mb-3">
        <div>
          COLOR: <br />
          <button>SELECT</button>
        </div>
      </div>
    </div>
  )
}
export default SelectColor
