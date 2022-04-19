import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IMenuItemDTO} from '@model/menu/index';
import {ROUTER_CONST} from '@model/route';

export const MENU_CONFIG: IMenuItemDTO[] = [
  {label: 'Home', path: ROUTER_CONST.HOME.path, position: 'left'},
  {label: 'Catalog', path: ROUTER_CONST.PRODUCT_LIST.path, position: 'left'},
  {label: 'Quotes', path: ROUTER_CONST.QUOTE_LIST.path, position: 'left'},
  {
    icon: <FavoriteIcon />,
    path: ROUTER_CONST.WISH_LIST.path,
    position: 'right',
  },
  {icon: <ShoppingCartIcon />, path: ROUTER_CONST.CART.path, position: 'right'},
  {icon: <PersonIcon />, path: ROUTER_CONST.PROFILE.path, position: 'right'},
];
