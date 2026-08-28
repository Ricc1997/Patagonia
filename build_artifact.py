#!/usr/bin/env python3
"""Genera artifact.html: versione single-file (CSS e JS inline) di index.html,
pronta per essere pubblicata come pagina hosted."""
import base64
import re
import pathlib

here = pathlib.Path(__file__).parent
icon_b64 = base64.b64encode((here / "icon-180.png").read_bytes()).decode()
html = (here / "index.html").read_text()
css = (here / "style.css").read_text()
data_js = (here / "data.js").read_text()
script_js = (here / "script.js").read_text()

# tiene solo il contenuto fra <body> e </body>
body = re.search(r"<body[^>]*>(.*)</body>", html, re.S).group(1)
body = body.replace('<script src="data.js"></script>', "")
body = body.replace('<script src="script.js"></script>', "")

out = f"""<title>Patagonia 2026</title>
<meta name="description" content="Itinerario del viaggio in Patagonia, 26 dicembre - 5 gennaio." />
<link rel="apple-touch-icon" href="data:image/png;base64,{icon_b64}" />
<meta name="apple-mobile-web-app-title" content="Patagonia" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;600&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
{css}
</style>
{body}
<script>
{data_js}
{script_js}
</script>
"""

(here / "artifact.html").write_text(out)
print(f"artifact.html generato ({len(out)} caratteri)")
