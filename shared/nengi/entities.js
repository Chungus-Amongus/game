// this video by nengi developer is extremely important and explains why not everything should be an entity and also about a 'sleep' feature that the entity system has which is a big optimization that must be used in large games: https://www.youtube.com/watch?v=aWQa2UKkwE4
import nengi from 'nengi'
// im trying to go the composition over inheritance route and describe what needs synced about an entity by what it can do, not what it is. so when i finally get to the part where i make an entity named "Player" it will be a composite of a PositionHaver, Rotater, Scaler, and plenty more im sure
export function PositionHaver() {
	this.x = 0
	this.y = 0
}
PositionHaver.protocol = {
	x: { type: nengi.Float32, interp: true },
	y: { type: nengi.Float32, interp: true },
}
PositionHaver.prototype.someLogic = function(){
	// etc
}