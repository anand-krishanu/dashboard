package com.anand.BACKEND.service;

import com.anand.BACKEND.entity.SensorData;
import com.anand.BACKEND.handler.SensorDataWebSocketHandler;
import com.anand.BACKEND.repository.SensorDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class SensorDataService {

    private final SensorDataRepository repository;
    private final SensorDataWebSocketHandler handler;

    @Autowired
    public SensorDataService(SensorDataRepository repository, SensorDataWebSocketHandler handler) {
        this.repository = repository;
        this.handler = handler;
    }

    public void saveSensorData(SensorData data) {
        data.setTimestamp(Instant.now());
        repository.save(data);
        handler.sendSensorData(data);
    }

    public SensorData getLatestData() {
        return repository.findTopByOrderByTimestampDesc().orElse(null);
    }
}
