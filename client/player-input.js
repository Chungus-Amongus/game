/*
how input works:
- record all keypresses locally
- client has a concept of all game actions. it detects if the keypress(es) should do an action, if so it sends an ActionMessage (nengi message) to the server to request that action be done
- some actions require no interaction with the server like opening a menu. in that case input fires an event, and the UI can listen for that event, and any unknown things in the future can also listen to those events
*/
import { ActionMessage, WASDMessage } from "../shared/nengi/commands";