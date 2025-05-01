function checkPalindrome() {
    let text = document.getElementsByClassName("str")[0].value;
    text = text.toLowerCase();
    const len = text.length;
    let isPalindrome = true;

    for (let i = 0; i < len / 2; i++) 
    {
        if (text[i] !== text[len - 1 - i]) 
        {
            isPalindrome = false;
            break;
        }
    }

    const result = document.getElementById("result");
    if (isPalindrome) {
        result.textContent = `"${text}" is a palindrome.`;
    } else {
        result.textContent = `"${text}" is not a palindrome.`;
    }
}
