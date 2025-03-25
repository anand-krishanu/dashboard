package com.anand.BACKEND.repository;

import com.anand.BACKEND.entity.SensorData;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface SensorDataRepository extends MongoRepository<SensorData, String> {
    Optional<SensorData> findTopByOrderByTimestampDesc();
}
