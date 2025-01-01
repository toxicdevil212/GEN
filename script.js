document.getElementById("generateBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const number = parseInt(document.getElementById("number").value);
    const includeSymbols = document.getElementById("includeSymbols").checked;

    if (name.trim() === "" || isNaN(number) || number <= 0) {
        alert("Please enter a valid name and number.");
        return;
    }

    let passwords = [];
    const symbols = includeSymbols ? ['@', '#', '$'] : [''];
    const numberRange = (number < 100) ? [1, 99] : [100, 999];

    for (let i = numberRange[0]; i <= numberRange[1]; i++) {
        passwords.push(`${name}${i}${symbols[Math.floor(Math.random() * symbols.length)]}`);
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = passwords.join('\n');
    
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.style.display = "block";
    downloadBtn.onclick = function() {
        const blob = new Blob([passwords.join('\n')], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'passwords.txt';
        link.click();
    };
});