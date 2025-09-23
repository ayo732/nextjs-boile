document.addEventListener('DOMContentLoaded', ()=> {
  const toggle = document.getElementById('toggleBalance');
  const amount = document.getElementById('balanceAmount');
  let visible = true;

  toggle.addEventListener('click', ()=> {
    visible = !visible;
    amount.textContent = visible ? '$150,000.00' : '•••••••';
    toggle.textContent = visible ? '👁️' : '🙈';
  });
});
