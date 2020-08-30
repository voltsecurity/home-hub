import cameraIcon from '../../assets/camera-filled.png';
import keyIcon from '../../assets/key-icon.png';
import houseIcon from '../../assets/house-filled.png';
import robotIcon from '../../assets/robot-icon.png';
import infoIcon from '../../assets/info-white.png';
import dashIcon from '../../assets/dashboard-icon.png';
import gearIcon from '../../assets/gear-icon.png';

const MENU_ITEMS_DATA = [
    {
        name: 'Dashboard',
        icon: dashIcon,
        linkUrl: '/dashboard'
    },
    {
        name: 'Access Control',
        icon: keyIcon,
        linkUrl: '/access'
    },
    {
        name: 'Intruder Detection',
        icon: houseIcon,
        linkUrl: '/intruder'
        
    },
    {
        name: 'CCTV',
        icon: cameraIcon,
        linkUrl: '/cctv'
    },
    {
        name: 'Automation',
        icon: robotIcon,
        linkUrl: '/automation'
    },
    {
        name: 'Settings',
        icon: gearIcon,
        linkUrl: '/settings'
    },
    {
        name: 'Information',
        icon: infoIcon,
        linkUrl: '/assetlist'
    }
];

export default MENU_ITEMS_DATA;