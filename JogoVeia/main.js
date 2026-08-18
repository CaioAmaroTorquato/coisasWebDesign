const bt1l1 =document.querySelector("div.botoes :nth-child(1")
const bt2l1 =document.querySelector("div.botoes :nth-child(2")
const bt3l1 =document.querySelector("div.botoes :nth-child(3")

const bt1l2 =document.querySelector("div.botoes :nth-child(4")
const bt2l2 =document.querySelector("div.botoes :nth-child(5")
const bt3l2 =document.querySelector("div.botoes :nth-child(6")

const bt1l3 =document.querySelector("div.botoes :nth-child(7")
const bt2l3 =document.querySelector("div.botoes :nth-child(8")
const bt3l3 =document.querySelector("div.botoes :nth-child(9")

let turn = 0
const ox = ['O', 'X']

bt1l1.onclick = function() {
    if (bt1l1.textContent.trim() != '') return
    bt1l1.textContent = ox[turn % 2]
    turn++
}