import './App.css'

function App() {


    console.log('123')
  return (
      <footer className={"text-white bg-black static font-light "}>
          <div className={" p-5 w-full grid gap-2 grid-cols-1 md:grid-cols-5"}>

              <div id={"Menu "}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-medium mb-2"}>Меню</li>
                      <li>
                          <button className={"hover:underline"}>Головна</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Каталог</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Про нас</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Контакти</button>
                      </li>
                  </ul>
              </div>
              <div id={"User"}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-medium mb-2"}>
                          Користувачу
                      </li>
                      <li>
                          <button className={"hover:underline"}>Мої замовлення</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Мої повернення</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Мої дані</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Адреси</button>
                      </li>
                  </ul>
              </div>
              <div id={"Category"}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-medium mb-2"}>
                          Категорії
                      </li>
                      <li>
                          <button className={"hover:underline"}>Лед екрани</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Музична апаратура</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Світло</button>
                      </li>
                  </ul>
              </div>
              <div id={"User"}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-medium mb-2"}>
                          ДОСТАВКА ТА ПОВЕРНЕНЯ
                      </li>
                      <li>
                          <button className={"hover:underline"}>Способи оплати</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Вартість та час доставки</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Методи повернення</button>
                      </li>
                  </ul>
              </div>
              <div id={"User"}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-medium mb-2"}>
                          ГРАФІК РОБОТИ
                      </li>
                      <li>
                          <button className={"hover:underline"}>
                              ПН-ПТ: 9:00-18:00
                          </button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>
                              СБ-НД: вихідний
                          </button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>
                              +380 12 345 6789
                          </button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>
                              glowen@gmail.com
                          </button>
                      </li>
                  </ul>

              </div>
              <div className="foot">
                  <ul className={"grid grid-flow-col gap-4 w-80"}>
                      <li><img src="../public/img_4.png" alt=""/></li>
                      <li><img src="../public/img_1.png" alt=""/></li>
                      <li><img src="../public/img_2.png" alt=""/></li>
                      <li><img src="../public/img_3.png" alt=""/></li>
                      <h1>Платіть Карткою:</h1>
                  </ul>


              </div>
              <div className={"grid  gap-4 text-white grid-flow-col "}>
                  <div className={"w-80 grid grid-cols-6 grid-flow-col "}>
                      <img src="../public/visa.png" alt="VISA"/>
                      <img src="../public/mastercard.png" alt="MasterCard"/>
                      <img src="../public/apay.png" alt="ApplePay"/>
                      <img src="../public/gpay.png" alt="GooglePay"/>
                      <img src="../public/visa.png" alt="LiqPay"/>
                  </div>
              </div>
              <div className="copy">
                  Glowen & 2024
              </div>
          </div>
      </footer>
  )
}

export default App
