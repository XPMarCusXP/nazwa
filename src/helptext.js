
module.exports = [
    'Help Text Menu :question:',
    '{0}ping: "Check if the bot is online"',
    '{0}join: "Join your voice channel"',
    '{0}leave: "Leave current voice channel"',
    '{0}play: "Start playing the current song"',
    '{0}pause: "Pause the current song"',
    '{0}resume: "Resume the current song"',
    '{0}time: "Time of the current song"',
    '{0}enqueue [type] [url/last fragment]: "Add a song to the end of the queue"',
    '{0}dequeue [index]: "Remove a song from the queue"',
    '{0}add [type] [url/fragment]: "Alias for enqueue"',
    '{0}remove [index]: "Alias for dequeue"',
    '{0}youtube [url/last fragment of url]: "Short alias to enqueue youtube tracks" Ex: {0}youtube (2PD1I5k0-ZY, fxOjcjl3TFU)',
    '{0}skip: "Skip the current song"',
    '{0}stop: "Stop and reset the current song"',
    '{0}list: "List all songs in the queue"',
    '{0}move [index of song] [up/down]: "Move a song up or down in the queue" Ex: {0}move 4 up',
    '{0}shuffle: "Shuffle songs in the queue, will stop current song"',
    '{0}clear: "Clear songs in the queue"',
    '{0}volume [0-100 or nothing]: "Set volume to a number between 0-100" Ex: {0}volume 43',
    '{0}repeat: "Toggle playlist repeat mode"',
    '{0}playlist [save/load/delete/list][playlist name]: Ex: {0}playlist save:Calamity   Ex: {0}playlist load:Calamity'
].join('\n');