import {useDispatch,useSelector} from 'react-redux';
import {increment, decrement} from './app/stores/counter'


function Counter() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button 
        onClick={() => dispatch(decrement())}>
          Azalt
        </button>
        <p>{count}</p>
        <button
        onClick={() => dispatch(increment())}>
          Arttır.
        </button>
      </div>
    </div>
  );
}

export default Counter;
