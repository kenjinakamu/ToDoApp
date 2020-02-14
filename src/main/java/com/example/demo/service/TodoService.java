package com.example.demo.service;

import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    public Optional<Todo> findOne(Long id) {
        return todoRepository.findById(id);
    }

    public Todo save(Todo player) {
        return todoRepository.save(player);
    }

    public void delete(Long id) {
        todoRepository.deleteById(id);
    }
}
