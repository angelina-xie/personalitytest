document.getElementById("quizForm").addEventListener("submit", generateCode);

function generateCode(event) {
  event.preventDefault(); 

  let code = "";

  let codeMap = {
    q1: { True1: "S", False1: "R" },
    q2: { True2: "C", False2: "L" },
    q3: { True3: "O", False3: "U" },
    q4: { True4: "E", False4: "A" },
    q5: { True5: "I", False5: "N" }
  };

  for (let i = 1; i <= 5; i++) {
    let selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedOption) {
      code += codeMap[`q${i}`][selectedOption.value];
    } else {
      code += "X"; 
    }
  }

  document.getElementById("result").innerText = `Your Personality Code is: ${code}`;
}
