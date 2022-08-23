import { useEffect, useState } from 'react'

// put the length that you want to be greater so that the search component is activated
const useSearchBoolean = ({ search, lengthExpect }: {search: string, lengthExpect: number}) => {
  const [searchLength, setSearchLength] = useState(false)
  useEffect(() => {
    if (search.length > lengthExpect) {
      setSearchLength(true)
    } else {
      setSearchLength(false)
    }
  }, [search.length, lengthExpect])

  return searchLength
}

export default useSearchBoolean
