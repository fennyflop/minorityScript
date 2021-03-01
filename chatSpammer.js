let chatSpammer = {};

let keybindHandle = Menu.AddKeyBind(['Chat'], 'Bind', Enum.ButtonCode.KEY_H);

chatSpammer.OnKeyEvent = (keyEvent) => {
    if (keyEvent.key + 50 === keybindHandle.GetKeyString().charCodeAt(0)) { // chareCode у мелонити на 50 меньше :(
        const channels = Chat.GetChannels();
        channels.forEach((channel) => {
            Chat.Say(channel, 'я гуль'); // Любой текст
        });
    }
};

RegisterScript(chatSpammer);
