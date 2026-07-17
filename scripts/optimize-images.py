"""Generate the responsive WebP files used by the site."""

from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT / "public" / "assets" / "img"
OUTPUT_ROOT = ROOT / "public" / "assets" / "optimized"
WIDTHS = (480, 768, 1200)
QUALITY = 82

USED_IMAGES = (
    "services/atelier.jpg",
    "services/bees.jpg",
    "services/fire.jpg",
    "services/trading.jpg",
    "lemon/1.jpg",
    "lemon/2.jpg",
    "lemon/3.jpg",
    "lemon/4.jpg",
    "lemon/5.jpg",
    "gallery/1.jpg",
    "gallery/7.jpg",
    "gallery/10.jpg",
    "gallery/14.jpg",
    "gallery/19.jpg",
    "gallery/22.jpg",
    "gallery/27.jpg",
    "gallery/39.png",
    "gallery/47.jpg",
    "gallery/55.jpg",
    "gallery/61.jpg",
)


def output_name(relative_path: str, width: int) -> str:
    stem = Path(relative_path).with_suffix("").as_posix().replace("/", "-")
    return f"{stem}-{width}.webp"


def main() -> None:
    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)
    original_bytes = 0
    optimized_bytes = 0

    for relative_path in USED_IMAGES:
        source = SOURCE_ROOT / relative_path
        original_bytes += source.stat().st_size

        with Image.open(source) as opened:
            image = ImageOps.exif_transpose(opened).convert("RGB")
            for width in WIDTHS:
                height = round(image.height * width / image.width)
                resized = image.resize((width, height), Image.Resampling.LANCZOS)
                destination = OUTPUT_ROOT / output_name(relative_path, width)
                resized.save(destination, "WEBP", quality=QUALITY, method=6)
                optimized_bytes += destination.stat().st_size

    print(f"Generated {len(USED_IMAGES) * len(WIDTHS)} responsive images")
    print(f"Source set: {original_bytes / 1024 / 1024:.2f} MB")
    print(f"All variants: {optimized_bytes / 1024 / 1024:.2f} MB")


if __name__ == "__main__":
    main()
