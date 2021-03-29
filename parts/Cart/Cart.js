class Cart {
    handleClear() {
        ROOT_CART.innerHTML = '';
    }
    buyer() {
      var fio = document.getElementById('fio').value
      var address = document.getElementById('address').value
      var tel = document.getElementById('tel').value
      let sum = 0;
      let order = `Благодарим Вас за заказ!`

      if ( fio === "") {alert('Заполните ФИО')}
      else if( address === "") {alert('Заполните адрес')}
      else if( tel === "") {alert('Заполните телефон')}
      else {
        alert('Заказ оформлен, ждите звонка')
      }
    };
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-part__name">${name}</td>
                        <td class="shopping-part__price">${price.toLocaleString()} ₽</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });
        const html = `
            <div class="cart-container">
                <div class="cart__close" onclick="cartPage.handleClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="cart-part__name">Сумма:</td>
                        <td class="cart-part__price">${sumCatalog.toLocaleString()} ₽</td>
                    </tr>
                </table>
                <form name="info">
                            <ul class="cart-part__list-info">
                            <li>
                                <label>ФИО:</label>
                                <input type="text" id="fio" name="name" class="cart-part__info" placeholder="Фамилия Имя Отчество">
                            </li>
                            <li>
                                <label>Адрес:</label>
                                <textarea id="address" class="cart-part__info" placeholder="Город, Улица, Дом, Квартира"></textarea>
                            </li>
                            <li>
                                <label>Телефон:</label>
                                <input type="tel" id="tel" name="tel" class="cart-part__info" placeholder="+7XXXXXXXXXX">
                            </li>
                            </ul>
                </form>
                <div>
                  <button class="cart-part__btn_buy" onclick="cartPage.buyer()">Оформить заказ</button>
                </div>
            </div>

        `;
        ROOT_CART.innerHTML = html;
    }
}

const cartPage = new Cart();
