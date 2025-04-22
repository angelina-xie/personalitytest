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

  document.getElementById("result").innerText = `Your Personality Code is: ${code}.`;
}

function redirectToPage(event) {
    event.preventDefault();  
    const code = document.getElementById('codetype').value.trim().toUpperCase();  

    const redirectMap = {
      
      'RCOAI': 'rcoai.html', 'RCOAN': 'rcoan.html', 'RLOAN': 'rloan.html', 'RLOAI': 'rloai.html', 
      'RLUAI': 'rluai.html', 'RLUAN': 'rluan.html', 'RCUAN': 'rcuan.html', 'RCUAI': 'rcuai.html', 
      'RCOEI': 'rcoei.html', 'RCOEN': 'rcoen.html', 'RLOEN': 'rloen.html', 'RLOEI': 'rloei.html', 
      'RLUEI': 'rluei.html', 'RLUEN': 'rluen.html', 'RCUEN': 'rcuen.html', 'RCUEI': 'rcuei.html',
      
   
      'SCOAI': 'scoai.html', 'SCOAN': 'scoan.html', 'SLOAN': 'sloan.html', 'SLOAI': 'sloai.html',
      'SLUAI': 'sluai.html', 'SLUAN': 'sluan.html', 'SCUAN': 'scuan.html', 'SCUAI': 'scuai.html',
      'SCOEI': 'scoei.html', 'SCOEN': 'scoen.html', 'SLOEN': 'sloen.html', 'SLOEI': 'sloei.html',
      'SLUEI': 'sluei.html', 'SLUEN': 'sluen.html', 'SCUEN': 'scuen.html', 'SCUEI': 'scuei.html'
    };
  
    if (redirectMap[code]) {
      window.location.href = redirectMap[code];
    } else {
      alert("Invalid code. Maybe you mistyped? Try again!");
    }
}