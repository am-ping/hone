
// fetch codewars challenges I solved
fetch(`https://www.codewars.com/api/v1/users/AM-png/code-challenges/completed?page=2`)
  .then(res => res.json())
  .then(data => {
    console.log(data.data)
    return fetch(`https://www.codewars.com/api/v1/code-challenges/${data.data[1].id}`)
  })
  .then(res => res.json())
  .then(data => console.log(data.description))
  .catch(err => console.log(err))
