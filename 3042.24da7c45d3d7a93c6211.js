/*! For license information please see 3042.24da7c45d3d7a93c6211.js.LICENSE.txt */
"use strict";(self.webpackChunksn_extension_template=self.webpackChunksn_extension_template||[]).push([[3042],{43042:(e,n,t)=>{t.r(n),t.d(n,{conf:()=>s,language:()=>o});var s={comments:{lineComment:"--",blockComment:["--[[","]]"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},o={defaultToken:"",tokenPostfix:".lua",keywords:["and","break","do","else","elseif","end","false","for","function","goto","if","in","local","nil","not","or","repeat","return","then","true","until","while"],brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"}],operators:["+","-","*","/","%","^","#","==","~=","<=",">=","<",">","=",";",":",",",".","..","..."],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,["delimiter","","key","","delimiter"]],[/({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,["@brackets","","key","","delimiter"]],[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string",'@string."'],[/'/,"string","@string.'"]],whitespace:[[/[ \t\r\n]+/,""],[/--\[([=]*)\[/,"comment","@comment.$1"],[/--.*$/,"comment"]],comment:[[/[^\]]+/,"comment"],[/\]([=]*)\]/,{cases:{"$1==$S2":{token:"comment",next:"@pop"},"@default":"comment"}}],[/./,"comment"]],string:[[/[^\\"']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}]]}}}}]);