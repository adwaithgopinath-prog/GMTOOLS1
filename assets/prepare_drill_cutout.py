from collections import Counter, deque
from math import sqrt
from pathlib import Path

from PIL import Image


folder = Path(__file__).parent
source = Image.open(folder / 'home-prod1-source.jpg').convert('RGB')
width, height = source.size
pixels = source.load()
corners = [pixels[0, 0], pixels[width - 1, 0], pixels[0, height - 1], pixels[width - 1, height - 1]]
background = Counter(corners).most_common(1)[0][0]
size = width * height
candidate = bytearray(size)
visited = bytearray(size)

for y in range(height):
    for x in range(width):
        red, green, blue = pixels[x, y]
        chroma = max(red, green, blue) - min(red, green, blue)
        distance = sqrt((red - background[0]) ** 2 + (green - background[1]) ** 2 + (blue - background[2]) ** 2)
        if min(red, green, blue) > 155 and chroma < 62 and distance < 62:
            candidate[y * width + x] = 1

queue = deque()
for x in range(width):
    for y in (0, height - 1):
        index = y * width + x
        if candidate[index] and not visited[index]:
            visited[index] = 1
            queue.append(index)
for y in range(height):
    for x in (0, width - 1):
        index = y * width + x
        if candidate[index] and not visited[index]:
            visited[index] = 1
            queue.append(index)

while queue:
    index = queue.popleft()
    x, y = index % width, index // width
    for next_index in (index - 1 if x else -1, index + 1 if x + 1 < width else -1,
                       index - width if y else -1, index + width if y + 1 < height else -1):
        if next_index >= 0 and candidate[next_index] and not visited[next_index]:
            visited[next_index] = 1
            queue.append(next_index)

rgba = Image.new('RGBA', source.size)
output = []
for y in range(height):
    for x in range(width):
        red, green, blue = pixels[x, y]
        index = y * width + x
        if not visited[index]:
            output.append((red, green, blue, 255))
            continue
        distance = sqrt((red - background[0]) ** 2 + (green - background[1]) ** 2 + (blue - background[2]) ** 2)
        alpha = max(0, min(255, int((distance - 19) * 255 / 34)))
        if alpha < 18:
            output.append((0, 0, 0, 0))
            continue
        opacity = alpha / 255
        foreground = tuple(max(0, min(255, int((color - base * (1 - opacity)) / opacity))) for color, base in zip((red, green, blue), background))
        output.append((*foreground, alpha))

rgba.putdata(output)
alpha_channel = rgba.getchannel('A')
bounds = alpha_channel.point(lambda value: 255 if value > 12 else 0).getbbox()
if bounds:
    left, top, right, bottom = bounds
    margin = 8
    bounds = (max(0, left - margin), max(0, top - margin), min(width, right + margin), min(height, bottom + margin))
    rgba = rgba.crop(bounds)
rgba.save(folder / 'home-prod1-cutout.png', optimize=True)
print(f'Created {folder / "home-prod1-cutout.png"} ({rgba.width}×{rgba.height}) from {width}×{height} photo')
