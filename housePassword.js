/**
 * https://js.checkio.org/mission/house-password/
 */

function housePassword(password) {
	if (password.match(/[a-z]+/g) && password.match(/[A-Z]+/g) && password.match(/[0-9]+/g) && password.length >= 10) return true;
	return false
}

housePassword('A1213pokl') == false
housePassword('bAse730onE') == true
housePassword('asasasasasasasaas') == false
housePassword('QWERTYqwerty') == false
housePassword('123456123456') == false
housePassword('QwErTy911poqqqq') == true