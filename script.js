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
    const code = document.getElementById('codetype').value.trim().toLowerCase();  

    if (code === 'rcoai') {
        window.location.href = 'rcoai.html';
    } else if (code === 'rcoan') {
        window.location.href = 'rcoan.html';
    } else if (code === 'rloan') {
        window.location.href = 'rloan.html';
    } else if (code === 'rloai') {
        window.location.href = 'rloai.html';
    } else if (code === 'rluai') {
        window.location.href = 'rluai.html';
    } else if (code === 'rluan') {
        window.location.href = 'rluan.html';
    } else if (code === 'rcuan') {
        window.location.href = 'rcuan.html';
    } else if (code === 'rcuai') {
        window.location.href = 'rcuai.html';
    } else if (code === 'rcoei') {
        window.location.href = 'rcoei.html';
    } else if (code === 'rcoen') {
        window.location.href = 'rcoen.html';
    } else if (code === 'rloen') {
        window.location.href = 'rloen.html';
    } else if (code === 'rloei') {
        window.location.href = 'rloei.html';
    } else if (code === 'rluei') {
        window.location.href = 'rluei.html';
    } else if (code === 'rluen') {
        window.location.href = 'rluen.html';
    } else if (code === 'rcuen') {
        window.location.href = 'rcuen.html';
    } else if (code === 'rcuei') {
        window.location.href = 'rcuei.html';
    } else if (code === 'scoai') {
        window.location.href = 'scoai.html';
    } else if (code === 'scoan') {
        window.location.href = 'scoan.html';
    } else if (code === 'sloan') {
        window.location.href = 'sloan.html';
    } else if (code === 'sloai') {
        window.location.href = 'sloai.html';
    } else if (code === 'sluai') {
        window.location.href = 'sluai.html';
    } else if (code === 'sluan') {
        window.location.href = 'sluan.html';
    } else if (code === 'scuan') {
        window.location.href = 'scuan.html';
    } else if (code === 'scuai') {
        window.location.href = 'scuai.html';
    } else if (code === 'scoei') {
        window.location.href = 'scoei.html';
    } else if (code === 'scoen') {
        window.location.href = 'scoen.html';
    } else if (code === 'sloen') {
        window.location.href = 'sloen.html';
    } else if (code === 'sloei') {
        window.location.href = 'sloei.html';
    } else if (code === 'sluei') {
        window.location.href = 'sluei.html';
    } else if (code === 'sluen') {
        window.location.href = 'sluen.html';
    } else if (code === 'scuen') {
        window.location.href = 'scuen.html';
    } else if (code === 'scuei') {
        window.location.href = 'scuei.html';
    } else {
        alert("Oops! That's not a code. Double check spelling?");
    }
}
