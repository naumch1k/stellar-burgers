import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loader } from 'components/Loader'
import { ProfilePageLayout } from 'components/ProfilePageLayout'
import { selectAuthState } from 'store/auth/auth.selectors'

const Profile = () => {
  const { isCheckingUserAccess, isUpdatingToken } = useSelector(selectAuthState)

  return (
    isCheckingUserAccess || isUpdatingToken
    ? <Loader/>
    : <ProfilePageLayout>
        <ProfilePageLayout.SideMenu/>
        <ProfilePageLayout.Content>
          <Outlet/>
        </ProfilePageLayout.Content>
      </ProfilePageLayout>
  )
}

export default Profile
