function fn1() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener('resize', function(event) {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    });

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function xq(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        this.updata = function() {
            if (this.x + this.radius > w || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > h || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    let items = [];

    let radius = random(3, 5);
    let x = random(radius / 2, w);
    let y = random(radius / 2, h);
    let dx = random(-1, 1);
    let dy = random(-1, 1);
    items.push(new xq(x, y, dx, dy, radius, `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`))

    // 动画
    function animate() {
        requestAnimationFrame(animate);
        // ctx.clearRect(0,0,w,h)
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(0, 0, w, h);
        for (let b of items) {
            b.updata();
        }
    }
    animate();
}
fn1();