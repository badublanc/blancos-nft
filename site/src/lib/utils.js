export const shortenAddress = (_address) => {
	if (!_address) return null;
	return _address.substring(0, 6) + '...' + _address.substring(_address.length - 4);
};
