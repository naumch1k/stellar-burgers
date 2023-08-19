import { ProfilePageLayout as Component } from './profile-page-layout'
import { ProfilePageLayoutSideMenu } from './side-menu'

const ProfilePageLayout = Object.assign(Component, {
  SideMenu: ProfilePageLayoutSideMenu,
})

export default ProfilePageLayout
