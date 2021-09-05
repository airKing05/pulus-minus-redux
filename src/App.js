import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './actions/index';

function App() {
  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>welcome to react redux</h1>
      <h3>Increament and Decrement Counter </h3>
      <h4>by using the react redux</h4>
      <div className="quntity">
        <a className="quntity_minuse" title="Decrement"
        onClick = { ()=> dispatch(decNumber()) }> <span> - </span></a>
        <input name="quntity" type="text" className="quntity_input" value={myState} />
        <a className="quntity_plus" title="Increment" 
        onClick = { ()=> dispatch(incNumber(10)) } > <span> + </span></a>
      </div>
    </div>
  );
}

export default App;
