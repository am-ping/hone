// https://dev.codewars.com/#list-completed-challenges

// fetch codewars challenges I solved
async function getCodewarsChallenges() {
  const res = await axios.get(`https://www.codewars.com/api/v1/users/AM-png/code-challenges/completed?page=1`)
  return res.data.data
}

async function cData() {
  let arr = await getCodewarsChallenges()
  for (let i = 0; i < 1; i++) {
    let challenge = await axios.get(`https://www.codewars.com/api/v1/code-challenges/${arr[i].id}`)
    listChallenges(challenge)
  }
}

function listChallenges(c) {
  let div = document.querySelector('.content')

  let data = c.data

  let h2 = document.createElement('h2')
  h2.textContent = data.name
  div.append(h2)

  let p = document.createElement('p')
  p.classList = 'lh-1'
  console.log(data.description)
  p.innerText = data.description
  div.append(p)
}

// function formatDesc(str) {
//   let arr 
// }

// listChallenges()

cData()