from pathlib import Path
from PIL import Image, ImageDraw

S = 3
W = H = 1200
OUT = Path(r"C:\Proyectos\Landing-Page\brand")

CREAM = "#F7F0E2"
HOUSE = "#1F4527"
PINE = "#2F6238"
TRUNK = "#8C5A2B"


def px(v):
    return int(round(v * S))


def scaled(pts):
    return [(px(x), px(y)) for x, y in pts]


def pine_points(cx, top, h, w):
    return [
        (cx, top),
        (cx + w * 0.42, top + h * 0.28),
        (cx + w * 0.20, top + h * 0.28),
        (cx + w * 0.62, top + h * 0.56),
        (cx + w * 0.36, top + h * 0.56),
        (cx + w * 0.95, top + h * 0.86),
        (cx - w * 0.95, top + h * 0.86),
        (cx - w * 0.36, top + h * 0.56),
        (cx - w * 0.62, top + h * 0.56),
        (cx - w * 0.20, top + h * 0.28),
        (cx - w * 0.42, top + h * 0.28),
    ]


def pine(d, cx, top, h, w):
    d.polygon(scaled(pine_points(cx, top, h, w)), fill=PINE)
    d.rectangle((px(cx - 11), px(top + h * 0.84), px(cx + 11), px(top + h * 0.99)), fill=TRUNK)


def build():
    size = (px(W), px(H))
    img = Image.new("RGB", size, CREAM)
    d = ImageDraw.Draw(img)

    pine(d, 250, 420, 440, 100)
    pine(d, 950, 420, 440, 100)

    d.polygon(scaled([(600, 370), (270, 620), (930, 620)]), fill=HOUSE)

    planks = [
        (330, 620, 870, 690, "#D9A86C"),
        (340, 700, 860, 770, "#C08552"),
        (350, 780, 850, 850, "#A96B37"),
    ]
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    for x0, y0, x1, y1, color in planks:
        ld.rectangle((px(x0), px(y0), px(x1), px(y1)), fill=color)
        for fy in (0.38, 0.7):
            gy = y0 + (y1 - y0) * fy
            ld.line(scaled([(x0 + 24, gy + 3), (x1 - 24, gy - 3)]),
                    fill=(80, 50, 22, 34), width=px(2))
    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    d = ImageDraw.Draw(img)
    d.rectangle((px(550), px(640), px(650), px(740)), fill=CREAM, outline=HOUSE, width=px(12))
    d.line((px(600), px(640), px(600), px(740)), fill=HOUSE, width=px(10))
    d.line((px(550), px(690), px(650), px(690)), fill=HOUSE, width=px(10))

    img.resize((W, H), Image.LANCZOS).save(OUT / "icono-v14.png")


if __name__ == "__main__":
    build()
    print("ok")
