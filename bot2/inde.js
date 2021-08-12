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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var baileys_1 = require("@adiwajshing/baileys");
var baileys_2 = require("@adiwajshing/baileys");
// Sending gifs
var music_dl_1 = require("./music_dl");
var gm = music_dl_1.get_music_yt;
function connectToWhatsApp() {
    return __awaiter(this, void 0, void 0, function () {
        var conn;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    conn = new baileys_1.WAConnection();
                    // called when WA sends chats
                    // this can take up to a few minutes if you have thousands of chats!
                    conn.on('chats-received', function (_a) {
                        var hasNewChats = _a.hasNewChats;
                        return __awaiter(_this, void 0, void 0, function () {
                            var unread;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        console.log("you have " + conn.chats.length + " chats, new chats available: " + hasNewChats);
                                        return [4 /*yield*/, conn.loadAllUnreadMessages()];
                                    case 1:
                                        unread = _b.sent();
                                        console.log("you have " + unread.length + " unread messages");
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    // called when WA sends chats
                    // this can take up to a few minutes if you have thousands of contacts!
                    conn.on('contacts-received', function () {
                        console.log('you have ' + Object.keys(conn.contacts).length + ' contacts');
                    });
                    // conn.on ('open', () => {
                    //     // save credentials whenever updated
                    //     console.log (`credentials updated!`)
                    //     const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
                    //     fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
                    // })
                    conn.loadAuthInfo('./auth_info.json'); // will load JSON credentials from file
                    return [4 /*yield*/, conn.connect()];
                case 1:
                    _a.sent();
                    conn.on('chat-update', function (chatUpdate) {
                        // `chatUpdate` is a partial object, containing the updated properties of the chat
                        // received a new message
                        if (chatUpdate.messages && chatUpdate.count) {
                            var message = chatUpdate.messages.all()[0];
                            var msgText = message.message.conversation;
                            var idAuthor = message.key.remoteJid;
                            var args = msgText;
                            console.log(args);
                            args.toLowerCase();
                            var arg = args.split(' ');
                            console.log(arg);
                            var command = arg[0];
                            console.log(command);
                            //creatting command for music
                            if (command == '/music') {
                                var music = arg.slice(1, args.length);
                                music = music.join(' ');
                                console.log(idAuthor + " requiriu a musica " + music);
                                conn.sendMessage(idAuthor, "musica " + music + " requerida", baileys_2.MessageType.text);
                                var calli = function (name_music) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log("url_music: " + name_music);
                                                return [4 /*yield*/, conn.sendMessage(idAuthor, { url: "clubbed_of_death.mp3" }, // can send mp3, mp4, & ogg
                                                    baileys_2.MessageType.audio, { mimetype: baileys_2.Mimetype.mp4Audio })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                gm(music, calli);
                            }
                            console.log("mensagem: " + msgText);
                        }
                        else
                            console.log(''); // see updates (can be archived, pinned etc.)
                    });
                    return [2 /*return*/];
            }
        });
    });
}
connectToWhatsApp()["catch"](function (err) { return console.log("unexpected error: " + err); });
