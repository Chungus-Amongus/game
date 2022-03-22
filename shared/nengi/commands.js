import nengi from 'nengi'
export function TestCommand(text){
	this.text = text
}
TestCommand.protocol = {
	text: nengi.String
}
export function ActionMessage(playerAction){
	this.playerAction = playerAction
}
ActionMessage.protocol = {
	playerAction: nengi.UInt6
}
export function WASDMessage(wasdState){
	this.wasdState = wasdState
}
WASDMessage.protocol = {
	wasdState: nengi.UInt3
}