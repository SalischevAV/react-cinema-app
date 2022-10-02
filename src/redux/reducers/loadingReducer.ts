export const LOADING = 'LOADING';
export const LOADING_FINISHED = 'LOADING_FINISHED';

interface loadingAction {
  type: typeof LOADING | typeof LOADING_FINISHED;
}

export interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false
};

export default (state = initialState, action: loadingAction) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case LOADING_FINISHED:
      return {
        ...state,
        loading: false
      };
    default:
      return {
        ...state
      };
  }
};
