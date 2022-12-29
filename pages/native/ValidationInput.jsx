import React, { useState } from 'react'

export default function ValidationInput(){

    const [inputClass, useInputClass] = useState(null)
    const handleAddClass = () => {
        useInputClass('input-class')
    }

  return (
        <div className='container-validationinput'>
            <div className="textbox">
              <input type="text"
                  required
                  spellCheck='false'
                  placeholder='First name'
                  className={inputClass}
                  onClick={() => handleAddClass()}
              />
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div className="validation">
                  * First name is required
              </div>
          </div>
          <style jsx>{`
                .container-validationinput{
                    height: 100vh;
                    background: #1a1a1a;
                    display: grid;
                    justify-content: center;
                    align-items: center
                }

                .textbox{
                    position: relative
                }

                .textbox input{
                    width: 260px;
                    height: 64px;
                    border-radius: 6px;
                    background: transparent;
                    border: 1px solid #9f9f9f;
                    padding: 0 20px 0 56px;
                    font-size: 16px;
                    font-family: inherit;
                    color: #f9f9f9;
                    outline: none;
                }

                .textbox input::placeholder{
                    color: rgb(255 255 255 / 50%)
                }

                .textbox input:valid{
                    border-color: #26dfae
                }

                .textbox .icon{
                    position: absolute;
                    top: 50%;
                    left: 20px;
                    margin-top: -12px;
                    pointer-events: none;
                    color: #f9f9f9;
                }

                .textbox .validation{
                    position: absolute;
                    top: 74px;
                    left: 0;
                    width: 100%;
                    padding: 20px;
                    border-radius: 6px;
                    background: #dd4949;
                    transform-origin: 50% 0%;
                    transition: 0.4s;
                    color: #f9f9f9;
                    transform: scaleY(0)
                }

                .textbox .input-class:invalid ~ .validation{
                    transform: scaleY(1)
                }

                .textbox .input-class:valid ~ .validation{
                    transform: scaleY(0)
                }
            `}</style>
        </div>
  )
}