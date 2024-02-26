class AnimationFrame {
	constructor(animate, fps) {
		this.requestID = 0;
		this.fps = fps;
		this.animate = animate;
		this.isStart = false;
	}
	
	start() {
		if (this.isStart) return;
		this.isStart = true;
		
		let now;
		let delta;
		let loop;
		let then = Date.now();
		
		const interval = 1000 / this.fps;
		
		if (this.fps < 60) {
			loop = () => {
				this.requestID = requestAnimationFrame(loop);
				now = Date.now();
				delta = now - then;
				
				if (delta > interval) {
					then = now - (delta % interval);
					this.animate();
				}
			};
		} else {
			loop = () => {
				this.requestID = requestAnimationFrame(loop);
				this.animate();
			};
		}
		
		this.requestID = requestAnimationFrame(loop);
	}
	
	stop() {
		this.isStart = false;
		cancelAnimationFrame(this.requestID);
	}
}

export default AnimationFrame;
