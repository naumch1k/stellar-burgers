import { ProfilePageLayout as Component } from './ProfilePageLayout'
import { ProfilePageLayoutSideMenu } from './SideMenu'
import { ProfilePageLayoutContent } from './Content'

export const ProfilePageLayout = Object.assign(Component, {
  SideMenu: ProfilePageLayoutSideMenu,
  Content: ProfilePageLayoutContent,
})
