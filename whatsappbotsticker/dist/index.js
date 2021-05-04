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
Object.defineProperty(exports, "__esModule", { value: true });
const venom_bot_1 = require("venom-bot");
function main(whats) {
    whats.onMessage((message) => __awaiter(this, void 0, void 0, function* () {
        console.log(message);
        if (message.type !== 'image') {
            whats.sendText(message.from, message.body);
        }
        else {
            yield whats.sendImageAsSticker(message.from, "https://scontent.fmii2-2.fna.fbcdn.net/v/t1.6435-9/175194816_2838672856385560_782809420865459703_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEPp6uUzVwhvib8qnpolHR8Z8cCnRsTnk9nxwKdGxOeT89eAaX4BdXOF2dpekup0198iFRM6QqbW1qQOIYcoXFb&_nc_ohc=HNH2XaDY_xYAX9eUj_h&_nc_ht=scontent.fmii2-2.fna&oh=bc7f6e2efcc6df56a05a4a82e2ba62fd&oe=60B57DB9")
                .then((result) => {
                console.log('Result: ', result); //return object success
            })
                .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
        }
    }));
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    let venom = yield venom_bot_1.create();
    main(venom);
}))();
