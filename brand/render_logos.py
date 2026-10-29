from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

S = 2
W, H = 1200, 800
OUT = Path(r"C:\Proyectos\Landing-Page\brand")

CREAM = "#F7F0E2"
GREEN = "#1F4527"
GREEN_MID = "#2E6B3A"
INK = "#22301F"
GOLD = "#C9A46B"
WOOD_DARK = "#A96B37"
WOOD_MID = "#C08552"
WOOD_LIGHT = "#D9A86C"
MUTED = "#7A6548"

FONTS = Path(r"C:\Windows\Fonts")
GEORGIA_B = str(FONTS / "georgiab.ttf")
GEORGIA_I = str(FONTS / "georgiai.ttf")
TREBUC_B = str(FONTS / "trebucbd.ttf")


def px(v):
    return int(round(v * S))


def canvas():
    img = Image.new("RGB", (px(W), px(H)), CREAM)
    return img, ImageDraw.Draw(img)


def font(path, size):
    return ImageFont.truetype(path, px(size))


def tracked_width(draw, text, f, tracking):
    widths = [draw.textlength(ch, font=f) for ch in text]
    return sum(widths) + px(tracking) * (len(text) - 1)


def draw_tracked(draw, text, f, tracking, center_x, baseline_y, fill):
    widths = [draw.textlength(ch, font=f) for ch in text]
    total = sum(widths) + px(tracking) * (len(text) - 1)
    x = px(center_x) - total / 2
    for ch, w in zip(text, widths):
        draw.text((x, px(baseline_y)), ch, font=f, fill=fill, anchor="ls")
        x += w + px(tracking)
    return total


def line(draw, pts, fill, width):
    draw.line([(px(x), px(y)) for x, y in pts], fill=fill, width=px(width), joint="curve")


def caps(draw, pts, fill, width):
    r = px(width) / 2
    for x, y in pts:
        draw.ellipse((px(x) - r, px(y) - r, px(x) + r, px(y) + r), fill=fill)


# ---------------------------------------------------------------- concept 1
def concept_1():
    img, d = canvas()

    roof = [(450, 330), (600, 190), (750, 330)]
    line(d, roof, GREEN, 26)
    caps(d, [roof[0], roof[-1]], GREEN, 26)

    planks = [
        (435, 334, 765, 380, WOOD_LIGHT),
        (445, 386, 775, 432, WOOD_MID),
        (425, 438, 755, 484, WOOD_DARK),
    ]
    for x0, y0, x1, y1, color in planks:
        d.rounded_rectangle((px(x0), px(y0), px(x1), px(y1)), radius=px(7), fill=color)

    f_word = font(GEORGIA_B, 74)
    draw_tracked(d, "TÁBUAS DE PINHO", f_word, 0.5, 600, 645, INK)

    f_sub = font(TREBUC_B, 26)
    sub = "CARPINTARIA & DESIGN"
    sub_w = tracked_width(d, sub, f_sub, 8)
    draw_tracked(d, sub, f_sub, 8, 600, 697, GREEN_MID)

    y = 688
    left_end = 600 - sub_w / 2 - 30
    right_start = 600 + sub_w / 2 + 30
    d.line([(px(left_end - 70), px(y)), (px(left_end), px(y))], fill=GOLD, width=px(2))
    d.line([(px(right_start), px(y)), (px(right_start + 70), px(y))], fill=GOLD, width=px(2))

    f_motto = font(GEORGIA_I, 23)
    d.text((px(600), px(747)), "Naturais, resistentes, feitos para durar.",
           font=f_motto, fill=MUTED, anchor="ms")

    img.resize((W, H), Image.LANCZOS).save(OUT / "logo-01-casa-tablas.png")


# ---------------------------------------------------------------- concept 2
def concept_2():
    img, d = canvas()
    d.rounded_rectangle((px(470), px(100), px(730), px(360)), radius=px(30), fill=GREEN)
    d.rounded_rectangle((px(486), px(116), px(714), px(344)), radius=px(20),
                        outline=GOLD, width=px(2))

    f_mono = font(GEORGIA_B, 150)
    d.text((px(600), px(232)), "TP", font=f_mono, fill=CREAM, anchor="mm")

    f_tiny = font(TREBUC_B, 13)
    draw_tracked(d, "10 ANOS DE OFÍCIO", f_tiny, 4, 600, 330, GOLD)

    f_word = font(GEORGIA_B, 58)
    draw_tracked(d, "TÁBUAS DE PINHO", f_word, 0.3, 600, 520, INK)

    f_sub = font(TREBUC_B, 21)
    draw_tracked(d, "CARPINTARIA & DESIGN", f_sub, 8, 600, 566, GREEN_MID)

    f_motto = font(GEORGIA_I, 21)
    d.text((px(600), px(616)), "Naturais, resistentes, feitos para durar.",
           font=f_motto, fill=MUTED, anchor="ms")

    img.resize((W, H), Image.LANCZOS).save(OUT / "logo-02-monograma-tp.png")


# ---------------------------------------------------------------- concept 3
def concept_3():
    img, d = canvas()
    slats = [
        (530, 190, 670, 224, "#5A9A63"),
        (495, 242, 705, 276, "#3F7F4B"),
        (460, 294, 740, 328, GREEN_MID),
    ]
    for x0, y0, x1, y1, color in slats:
        d.rounded_rectangle((px(x0), px(y0), px(x1), px(y1)), radius=px(17), fill=color)
    d.rounded_rectangle((px(588), px(344), px(612), px(424)), radius=px(5), fill="#8C5A2B")

    f_word = font(TREBUC_B, 52)
    draw_tracked(d, "TÁBUAS DE PINHO", f_word, 3, 600, 536, INK)

    f_sub = font(TREBUC_B, 21)
    draw_tracked(d, "CARPINTARIA & DESIGN", f_sub, 9, 600, 584, GREEN_MID)

    f_motto = font(GEORGIA_I, 21)
    d.text((px(600), px(634)), "Naturais, resistentes, feitos para durar.",
           font=f_motto, fill=MUTED, anchor="ms")

    img.resize((W, H), Image.LANCZOS).save(OUT / "logo-03-pino-modular.png")


if __name__ == "__main__":
    concept_1()
    concept_2()
    concept_3()
    print("ok")
