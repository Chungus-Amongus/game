import nengi from 'nengi'
// a request by the client to perform some game action
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