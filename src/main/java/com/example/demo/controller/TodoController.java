package com.example.demo.controller;

import com.example.demo.entity.Todo;
import com.example.demo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todo")
public class TodoController {
    private final TodoService todoService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Todo> getTodoList() {
        return todoService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public Todo getTodo(@PathVariable("id") Long id) {
        return todoService.findOne(id).orElseThrow(RuntimeException::new);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Todo createUser(@Validated @RequestBody Todo todo) {
        return todoService.save(todo);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "{id}")
    public Todo updateUser(@PathVariable("id") Long id, @RequestBody Todo todo) {
        todo.setId(id);
        return todoService.save(todo);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        todoService.delete(id);
    }

}
