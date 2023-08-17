function luas() {
  let a = document.getElementById("alas").value;
  let t = document.getElementById("tinggi").value;
  a = parseInt(a);
  t = parseInt(t);
  let luas = a * t * 0.5;
  document.getElementById("luas").value = luas;
}
function kel() {
  let sa = document.getElementById("sisia").value;
  let sb = document.getElementById("sisib").value;
  let sc = document.getElementById("sisic").value;
  sa = parseInt(sa);
  sb = parseInt(sb);
  sc = parseInt(sc);
  let kel = sa + sb + sc;
  document.getElementById("kel").value = kel;
}
