import { videoReducer } from '../slices/video'
import { searchReducer } from '../slices/search'
import { filterReducer } from '../slices/filter'
import { savedReducer } from '../slices/saved'

const reducer = {
  videoReducer,
  searchReducer,
  filterReducer,
  savedReducer
}

export default reducer
