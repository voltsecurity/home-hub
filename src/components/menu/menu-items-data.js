import homeIcon from '../../assets/home-white.png';
import boxIcon from '../../assets/box-white.png';
import buildingIcon from '../../assets/building-white.png';
import formIcon from '../../assets/form-white.png';
import infoIcon from '../../assets/info-white.png';

const MENU_ITEMS_DATA = [
    {
        name: 'Home',
        icon: homeIcon,
        linkUrl: '/'
    },
    {
        name: 'My Assets',
        icon: boxIcon,
        linkUrl: '/assets/assetlist'
    },
    {
        name: 'My Sites',
        icon: buildingIcon,
        linkUrl: '/assets/assetlist'
        
    },
    {
        name: 'Templates',
        icon: formIcon,
        linkUrl: '/'
    },
    {
        name: 'Information',
        icon: infoIcon,
        linkUrl: '/'
    }
];

export default MENU_ITEMS_DATA;