import { LIST } from './todos'
import { FILTER } visibilityFilter from './visibilityFilter'

const stateClasses = {
  FILTER: FILTER.INIT(),
  LIST: LIST.INIT(),
}

const reducer = (state = {}, action) => {
  var stateType = action.type[0];
  var stateMethod = action.type[1];
  ((stateClasses[stateType])[stateMethod])(state[stateType], action)
}

export default reducer
