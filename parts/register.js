class Header {
  handlerOpenCartPage() {
    cartPage.render();
  }
  render(count) {
    const html = `
      <div class="header-main">
      <h1>ГорбачТайм</h1>
      <h1>Регистрация</h1>
        <div class="go_back" onclick="">
          <a href="index.html">В магазин</a>
        </div>
      </div>
      <div class="registration_menu">
        <div class="registration__something">
          <p>Добро пожаловать! Добро пожаловать на сайт ГорбачТайм, сами вы его выбрали, или его выбрали за вас — это лучший сервис по доставке пиццы.</p>
          <div id="Plushcka1">
            <form name="Sel1">
                <TABLE>
                    <TR><TD><B>ФИО:<B></TD>
                        <TD><input id="fio" class="information" placeholder="Фамилия, Имя, Отчество" onBlur="this.value=this.value.toUpperCase()">
                        </TD></TR>
                    <TR><TD><B>Пароль:<B></TD>
                        <TD><input id="password" class="information" name="Paswrd" placeholder="Пароль" onFocus="this.select();">
                        </TD></TR>
                    <TR><TD><B>Проверка пароля:<B></TD>
                        <TD><input id="password" class="information" name="Paswrd1" placeholder="Повторите пароль" onFocus="this.select();">
                        </TD></TR>
                </TABLE>
                <div class="input">
                        <input type="button" class="btn__1" value="Регистрация" onClick="Complete1();">
                        <input type="reset" class="btn__1" value="Сброс">
                </div>
          </form>
          </div>
          <p>Зарегистрируйтесь на нашем сайте чтобы получить вероятность-сюрприз при доставке вам пиццы, случайная бонусная пицца в подарок!</p>
        </div>
      <div>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
