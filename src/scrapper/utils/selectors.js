const SELECTORS = {
  oxford: {
    producto: '.product-item-info',
    nombre: '.product-item-link',
    URL: { selector: 'a.product-item-link', atributo: 'href' },
    precio: '.price',
    imagen: {
      selector: '.product-image-wrapper img.product-image-photo',
      atributo: 'src'
    }
  },
  pedalpro: {
    producto: '.product',
    nombre: 'h2.woocommerce-loop-product__title',
    URL: { selector: '.woocommerce-LoopProduct-link', atributo: 'href' },
    precio: '.price span.woocommerce-Price-amount',
    imagen: { selector: 'a.woocommerce-LoopProduct-link img', atributo: 'src' }
  },
  evobikes: {
    producto: '.item-product',
    nombre: '.item-title',
    URL: { selector: '.item-thumb a', atributo: 'href' },
    precio: '.price',
    imagen: { selector: '.item-thumb img', atributo: 'data-src' }
  },
  crossmountain: {
    producto: '.itemProduct',
    nombre: '.item-title',
    URL: { selector: '.imageContainer a', atributo: 'href' },
    precio: 'span.item-price',
    imagen: { selector: '.imageContainer img', atributo: 'src' }
  },
  smartlife: {
    producto: '.product',
    nombre: '.woocommerce-loop-product__title',
    URL: { selector: '.woocommerce-LoopProduct-link', atributo: 'href' },
    precio: '.price span.woocommerce-Price-amount',
    imagen: {
      selector: 'a.woocommerce-LoopProduct-link img',
      atributo: 'data-src'
    }
  },
  cincoNorte: {
    producto: '.one-third',
    nombre: '.title',
    URL: { selector: '.product-info__caption', atributo: 'href' },
    precio: '.current_price',
    imagen: { selector: '.image-element__wrap img', atributo: 'data-src' }
  },
  decathlon: {
    producto: '.ais-InfiniteHits-item',
    nombre: '.name-product',
    URL: { selector: '.thumbnail', atributo: 'href' },
    precio: '.price',
    imagen: { selector: '.thumbnail img', atributo: 'data-src' }
  },
  velo: {
    producto: '.ProductItem',
    nombre: '.ProductItem__Title',
    URL: { selector: '.ProductItem__Wrapper a', atributo: 'href' },
    precio: '.ProductItem__Price',
    imagen: { selector: '.ProductItem__Image--alternate', atributo: 'data-src' }
  },
  specialized: {
    producto: '.product-list__item-wrapper',
    nombre: '.product-list__name',
    URL: { selector: 'a.product-image', atributo: 'href' },
    precio: '.product-list__item-price',
    imagen: { selector: '.main-product-list-image', atributo: 'data-src' }
  }
}

export default SELECTORS
