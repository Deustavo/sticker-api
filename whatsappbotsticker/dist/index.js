"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const venom_bot_1 = require("venom-bot");
const promises_1 = require("fs/promises");
const mime_types_1 = __importDefault(require("mime-types"));
function main(whats) {
    whats.onMessage((message) => __awaiter(this, void 0, void 0, function* () {
        console.log(message.sender.name);
        if (message.sender.name === 'inha') {
            try {
                const buffer = yield whats.decryptFile(message);
                const fileName = `teste.${mime_types_1.default.extension(message.mimetype)}`;
                yield promises_1.writeFile(fileName, buffer);
                yield whats.sendImageAsSticker(message.from, fileName);
            }
            catch (error) {
                console.error(error);
            }
        }
    }));
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    let venom = yield venom_bot_1.create("bot-sticker");
    main(venom);
}))();
