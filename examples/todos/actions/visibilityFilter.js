import {makeActionType, makeStateType} from './magic'

export const FILTER = {
  SET_VISIBILITY_FILTER: function(state, action) {
    return action.filter;
  }

  INIT: function() {
    return 'SHOW_ALL';
  }
}
makeStateType({FILTER});

export const setVisibilityFilter = (filter) => {
  return {
    type: makeActionType(FILTER.SET_VISIBILITY_FILTER),
    filter
  }
}
