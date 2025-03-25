package com.anand.BACKEND.controller;

import com.anand.BACKEND.entity.SensorData;
import com.anand.BACKEND.service.SensorDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sensor")
public class SensorDataController {

    @Autowired
    SensorDataService sensorDataService;

    @GetMapping("/latest")
    public SensorData getSensorData () {
        return sensorDataService.getLatestData();
    }

    @PostMapping("/add")
    public void addSensorData(@RequestBody SensorData data) {
        sensorDataService.saveSensorData(data);
    }
}