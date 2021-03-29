class Products {
  constructor() {
    this.classNameActive = 'food__btn_active';
    this.labelAdd = 'В корзину';
    this.labelRemove = 'Из корзины';
  }
  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';

    CATALOG.forEach(({ id, name, price, img, weight }) => {
      let activeClass = '';
      let activeText = '';

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = ' '+this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <li class="food">
          <img class="food__img" src="${img}" />
          <span class="food__name">${name}</span>
          <span class="food__weight">${weight}</span>
          <span class="food__price">${price.toLocaleString()} ₽ </span>
          <button class="food__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
        </li>
      `;
    });
    const html = `
      <ul class="pizzaList">
        ${htmlCatalog}
      </ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
