import { Outlet } from 'react-router-dom'
import ProfilePageLayout from '../../components/profile-page-layout'


const Profile = () => {
  return (
    <ProfilePageLayout>
      <ProfilePageLayout.SideMenu/>
      <Outlet />
    </ProfilePageLayout>
  )
}

export default Profile
