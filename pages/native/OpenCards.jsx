import React, { useEffect } from 'react'
import $ from 'jquery';

const OpenCards = () => {

  useEffect(() => {
    $(".option").click(function () {
      $(".option").removeClass("active");
      $(this).addClass("active");
    });

  })

  return (
    <div>
        <div className="options">
          <div className="option active">
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <img src="/imgs/OpenCards/ic-argentina.png" alt="" />
              </div>
              <div className="info">
                <div className="main">Messi</div>
                <div className="sub">Fiasco no primeiro jogo</div>
              </div>
            </div>
        </div>
        <div className="option">
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <img src="/imgs/OpenCards/ic-brazil.png" alt="" />
            </div>
            <div className="info">
              <div className="main">Neymar</div>
              <div className="sub">Será que leva Copa?</div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <img src="/imgs/OpenCards/ic-franca.png" alt="" />
            </div>
            <div className="info">
              <div className="main">Mbappe</div>
              <div className="sub">Vai ser o Artilheiro?</div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <img src="/imgs/OpenCards/ic-portugal.png" alt="" />
            </div>
            <div className="info">
              <div className="main">Cristiano Ronaldo</div>
              <div className="sub">A ultima Dança</div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <img src="/imgs/OpenCards/ic-brazil.png" alt="" />
            </div>
            <div className="info">
              <div className="main">Richarlison</div>
              <div className="sub">O gol Mais bonito?</div>
            </div>
          </div>
        </div>
        </div>
        <style jsx>{`
          .options{
            display: flex;
            flex-direction: row;
            align-items: stretch;
            overflow: hidden;
            min-width: 600px;
            max-width: 900px;
            width: calc(100% - 100px);
            height: 400px;
          }

          .options .option{
            position: relative;
            overflow: hidden;
            min-width: 60px;
            margin: 10px;
            background: var(--defaultBackground);
            background-size: auto 120%;
            background-position: center;
            cursor: pointer;
            transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)
          }

          .options .option:nth-child(1){
            --defaultBackground: url('/imgs/OpenCards/ic-messi-bg.jpg');
          }
          .options .option:nth-child(2) {
            --defaultBackground: url('/imgs/OpenCards/ic-neymar-bg.jpg');
          }
          .options .option:nth-child(3) {
            --defaultBackground: url('/imgs/OpenCards/ic-mbappe-bg.jpg');
          }
          .options .option:nth-child(4) {
            --defaultBackground: url('/imgs/OpenCards/ic-cristiano-ronaldo-bg.jpg');
          }
          .options .option:nth-child(5) {
            --defaultBackground: url('/imgs/OpenCards/ic-richarlison-bg.jpg');
          }

          .options .option.active{
            flex-grow: 10000;
            transform: scale(1);
            max-width: 600px;
            margin: 10px;
            border-radius: 40px;
            background-size: auto 100%;
          }

          .options .option.active .shadow{
            box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black
          }

          .options .option.active .label{
            bottom: 20px;
            left: 20px
          }

          .options .option.active .label .info > div{
            left: 0px;
            opacity: 1;
          }

          .options .option:not(.active){
            flex-grow: 1;
            border-radius: 30px;
          }

          .options .option:not(.active) .shadow{
            bottom: -40px;
            box-shadow: inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
          }

          .options .option:not(.active) .label {
            bottom: 10px;
            left: 10px
          }

          .options .option:not(.active) .label .info > div{
            opacity: 0;
          }

          .options .option .shadow{
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            height: 100%;
            transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
          }

          .options .option .label{
            display: flex;
            position: absolute;
            transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
          }

          .options .option .label .icon{
            display: flex;
            flex-direction: row;
            justify-content: center;
            min-width: 40px;
            max-width: 40px;
            height: 40px;
            border-radius: 100px;
            background: #212123;
            padding: 5px
          }
          
          .options .option .label .info{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 10px;
            color: white;
            white-space: pre;
          }

          .options .option .label .info > div {
            position: relative;
            transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out;
          }

          .options .option .label .info .main{
            font-weight: bold;
            font-size: 1.2rem;
          }

          .options .option .label .info .sub{
            transition-delay: 0.1s
          }
          @media screen and (max-width: 718px) {
            div .options {
              min-width: 520px;
            }
            div .options .option:nth-child(5) {
              display: none;
            }
          }
          @media screen and (max-width: 638px) {
            div .options {
              min-width: 440px;
            }
            div .options .option:nth-child(4) {
              display: none;
            }
          }
          @media screen and (max-width: 558px) {
            div .options {
              min-width: 360px;
            }
            div .options .option:nth-child(3) {
              display: none;
            }
          }
          @media screen and (max-width: 478px) {
            div .options {
              min-width: 280px;
            }
            div .options .option:nth-child(2) {
              display: none;
            }
          }
        `}</style>
    </div>
  )
}

export default OpenCards