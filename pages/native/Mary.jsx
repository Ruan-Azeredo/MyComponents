import React, { useState, useEffect, useRef } from 'react'

const Mary = () => {
    const [password, setPassword] = useState()
    let hidden = 'hidden'
    const demoRef = useRef(null);

    function typeWriter() {
        let i = 0;
        const txt = 'Querida Mary, hoje é um dia especial, mais especial, afinal, hoje faz ½ ano desde aquele dia, em que eu levei você pra beira da praia, abri uma carta, que na verdade era uma foto, te dei uma pulseira, e te disse que… escreveríamos uma história juntos, bem clichê, se você for para pra pensar né, mas fazer o que, eu sou, quer dizer, nós somos assim, então, vou me permitir mais uma vez navegar pelos mares do meu inconsciente em busca da mais encantadoras das sereias, que é você, talvez eu diga coisas que não façam muito sentido nessa daqui, mas nem tudo precisa fazer né, é como poesia, cheia de metáforas e histórias que não se prende a nenhuma corrente lógica, e tem seu único compromisso com o sentimento, por isso acho que seria perfeito falar de poesia e você de uma vez só, nossa, eu to escrevendo essa carta olhando pra uma foto sua, e você é tão linda, tão cheia de graça, é ela menina, que vem e que passa, no doce balanço kkk, tão musical, mas não me entenda mal, não é de propósito, é só que escapam da minha mente as os versos e metaforas que me lembram você minha princesa, meu amor, da minha vida, daqui ate a eternidade, nossos destinos foram traçados na maternidade, eu já disse que não é proposital né kkk, acho que sim, talvez dessa vez eu tenha me perdido um pouco, em mim mesmo, acontece quando penso na gente, é que eu já te disse tantas vezes que eu te amo, acho que por isso essa busca por alguma metafora melhor do que “Eu te amo”, mas ainda não encontrei, tenho que continuar procurando, afinal, tenho a vida toda pra isso, e quem sabe eu comece a ler poemas, ou quem sabe vire um poeta, talvez ainda mais, talvez te escreva um carta, com pensamentos soltos e trechos poeticos, só pra te fazer pensar, em nós, como se você se me lesse, acho que nunca teve muita dificuldade nisso, mas não me leia como se eu fosso um poema, não me trate assim, por que versos são como brisas, que refrescam a alma, mas passam, e eu sou como uma folha de arvore, que depois de voar na brisa do vento, se repousa no seu ombro, pra sentir seu perfume, enquanto você lê um livro de romance, debaixo de uma árvore na primavera, onde a flor mais bonita, é você, e é sempre você. Espero que tenha gostado desse pedaço de não sei o que exatamente que eu escrevi kk, você é a minha inspiração e a musa da minha vida, espero passar centenas de outros meses contigo e mais importante. Eu Te amo. P.S. Esse é só um aperitivo, pq o presente de 6 meses sou eu que to chegando ai : )';
        const speed = 100;

        function doTypeWriter() {
        if (i < txt.length) {
            demoRef.current.innerHTML += txt.charAt(i);
            i++;
            setTimeout(doTypeWriter, speed);
        }
        }

        doTypeWriter();
    }

    const getPassword = () => setPassword(event.target.value)
    console.log(password)
    if(password == '0707'){hidden = ''}
    
    return (
        <div className='background'>
            <input type="text" placeholder='Insira a Senha' onChange={() => getPassword()} />
            <div className={hidden}>
                <div className='photo'>
                    <img src="/imgs/Mary/maryandme.jpeg" alt="" />
                </div>
                <div className='legenda'>O melhor casal de todos os tempos</div>
                <div className='carta'>
                    <button onClick={typeWriter}>Clique aqui</button>
                    <p ref={demoRef}></p>
                </div>
            </div>
            <style>{`
                .background{
                    min-height: 100vh;
                    background: #1a1a1a;
                    display: grid;
                    justify-content: center;
                    align-items: center;
                }

                input{
                    margin: 150px auto auto;
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

                .photo{
                    background: white;
                    padding: 10px;
                    display: flex;
                    width: 320px;
                    margin: auto;
                    margin-top: 50px;
                    justify-content: center;
                }

                img{
                    margin-bottom: 50px;
                    object-fit: cover; 
                    height: 300px;
                    width: 300px;
                }

                .legenda{
                    position: relative;
                    font-size: 16px;
                    top: -43px;
                    left: 265px;
                    font-family: 'Caveat', cursive;
                }

                .carta{
                    color: white;
                    width: 60vw;
                    line-height: 28px;
                    font-size: 18px;
                    text-align: justify;
                    padding: 30px;
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
                }

                button{
                    display: flex;
                    border: 1px solid #9f9f9f;
                    padding: 10px 20px;
                    border-radius: 6px;
                    margin: 0 auto 30px auto;
                }
            `}</style>
        </div>
    )
}

export default Mary