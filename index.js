module.exports = {
    Devices: require("./dist/device").default,
    Led: require("./dist/led").default,
    RainDetector: require("./dist/rainDetector").default,
    SoilHumid: require("./dist/soilHumid").default,
    Switcher: require("./dist/switcher").default,
    WaterFlow: require("./dist/waterFlowSensor").default
};
