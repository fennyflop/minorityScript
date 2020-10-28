let exampleScript = {};

exampleScript.OnGameStart = () => {
    setTimeout(() => {
        console.log("Timeout finished");
        setInterval(() => {
            setTimeout(() => {
                console.log('You can stack soon');
            }, 40000);
        }, 60000);
    }, 73000)
};

RegisterScript(exampleScript);  