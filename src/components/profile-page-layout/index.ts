import { ProfilePageLayout as Component } from './profile-page-layout'
import { ProfilePageLayoutSideMenu } from './side-menu'
import { ProfilePageLayoutContent } from './content'

const ProfilePageLayout = Object.assign(Component, {
  SideMenu: ProfilePageLayoutSideMenu,
  Content: ProfilePageLayoutContent,
})

export default ProfilePageLayout
