// a⋅b≡(amodm)⋅(bmodm)(modm))

function binPowForModulo(a, b, m) {
  a %= m;
  let res = 1;
  while(b>0){
    if(b & 1) res = res * a % m
    a = a*a % m;
    b>>=1; //equivalent to b = Math.floor(b/2)
  }
  return res
}

// Fermats little theorem says that if m is a prime number we can directly compute x^(n mod (m-1)) instead of mod for m