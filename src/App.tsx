import './App.css';
import img1 from '../public/img_1.png';
import img2 from '../public/img_2.png';
import img3 from '../public/img_3.png';
import img4 from '../public/img_4.png';
import visa from '../public/visa.png';
import mastercard from '../public/mastercard.png';
import apay from '../public/apay.png';
import gpay from '../public/gpay.png';
import liqpay from '../public/liqpay.png';


function App() {
  return (
      <footer className={"Menus bg-black text-white p-10 "}>
          <div className={"inline-grid grid-cols-1 md:grid-cols-5  w-full max-md:gap-2"}>
              <ul className={"rounded-lg w-full justify-center items-center inline-grid max-md:border-2"}>
                  <li className={" font-semibold mb-5"}>МЕНЮ</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Головна</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Каталог</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Про нас</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Контакти</li>
              </ul>
              <ul className={"rounded-lg w-full justify-center items-center inline-grid max-md:border-2"}>
                  <li className={" font-semibold mb-5"}>КОРИСТУВАЧУ</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Мої замовлення</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Мої повернення</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Мої дані</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Адреси</li>
              </ul>
              <ul className={"rounded-lg w-full justify-center items-center inline-grid max-md:border-2"}>
                  <li className={" font-semibold mb-5"}>КАТЕГОРІЇ</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Лед екрани</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Музична апаратура</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Світло</li>
              </ul>
              <ul className={"rounded-lg w-full justify-center items-center inline-grid max-md:border-2"}>
                  <li className={" font-semibold mb-5"}>ДОСТАВКА ТА ПОВЕРНЕННЯ</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Способи оплати</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Вартість та час доставки</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>Методи повернення</li>
              </ul>
              <ul className={"rounded-lg w-full justify-center items-center inline-grid max-md:border-2"}>
                  <li className={" font-semibold mb-5"}>ГРАФІК РОБОТИ</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>ПН-ПТ: 9:00-18:00</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>СБ-НД: вихідний</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>+380 12 345 6789</li>
                  <li className={"hover:underline cursor-pointer mb-2"}>gmail@gmail.com</li>
              </ul>
          </div>
          <div className={"inline-grid grid-flow-col mt-10 columns-5 grid-cols-2"}>

              <section className={"grid grid-flow-col items-center grid-cols-4 w-40 gap-4 text-2xl"}>
                  <img className={"cursor-pointer"} src={img1} alt=""/>
                  <img className={"cursor-pointer"} src={img2} alt=""/>
                  <img className={"cursor-pointer"} src={img3} alt=""/>
                  <img className={"cursor-pointer"} src={img4} alt=""/>
              </section>

              <section className="inline-grid grid-flow-col justify-center items-center text-2xl gap-5 h-10">
                  <h1 className="">Платіть карткою:</h1>
                  <img className="cursor-pointer" src={visa} alt="Visa"/>
                  <img className="cursor-pointer" src={mastercard} alt="MasterCard"/>
                  <img className="cursor-pointer" src={apay} alt="Apple Pay"/>
                  <img className="cursor-pointer" src={gpay} alt="Google Pay"/>
                  <img className="cursor-pointer" src={liqpay} alt="LiqPay"/>
              </section>

          </div>
          <div className="copy float-right pt-5">
              <p className={"inline-grid columns-0"}>Glowen &copy; 2024</p>

          </div>
      </footer>
  )
}

export default App
