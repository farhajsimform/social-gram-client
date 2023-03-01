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
  const memoizedvalue = useMemo<useMemoReurnType>(() => {
    return {
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      location,
      navigate,
    }
  }, [params, location, navigate])

  return memoizedvalue
}
