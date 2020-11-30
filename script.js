function rect(){
    var rect = document.getElementById('rectangle')

    var result = document.getElementById('result');

    var tr = document.getElementById('tr').value;
    var tl = document.getElementById('tl').value;
    var bl = document.getElementById('bl').value;
    var br = document.getElementById('br').value;
    var ttr = document.getElementById('ttr');
    var ttl = document.getElementById('ttl');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');
    ttr.value = tr;
    ttl.value = tl;
    tbl.value = bl;
    tbr.value = br;
    rect.style.borderRadius = tl + "px " + tr + "px " + br + "px " + bl + "px";
    result.value = "border-radius: " +  tl + "px " + tr + "px " + br + "px " + bl + "px;"
}