import { Outlet } from 'react-router-dom'
import { ProfilePageLayout } from 'components/ProfilePageLayout'

const Profile = () => (
  <ProfilePageLayout>
    <ProfilePageLayout.SideMenu/>
    <ProfilePageLayout.Content>
      <Outlet />
    </ProfilePageLayout.Content>
  </ProfilePageLayout>
)

export default Profile
