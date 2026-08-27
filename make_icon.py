#!/usr/bin/env python3
"""Genera le icone dell'app (icon-180.png per iOS, icon-512.png per Android).
Disegna un cielo sfumato, il sole, le montagne della Patagonia con le cime innevate
e un lago in primo piano. Si rilancia con: python3 make_icon.py
"""
from PIL import Image, ImageDraw

SIZE = 1024  # disegna in grande e riduce, per bordi morbidi


def lerp(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def build(size=SIZE):
    img = Image.new("RGB", (size, size), "#eaf6fb")
    d = ImageDraw.Draw(img)

    # cielo: sfumatura verticale da celeste a pesca
    top, bottom = (0x5E, 0xB7, 0xE0), (0xFF, 0xE2, 0xC2)
    horizon = int(size * 0.70)
    for y in range(horizon):
        d.line([(0, y), (size, y)], fill=lerp(top, bottom, y / horizon))

    # sole
    r = size * 0.085
    cx, cy = size * 0.755, size * 0.225
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill="#FFD166")

    s = size  # scorciatoia per le coordinate relative

    # montagna posteriore (più chiara)
    d.polygon([(0, s*0.79), (s*0.20, s*0.40), (s*0.34, s*0.56),
               (s*0.44, s*0.44), (s*0.62, s*0.79)], fill="#7FBEDC")

    # montagna principale (le Torres): tre guglie
    d.polygon([(s*0.16, s*0.78), (s*0.38, s*0.30), (s*0.52, s*0.60),
               (s*0.63, s*0.36), (s*0.78, s*0.62), (s*0.88, s*0.46),
               (s*1.02, s*0.78)], fill="#2F7EA8")

    # cime innevate
    d.polygon([(s*0.38, s*0.30), (s*0.455, s*0.46), (s*0.425, s*0.44),
               (s*0.40, s*0.49), (s*0.335, s*0.38)], fill="#FFFFFF")
    d.polygon([(s*0.63, s*0.36), (s*0.695, s*0.50), (s*0.665, s*0.475),
               (s*0.645, s*0.515), (s*0.585, s*0.44)], fill="#FFFFFF")
    d.polygon([(s*0.88, s*0.46), (s*0.925, s*0.56), (s*0.905, s*0.545),
               (s*0.885, s*0.575), (s*0.845, s*0.52)], fill="#FFFFFF")

    # lago in primo piano
    d.rectangle([0, s*0.775, s, s], fill="#1F6D9E")
    # riflessi
    for (x0, x1, y, w) in [(0.10, 0.34, 0.845, 0.022),
                           (0.46, 0.72, 0.885, 0.026),
                           (0.20, 0.44, 0.935, 0.024)]:
        d.rounded_rectangle([s*x0, s*y, s*x1, s*(y + w)],
                            radius=s*w/2, fill="#5FA8CE")

    return img


def main():
    base = build()
    for px, name in [(180, "icon-180.png"), (512, "icon-512.png")]:
        base.resize((px, px), Image.LANCZOS).save(name)
        print("scritto", name)


if __name__ == "__main__":
    main()
