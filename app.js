const calc = document.querySelector('.calc')
const result = document.querySelector('#result')
let haveDot = false;

calc.addEventListener('click', function del(e) {
  if (e.target.innerText === "." && !haveDot) {
    haveDot = true;
  } else if (e.target.innerText === ".") {
    return
  }
  if (!e.target.classList.contains('calc__btn')) return


  const value = e.target.innerText

  switch (value) {
    case 'C':
      result.innerText = ''
      break

    case '=':
      if (result.innerText.search(/[^0-9*/+-.]/mi) != -1) return
      try {
        result.innerText = eval(result.innerText).toFixed(8)
      } catch (e) {
        result.innerText = `Error! ${e.message}`

      }
      break

    case '←':
      if (result.innerText) {
        result.innerText = result.innerText.slice(0, -1);
      }
      break;

    case '%':
      result.innerText = result.innerText / 100
      break

    case '.':
      result.innerText += '.'
      break

    default:
      result.innerText += value
  }

})



function go() {
  if (document.getElementById("result").innerHTML.length > 10) {
    event.preventDefault();
  }
}