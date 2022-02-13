function shout(word) {
    return word.toUpperCase();

};

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    string = "hello"
    string = string.toUpperCase();
    console.log(string);
    
};

function logShout(string) {
    string = "hello"
    string = string.toUpperCase();
    console.log(string);
    
};function logWhisper(string) {
    string = "hello"
    string = string.toLowerCase();
    console.log(string);
};

function sayHiToHeadphonedRoommate(string) {
    const lowerString = string.toLowerCase();
    const upperString = string.toUpperCase();
    const messageI = "I can\'t hear you!";
    const messageII = "YES INDEED!";
    const messageIII = "I would love to!";
    const eatDinner = "Let\'s have dinner together!";

    if (string === lowerString) {
        return messageI;
    } else if(string === upperString) {
        return messageII;
    } else if (string === eatDinner) {
        return messageIII;
    };
};



