var productcontainer = document.getElementById('products')
var search = document.getElementById('search')
var productlist = productcontainer.querySelectorAll('div')

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toLowerCase()

    for (var i = 0; i < productlist.length; i = i + 1) {
        var productname = productlist[i].querySelector('p').textContent

        if (productname.toLowerCase().indexOf(enteredvalue) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"
        }
    }
})