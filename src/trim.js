const trim = (str, all) => {
	if (all) {
		return str.replace(/\s/gi, '');
	} else {
		if (String.prototype.trim) return str.trim();
		return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	}
};

export default trim;
