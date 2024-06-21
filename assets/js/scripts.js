function random() {
    result_p = document.getElementById("result")
    randNumber = Math.floor(Math.random() * 10)
    if (randNumber == 0) result_p.innerHTML = "các nục đóng hộp"
    if (randNumber == 1) result_p.innerHTML = "tự chọn (100k)"
    if (randNumber == 2) result_p.innerHTML = "áo thun"
    if (randNumber == 3) result_p.innerHTML = "tự chọn (100k)"
    if (randNumber == 4) result_p.innerHTML = "áo thun"
    if (randNumber == 5) result_p.innerHTML = "tự chọn (100k)"
    if (randNumber == 6) result_p.innerHTML = "áo thun"
    if (randNumber == 7) result_p.innerHTML = "tự chọn (100k)"
    if (randNumber == 8) result_p.innerHTML = "áo thun"
    if (randNumber == 9) result_p.innerHTML = "tự chọn (100k)"
}