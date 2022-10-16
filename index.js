import format from "prettier-eslint";
import { resolve } from "path";

try {
	const filePath = resolve('text.js');
	const result = await format({ filePath });
	console.log(result);
} catch (error) {
	console.log(error);
}
