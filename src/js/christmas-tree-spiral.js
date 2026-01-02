const LIGHTS = 50;
const tree = document.getElementById('tree');

const genConfig = l => ({
  rotate: (1440 / LIGHTS) * (LIGHTS - l),
  radius: (12.5 / LIGHTS) * (LIGHTS - l),
  y: (100 / LIGHTS) * l,
  speed: Math.random() * 10,
  delay: Math.random() * -10,
  appear: l,
});

for (let l = 0; l < LIGHTS; l += 1) {
  const { radius, rotate, y, speed, delay, appear } = genConfig(l);

  const light = document.createElement('div');
  light.className = 'tree-light';
  light.style.cssText = `
      --appear: ${appear};
      --y: ${y};
      --rotate: ${rotate};
      --radius: ${radius};
      --speed: ${speed};
      --delay: ${delay};
    `;

  tree.appendChild(light);
}
