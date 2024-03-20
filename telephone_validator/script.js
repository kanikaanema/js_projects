const textEntered = document.querySelector("#user-input").value;
const result = document.querySelector("#results-div");

function validNumber() {
  const textEntered = document.querySelector("#user-input").value;
  const result = document.querySelector("#results-div");


  if (textEntered === "") {
    alert("Please provide a phone number")
  } else if (validTelephone(textEntered)) {
    result.innerText = `Valid US number: ${textEntered}`
  } else {
    result.innerText = `Invalid US number: ${textEntered}`
  }
}
document.getElementById("clear-btn").addEventListener("click", function () {
  result.innerText = ""
})


function validTelephone(num) {
  let array = [
    // 1 555-555-5555
    /^1\s+\d{3}\-\d{3}\-\d{4}$/gi,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}\-\d{4}$/gi,

    // 1(555)555-5555
    /^1\(\d{3}\)\d{3}\-\d{4}$/gi,

    // 1 555 555 5555
    /^1\s\d{3}\s\d{3}\s\d{4}$/gi,

    // 5555555555
    /^\d{10}$/gi,

    //555-555-5555
    /^\d{3}\-\d{3}\-\d{4}$/gi,

    //(555)555-5555
    /^\(\d+\)\d+\-\d+$/gi


  ]
  return array.some((arr) => {
    return arr.test(num)
  })
}
console.log(validTelephone("1 456 789 4444"))
