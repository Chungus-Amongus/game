import nengi from 'nengi'
export function TestCommand(text) {
	this.text = text
}
TestCommand.protocol = {
	text: nengi.String
}
