import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

const getRandomRating = () => {
  return (Math.random() * 4 + 1).toFixed(1);
};

export const products = [
  {
    _id: uuid(),
    title: 'Minecraft',
    price: 1200,
    discount: 0,
    categoryName: 'Games',
    rating: getRandomRating(),
    imageURL:
      'https://store-images.s-microsoft.com/image/apps.17382.13510798887677013.afcc99fc-bdcc-4b9c-8261-4b2cd93b8845.49beb011-7271-4f15-a78b-422c511871e4',
  },
  {
    _id: uuid(),
    title: 'The Witcher 3: Wild Hunt',
    price: 1000,
    discount: 20,
    categoryName: 'Games',
    rating: getRandomRating(),
    imageURL:
      'https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64',
  },
  {
    _id: uuid(),
    title: 'Grand Theft Auto V',
    price: 2500,
    discount: 10,
    categoryName: 'Games',
    rating: getRandomRating(),
    imageURL:
      'https://store-images.s-microsoft.com/image/apps.8135.66515090704019777.7fa547c1-c211-4229-a4d3-3ceef762e0a4.0bb0ac0a-9d63-4d91-8e53-f2e39a040bcd',
  },
  {
    _id: uuid(),
    title: 'Uncharted: Legacy of Thieves Collection',
    price: 4299,
    discount: 0,
    categoryName: 'Games',
    rating: getRandomRating(),
    imageURL:
      'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-uncharted-collection-image-block-01-en-31jan22?$1600px$',
  },
  {
    _id: uuid(),
    title: 'Watch Dogs Legion',
    price: 3999,
    discount: 0,
    categoryName: 'Games',
    rating: getRandomRating(),
    imageURL:
      'https://store-images.s-microsoft.com/image/apps.18275.65664549497403424.a741b357-ecc5-4fa6-bfad-4f3a95f27506.87ae0e0d-537a-4730-a6bb-c2fbd19ae709',
  },
  {
    _id: uuid(),
    title: 'Forza Horizon 5: Premium Edition',
    price: 6599,
    discount: 5,
    categoryName: 'Games',
    rating: getRandomRating(),
    imageURL:
      'https://store-images.s-microsoft.com/image/apps.23625.13806078025361171.9723cf5e-1e29-4d9d-ad0a-cc37a95bb75d.e02f4ead-d89b-45cd-8eb5-5dcbf44ae91f',
  },
  {
    _id: uuid(),
    title: 'Star Wars Battlefront 2',
    price: 2500,
    discount: 0,
    categoryName: 'Games',
    rating: getRandomRating(),
    imageURL:
      'https://store-images.s-microsoft.com/image/apps.59752.13982743944721264.aba8e5da-4441-4232-a0e1-21747a781f2b.42aa9607-05b4-44e7-93d2-d583d90e7a69',
  },
  {
    _id: uuid(),
    title: 'Xbox Series X',
    price: 44900,
    discount: 5,
    categoryName: 'Consoles',
    rating: getRandomRating(),
    imageURL:
      'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png',
  },
  {
    _id: uuid(),
    title: 'Xbox Series S',
    price: 34990,
    discount: 0,
    categoryName: 'Consoles',
    rating: getRandomRating(),
    imageURL:
      'https://compass-ssl.xbox.com/assets/fc/b5/fcb5fbdf-009b-4a09-8850-e2825a84f89a.png?n=0202999-BuyBox03_Image-D.png',
  },
  {
    _id: uuid(),
    title: 'PlayStation 5',
    price: 45000,
    discount: 0,
    categoryName: 'Consoles',
    rating: getRandomRating(),
    imageURL:
      'https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$1600px--t$',
  },
  {
    _id: uuid(),
    title: 'Nintendo Switch',
    price: 23400,
    discount: 0,
    categoryName: 'Consoles',
    rating: getRandomRating(),
    imageURL:
      'https://assets.nintendo.com/image/upload/f_auto,h_369,q_auto,w_554/ncom/en_US/hardware/switch/nintendo-switch-new-package/promo?v=2022022204',
  },
  {
    _id: uuid(),
    title: 'Valve Steam Deck',
    price: 32499,
    discount: 7,
    categoryName: 'Consoles',
    productRating: getRandomRating(),
    imageURL: 'https://cdn.cloudflare.steamstatic.com/steamdeck/images/ver2/overview3options.png',
  },
  {
    _id: uuid(),
    title: 'Xbox Sterio Headset',
    price: 5990,
    discount: 0,
    categoryName: 'Accessories',
    rating: getRandomRating(),
    imageURL:
      'https://compass-ssl.xbox.com/assets/67/84/6784e5e5-49f8-4785-bf38-3bf5db0a5b29.jpg?n=Accessories-Hub_Content-Placement-0_300350_788x444.jpg',
  },
  {
    _id: uuid(),
    title: 'Switch Joy-Con Set',
    price: 6000,
    discount: 5,
    categoryName: 'Accessories',
    rating: getRandomRating(),
    imageURL:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto,bo_15px_solid_white,c_pad,dpr_1.0,f_auto,q_auto,w_700/b_rgb:ffffff/v1/ncom/en_US/products/accessories/nintendo-switch/controllers/joy-con-controllers/joy-con-set-l-r/nintendo_switch-joy-con-sets-pink_green-neonred_neonblue-blue_neonyellow-purple_orange-gray_gray-1200x675',
  },
  {
    _id: uuid(),
    title: 'Xbox Expansion Card (1TB)',
    price: 10000,
    discount: 0,
    categoryName: 'Accessories',
    rating: getRandomRating(),
    imageURL:
      'https://compass-ssl.xbox.com/assets/70/f2/70f2d15d-e1b3-4719-a3bb-46dcf76d3b26.jpg?n=Accessories-Hub_Content-Placement-0_999482_788x444.jpg',
  },
];
