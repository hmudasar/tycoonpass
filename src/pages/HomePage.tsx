import React from 'react'

const HomePage = () => {
  return (
    <div className='home-page'>
        <div className="container">
            <div className="d-flex align-items-center justify-content-center form-container">
                <div className="form-box">
                    <img src="/images/logo.png" alt="tycoon-pass" />
                    <div className="card__wrapper">
                        <div className="mint__control">
                            <div className="collection_stats d-flex justify-content-between w-full text-white">
                                <h1 className="text-2xl">TYCOONPASS</h1><span>0/3333</span>
                            </div>
                            <div className="mt-6 flex gap-2">
                                <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2" placeholder="QTY" />
                                <button className="crossmintButton-0-2-1 crossmintButton-d0-0-2-4 w-[70%] mint__btn">
                                    <img className="crossmintImg-0-2-2" src="https://www.crossmint.io/assets/crossmint/logo.svg" alt="Crossmint logo" />
                                    <span className="crossmintParagraph-0-2-3 crossmintParagraph-d1-0-2-5" role="button-paragraph">Buy with credit card</span>
                                </button>
                            </div>
                            <div className="mt-4 text-white"><span>Total: 200$</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage