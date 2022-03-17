import nengi from 'nengi'
export function TestMessage(text){
    this.text = text
}
TestMessage.protocol = {
    text: nengi.String
}
