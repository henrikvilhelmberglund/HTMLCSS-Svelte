float, **flexbox**, grid

- progressive enhancement - börja från IE, lägga till så det ser bra ut
- graceful degradation - börja från chrome, ha fallback-CSS när det inte fungerar
- mobile first - börja utveckla för mobil först och ha en separat designskiss för mobil

caniuse.com för att se vilken CSS man kan använda i en viss browser (också för mobilwebbläsare)

preprocessorer: **SASS** och LESS
tillgänglighet

WCAG - Web Content Accessibility Guidelines 
funka.com - exempel på linkedin

# HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>

<html lang="en">: vilket språk är rubriker/texter för screenreader t.ex
localization: kan använda javascript för att ändra språket, också lang-taggen
<article>Annan semantisk innebyggd än div</article>
<nav>för navigation</nav> (för skärmläsare), ger kontext
tillgängliga sidor hamnar högre i sökresultat
charset för att sätta en encoding för att stöda andra språk
i vanilla CSS har inline högre prioritet
koppla CSS med <link rel="stylesheet" href="style.css">