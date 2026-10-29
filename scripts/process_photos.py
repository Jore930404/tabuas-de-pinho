import json
import shutil
from pathlib import Path
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

OBJ = Path(r"C:\Users\Desktop\.dsh\attachments\v1\objects")
OUT = Path(r"C:\Proyectos\Landing-Page\tabuas-de-pinho\public\img")
OUT.mkdir(parents=True, exist_ok=True)

SRC = {
    "aparador": "fe8e29199e7dec92248d0cdbd64a533b744beac03193e8f0077469f99442be1e",
    "cama": "acfe92a0797fced312a73e815c9e6972ab335b160f546c535067e77f2412d2ea",
    "bar": "4af4ee5912c06e07cb73bfbc49068b36c7442c00682b49bba32097ebc09e49e4",
    "mesa": "5982ca55b390a734716741e00cb364a146356ae6c4d742e57b08040af2152ed5",
    "poltronas": "c27a4d1a882162997f517b261a02c6ae462228972c42044460a6dc5c4c19ee6e",
    "painel": "a5dde80e2b2dbdeb46f70bd80cdfda7944df422166b01fdf9ecede9db361d75c",
    "carrinho": "8c823315aedace96eb5f74c3e60c4f9a84fe7e75bd1ce6e302d1852d354464f4",
    "balcao": "353d1598851ba920138cd7341400cff8b610eff299b710eaf17c051f26046c82",
    "estante": "33250695d2e251018df891161f2fcdeae8bccf512b0e2d165a048d3338ac1246",
    "jonnatan": "eadb1f2a68fd1c7408576288be0a7e3d866d294d9b942e517c4fd69fb5a2362c",
}

# Algunas capturas de WhatsApp traen barras negras arriba y abajo.
CROPS = {
    "mesa": (0, 164, 714, 1435),
    "carrinho": (0, 164, 714, 1435),
    "jonnatan": (0, 0, 720, 710),
}


def src_path(sha: str) -> Path:
    return OBJ / sha[:2] / sha


def resize_to(img: Image.Image, target: int) -> Image.Image:
    w, h = img.size
    longest = max(w, h)
    if longest <= target:
        return img.copy()
    scale = target / longest
    return img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)


for old in OUT.glob("*"):
    old.unlink()

photos = []
for slug, sha in SRC.items():
    img = Image.open(src_path(sha))
    if slug in CROPS:
        img = img.crop(CROPS[slug])
    img = img.convert("RGB")

    if slug == "jonnatan":
        img = ImageEnhance.Brightness(img).enhance(1.03)
        img = ImageEnhance.Contrast(img).enhance(1.07)
        img = ImageEnhance.Color(img).enhance(1.04)
        img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=55, threshold=3))

    small = resize_to(img, 640)
    big = resize_to(img, 1280)

    small.save(OUT / f"{slug}-640.jpg", "JPEG", quality=80, optimize=True, progressive=True)
    small.save(OUT / f"{slug}-640.webp", "WEBP", quality=78, method=6)

    has_big = big.width > small.width
    if has_big:
        big.save(OUT / f"{slug}-1280.jpg", "JPEG", quality=82, optimize=True, progressive=True)
        big.save(OUT / f"{slug}-1280.webp", "WEBP", quality=80, method=6)

    main = big if has_big else small
    src_w = main.width
    src_suffix = "1280" if has_big else "640"

    jpgset = f"/img/{slug}-640.jpg {small.width}w"
    webpset = f"/img/{slug}-640.webp {small.width}w"
    if has_big:
        jpgset += f", /img/{slug}-1280.jpg {big.width}w"
        webpset += f", /img/{slug}-1280.webp {big.width}w"

    photos.append({
        "slug": slug,
        "src": f"/img/{slug}-{src_suffix}.jpg",
        "srcset": jpgset,
        "webp": f"/img/{slug}-{src_suffix}.webp",
        "webpset": webpset,
        "width": src_w,
        "height": main.height,
        "ratio": round(src_w / main.height, 4),
    })

Path(r"C:\Proyectos\Landing-Page\tabuas-de-pinho\src\data").mkdir(parents=True, exist_ok=True)
Path(r"C:\Proyectos\Landing-Page\tabuas-de-pinho\src\data\photos.json").write_text(
    json.dumps(photos, ensure_ascii=False, indent=2), encoding="utf-8"
)

FONTS = Path(r"C:\Windows\Fonts")
cream = "#F7F0E2"
green = "#1F4527"
wood = "#C08552"
muted = "#6B5B45"

og = Image.new("RGB", (1200, 630), cream)
d = ImageDraw.Draw(og)

icon = Image.open(r"C:\Proyectos\Landing-Page\tabuas-de-pinho\brand\icono-v14.png").convert("RGB")
icon = icon.resize((360, 360), Image.LANCZOS)
og.paste(icon, (70, 135))
d.rectangle((70, 135, 430, 495), outline="#E2D3B6", width=3)

f_title = ImageFont.truetype(str(FONTS / "georgiab.ttf"), 62)
f_sub = ImageFont.truetype(str(FONTS / "trebucbd.ttf"), 25)
f_tag = ImageFont.truetype(str(FONTS / "georgiai.ttf"), 26)
f_small = ImageFont.truetype(str(FONTS / "trebuc.ttf"), 20)

d.text((480, 210), "TÁBUAS DE PINHO", font=f_title, fill=green)
d.text((482, 290), "CARPINTARIA & DESIGN", font=f_sub, fill="#2E6B3A")
d.line((482, 345, 1120, 345), fill=wood, width=3)
d.text((482, 380), "Móveis sob medida em pino maciço", font=f_tag, fill=muted)
d.text((482, 425), "Ponta Grossa · Paraná", font=f_small, fill=muted)

og.save(r"C:\Proyectos\Landing-Page\tabuas-de-pinho\public\og.jpg", "JPEG", quality=88, optimize=True)

shutil.copyfile(
    r"C:\Proyectos\Landing-Page\tabuas-de-pinho\brand\icono-v14.svg",
    r"C:\Proyectos\Landing-Page\tabuas-de-pinho\public\favicon.svg",
)
icon.resize((180, 180), Image.LANCZOS).save(
    r"C:\Proyectos\Landing-Page\tabuas-de-pinho\public\apple-touch-icon.png", "PNG"
)

print("photos:", len(photos))
print("ok")
