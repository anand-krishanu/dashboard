package com.anand.BACKEND.handler;

import com.anand.BACKEND.entity.SensorData;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;

@Component
public class SensorDataWebSocketHandler extends TextWebSocketHandler {
    private static final CopyOnWriteArraySet<WebSocketSession> sessions = new CopyOnWriteArraySet<>();

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void afterConnectionEstablished (WebSocketSession session) {
        sessions.add(session);
    }

    @Override
    public void handleTextMessage (WebSocketSession session, TextMessage message) {
        // This method is left empty as now data is sent from the client to the server
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
    }

    public void sendSensorData(SensorData sensorData) {
        try {
            String json = objectMapper.writeValueAsString(sensorData);
            for (WebSocketSession session : sessions) {
                if (session.isOpen()) {
                    session.sendMessage(new TextMessage(json));
                } else {
                    sessions.remove(session);
                }
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
