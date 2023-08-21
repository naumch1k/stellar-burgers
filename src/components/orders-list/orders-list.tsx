import { useEffect } from 'react'
import { useAppDispatch } from '../../store/store'
import { connect, disconnect } from '../../store/web-socket/operations'
import { WS_BASE_URL } from '../../shared/constants/ws-base-url'

export const OrdersList = () => {
  const dispatch = useAppDispatch()
  // TODO: refactor to helper func
  const accessToken = localStorage.getItem('accessToken')?.split('Bearer ')[1]

  useEffect(() => {
    dispatch(connect(`${WS_BASE_URL}?token=${accessToken}`))

    return () => {
      dispatch(disconnect())
    }
  }, [])

  return (
    <>list</>
  )
}
