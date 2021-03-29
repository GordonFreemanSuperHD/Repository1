function Complete1()
        {
            if(document.Sel1.Paswrd.value==document.Sel1.Paswrd1.value)
                alert("Вас зарегистрировали\nID="+document.Sel1.fio.value+"\nPassword="+document.Sel1.Paswrd.value);
            else
                alert("Ошибка при вводе пароля\nПопробуйте еще раз");
        }
