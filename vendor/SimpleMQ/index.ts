import events from "events";
import EventTypes from "../../types/eventTypes";
import TypedEmitter from "typed-emitter"

const SimpleMQ = new events.EventEmitter() as TypedEmitter<EventTypes>;

export default SimpleMQ;