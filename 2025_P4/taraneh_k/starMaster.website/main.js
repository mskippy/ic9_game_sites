// Minimal starfield
    (function () {
      const canvas = document.getElementById('stars');
      const ctx = canvas.getContext('2d');
      let w, h, stars;

      function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        stars = new Array(Math.floor(w * h / 6000)).fill().map(() => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.2,
          c: Math.random() < 0.6 ? 'rgba(255,255,255,0.8)'
            : (Math.random() < 0.5 ? 'rgba(1,174,247,0.8)' : 'rgba(255,221,0,0.8)')
        }));
        draw();
      }

      function draw() {
        ctx.clearRect(0, 0, w, h);
        for (const s of stars) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = s.c;
          ctx.fill();
        }
      }

      function animate() {
        for (const s of stars) {
          s.y += s.r * 0.02;
          if (s.y > h) s.y = 0;
        }
        draw();
        requestAnimationFrame(animate);
      }

      window.addEventListener('resize', resize);
      resize();
      animate();
    })();