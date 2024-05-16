import { BooksLangList } from "./Books";

import en from "../data/books/en.json";
import nob from "../data/books/nob.json";
import pl from "../data/books/pl.json";
import ptBr from "../data/books/pt-br.json";
import de from "../data/books/de.json";
import zhCN from "../data/books/zh-CN.json";
import zhHK from "../data/books/zh-HK.json";
import zhHK from "../data/books/es.json";

// prettier-ignore
const booksNames = {
	"Chinese Simplified": zhCN,
	"Chinese Traditional": zhHK,
	"English": en,
	"German": de,
	"Norwegian": nob,
	"Polish": pl,
	"Portuguese (Brazil)": ptBr,
	"Español": es,
} as BooksLangList;

export default booksNames;
