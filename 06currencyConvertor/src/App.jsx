import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/userCurrencyInfo'
import './App.css'

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertd, setConvertd] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const option = object.key(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertd(amount)
    setAmount(convertd)
  }

  const convertedAmount = () => {
    setConvertd(amount * currencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/20489032/pexels-photo-20489032/free-photo-of-close-up-of-an-icy-surface.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={from}
                amount={amount}
                CurrencyOption={option}
                onCurrencyChange={(currency) => {setFrom(currency)}}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onChange={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label={to}
                amount = {convertedAmount}
                CurrencyOption={option}
                onCurrencyChange={(currency) => {setTo(currency)}}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    onSubmit={convertedAmount}>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App