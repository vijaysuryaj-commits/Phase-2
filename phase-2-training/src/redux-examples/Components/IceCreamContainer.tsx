// import { connect } from 'react-redux'
// import { buyIcecream } from '../redux'
// import { useState } from 'react'

// function IceCreamContainer(props) {
//   const [number, setNumber] = useState(1)
//   return (
//     <div>
//       <h2>Number of icecreams - {props.numOfIcecreams}</h2>
//       <input type='text' onChange={(e) => setNumber(Number(e.target.value))} />
//       <button onClick={() => props.buyIcecream(number)}>Buy {number} IceCream</button>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     numOfIcecreams: state.icecream.numOfIcecreams
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     buyIcecream: (number) => dispatch(buyIcecream(number))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)

import { connect } from "react-redux";
import { buyIcecream } from "../redux-toolkit/icecreamSlice";
import { useState } from "react";

function IceCreamContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of Icecreams - {props.numOfIcecreams}</h2>

      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => props.buyIcecream(number)}>
        Buy {number} IceCreams
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfIcecreams: state.icecream.numOfIcecreams
});

const mapDispatchToProps = (dispatch) => ({
  buyIcecream: (num = 1) => dispatch(buyIcecream(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
