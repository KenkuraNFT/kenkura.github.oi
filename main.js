'use strict';

{
  const btn =document.getElementById('btn')
  const result=  document.getElementById('result')

  btn.addEventListener('click',()=>{
    const results =['狼我風風拳','操気弾','かめはめ波','仙豆','DEAD!!!','']
    const n = Math.floor(Math.random() * results.length) ;

    result.textContent = results[n]

    

  })
}
