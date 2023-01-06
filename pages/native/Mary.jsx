import React, { useState } from 'react'

const Mary = () => {
    const [password, setPassword] = useState()

    const getPassword = () => setPassword(event.target.value)
    console.log(password)
    if(password == '0707'){console.log('aeeeee')}
    
    return (
        <div className='background'>
            <input type="text" placeholder='Insira a Senha' onChange={() => getPassword()} />
            <div>
                <img src="/imgs/Mary/maryandme.jpeg" alt="" />
            </div>
            <style>{`
                .background{
                    min-height: 100vh;
                    background: #1a1a1a;
                    display: grid;
                    justify-content: center;
                    align-items: center
                }

                input{
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
            `}</style>
        </div>
    )
}

export default Mary