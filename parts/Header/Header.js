class Header {
  handlerOpenCartPage() {
    cartPage.render();
  }
  render(count) {
    const html = `
      <div class="header-main">
      <h1>ГорбачТайм</h1>
        <div class="header-amount" onclick="headerPage.handlerOpenCartPage();">
          Корзина ${count}
        </div>
        <div class="registration"><a href="Registration.html">Регистрация</a></div>
        <div class="sign-in">Войти в аккаунт</div>
      </div>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
