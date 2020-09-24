let txtLetter = document.getElementById("txtLetter");
let txtResult = document.getElementById("txtResult");
let pageCount = 1;
let characterCount = 0;
txtLetter.addEventListener("keypress", countwords);

function countwords() {
    let letter = txtLetter.value;
    let cleanTxt = letter.replace(/\s+/g, " ");
    let splitWords = cleanTxt.split("");
    let characterCount = splitWords.length;

    if (characterCount > 0) {
        txtResult.value = `Page count: 1(${characterCount++}) / 160 used`;
        while (characterCount % 160 == 0) {
            pageCount = pageCount + 1;
            characterCount++;
        }

    }
    txtResult.value = `Page count: ${pageCount}(${characterCount++}) / 160 used`;
}