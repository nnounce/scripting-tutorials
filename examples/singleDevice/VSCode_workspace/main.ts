import { nnounceDevice } from "jsr:@nnounce/scripting-sdk@~1.6.0";

const device = await nnounceDevice().connectionPromise();

device.logger.info("single nnounce device scripting");