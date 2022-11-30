import { useMemo } from 'react'
import {
  useParams,
  useLocation,
  Params,
  Location,
  useNavigate,
  NavigateFunction,
} from 'react-router-dom'
import queryString from 'query-string'
// Hook
type QueryParam = { [key: string]: string | (string | null)[] | null | undefined }
export interface useMemoReurnType {
  pathname: string
  query: QueryParam
  location: Location
  navigate: NavigateFunction
}
export const useRouter = () => {
  const params: Params = useParams()
  const location: Location = useLocation()
  const navigate: NavigateFunction = useNavigate()
  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  const memoizedvalue = useMemo<useMemoReurnType>(() => {
    return {
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      // access to extra React Router functionality if needed.
      location,
      navigate,
    }
  }, [params, location, navigate])

  return memoizedvalue
}
