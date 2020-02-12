'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '吉', '吉', '吉', '凶', '末吉'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.25) {
      btn.textContent = '大吉';
    }  else if (n <0.75){
      btn.textContent = '愛菜吉';
    }  else {
      btn.textContent = '凶';
    }
  });
  }