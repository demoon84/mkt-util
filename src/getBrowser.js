const getBrowser = () => {
	const agent = navigator.userAgent.toLowerCase();
	const trident = agent.match(/trident\/(\d.\d)/i);
	
	if (trident !== null) {
		if (trident[1] === '7.0') return 'ie' + 11;
		if (trident[1] === '6.0') return 'ie' + 10;
	}
	
	if (navigator.appName === 'Microsoft Internet Explorer') return 'ie' + 7;
	
	if (agent.indexOf('edge') !== -1) return 'edge';
	if (agent.indexOf('chrome') !== -1) return 'chrome';
	if (agent.indexOf('opera') !== -1) return 'opera';
	if (agent.indexOf('firefox') !== -1) return 'firefox';
	if (agent.indexOf('safari') !== -1) return 'safari';
};

export default getBrowser;
