import MenuIcon from './icons/MenuIcon'
import MenuCloseIcon from './icons/MenuCloseIcon'
import OptionsIcon from './icons/OptionsIcon'
import DashboardIcon from './icons/DashbordIcon'
import DashboardIconAlt from './icons/DashbordIconAlt'
import QuoteIcon from './icons/QuoteIcon'
import QuoteIconAlt from './icons/QuoteIconAlt'
import InvoiceIcon from './icons/InvoiceIcon'
import InvoiceIconAlt from './icons/InvoiceIconAlt'
import SettingsIcon from './icons/SettingsIcon'
import SettingsIconAlt from './icons/SettingsIconAlt'
import ShipmentListIcon from './icons/ShipmentListIcon'
import ShipmentListIconAlt from './icons/ShipmentListIconAlt'

// Gets image path
export const Images = {
  LEAN_TECH_LOGO: require('./images/logo-leantech.png')
}

// Return an Svg component depending of the key
export const Icons = {
  MENU: MenuIcon,
  MENU_CLOSE: MenuCloseIcon,
  OPTIONS: OptionsIcon,
  DASHBOARD_ICON: DashboardIcon,
  DASHBOARD_ICON_ALT: DashboardIconAlt,
  SHIPMENT_LIST_ICON: ShipmentListIcon,
  SHIPMENT_LIST_ICON_ALT: ShipmentListIconAlt,
  QUOTE_ICON: QuoteIcon,
  QUOTE_ICON_ALT: QuoteIconAlt,
  INVOICE_ICON: InvoiceIcon,
  INVOICE_ICON_ALT: InvoiceIconAlt,
  SETTINGS_ICON: SettingsIcon,
  SETTINGS_ICON_ALT: SettingsIconAlt
}
