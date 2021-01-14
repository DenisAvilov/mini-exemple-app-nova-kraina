const INITIALIZATION_SUCCESS = 'NOVA-KRAINA/INITIALIZATION-SUCCESS'
let initialSuccess = {
  success: false,
}
const initialization = ( state = initialSuccess, action: any ): SuccessType => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS: {
      return {
        ...state,
        success: true,
      }
    }
    default:
      return state;
  }
}
export default initialization;
type SuccessType = typeof initialSuccess

