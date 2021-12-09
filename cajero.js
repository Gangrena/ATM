var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";
imagenes["5"] = "5.png";


class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes[this.valor];
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 0)
  {
  resultado.innerHTML = "soy un cajero malo, he sido malo y no puedo darte esa cantidad :( ";
  }
  else
  {
    for( var e of entregado)
    {
      if (e.cantidad > 0 )
      {
        resultado.innerHTML = resultado.innerHTML + e.cantidad + "billetes de $" + e.valor + "<br />";
      }

    }
  }
}

var caja = [];
var entregado = [];
caja.push(new Billete (100, 10) );
caja.push(new Billete (50, 10) );
caja.push(new Billete (20, 30) );
caja.push(new Billete (10, 10) );
caja.push(new Billete (5, 5) );

var dinero;
var div = 0;
var papeles = 0;

var b = document.getElementById("botoncito");
b.addEventListener("click", entregarDinero);
   var resultado = document.getElementById("resultado");
