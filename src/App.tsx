import './App.css'

function App() {


    console.log('123')
  return (
      <footer className={"text-white bg-black static font-light "}>
          <div className={" p-5 w-full grid gap-2 grid-cols-1 md:grid-cols-5"}>

              <div id={"Menu "}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-light mb-2"}>Menu</li>
                      <li>
                          <button className={"hover:underline"}>Contact</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Shop</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>About</button>
                      </li>
                  </ul>
              </div>
              <div id={"User"}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-light mb-2"}>
                          User
                      </li>
                      <li>
                          <button className={"hover:underline"}>Contact</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Shop</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Data</button>
                      </li>
                  </ul>
              </div>
              <div id={"Category"}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-light mb-2"}>
                          Category
                      </li>
                      <li>
                          <button className={"hover:underline"}>Led</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Music</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Music</button>
                      </li>
                  </ul>
              </div>
              <div id={"User"}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-light mb-2"}>
                          Delivery
                      </li>
                      <li>
                          <button className={"hover:underline"}>Payments</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Cost</button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>Buyback</button>
                      </li>
                  </ul>
              </div>
              <div id={"User"}>
                  <ul className={"space-y-2 border border-gray-600 p-2 rounded-lg"}>
                      <li className={"text-2xl font-light mb-2"}>
                          Grafik
                      </li>
                      <li>
                          <button className={"hover:underline"}>
                              Pn-Pt: 9:00-18:00
                          </button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>
                              Sb-Nd: Doma
                          </button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>
                              PHONE NUMBER
                          </button>
                      </li>
                      <li>
                          <button className={"hover:underline"}>
                              GMAIL
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
          </div>
      </footer>
  )
}

export default App
