import { create, Whatsapp } from 'venom-bot';

function main(whats: Whatsapp) {
    whats.onMessage(async (message) => {
        console.log(message);
        if (message.type === 'image') {
            await whats.sendImageAsSticker(message.from, "https://scontent.fmii2-2.fna.fbcdn.net/v/t1.6435-9/175194816_2838672856385560_782809420865459703_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEPp6uUzVwhvib8qnpolHR8Z8cCnRsTnk9nxwKdGxOeT89eAaX4BdXOF2dpekup0198iFRM6QqbW1qQOIYcoXFb&_nc_ohc=HNH2XaDY_xYAX9eUj_h&_nc_ht=scontent.fmii2-2.fna&oh=bc7f6e2efcc6df56a05a4a82e2ba62fd&oe=60B57DB9")
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
            });
        } else {
            whats.sendText(message.from, message.body);
        }
    });
}

(async () => {
    let venom = await create();
    main(venom);
})();

