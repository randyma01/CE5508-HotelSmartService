import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import category from './content/category';
import menu from './content/menu';
//import product from './content/product';
import productVariant from './productVariant';
import room from './content/room';
import service from './content/service';
//import vendor from './content/vendor';

import localeString from './locale/String';
import localeText from './locale/Text';
import localeBlockContent from './locale/BlockContent';

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    /*schemas for the content */
    category,
    menu,
    //product,
    //vendor,
    service,
    room,
    /*structure for schemas */
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant
  ])
});
