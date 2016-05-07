/*
 The MIT License (MIT)

 Copyright (c) 2016 Bartlomiej Koper <bkoper@gmail.com>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the 'Software'), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

import {Gpio} from "artik-io";
import RainDetector from "./rainDetector";

let rainDetector = new RainDetector(Gpio.pins.ARTIK_10[3], Gpio.pins.ARTIK_10["analog0"]);

const startsRainingCallback = () => console.log("starts raining");
const stopsRainingCallback = () => console.log("stops raining");
const rainIntense = val => console.log(`It's raining with power of ${val}%`);

rainDetector.on(RainDetector.events.START_RAINING, startsRainingCallback);
rainDetector.on(RainDetector.events.STOP_RAINING, stopsRainingCallback);

setInterval(() => {
    console.log(rainDetector.getIntense(rainIntense))
}, 1000);
