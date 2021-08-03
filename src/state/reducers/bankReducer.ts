

const reducer = (state, action) => {
  switch(action.type){
    case "deposit":
      return state + action.payload
  }
}