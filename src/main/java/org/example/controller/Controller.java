package org.example.controller;

import org.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.example.model.User;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class Controller {


    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{name}")
    public ResponseEntity<String> greetUser(@PathVariable String name) {
        return ResponseEntity.ok("Olá, " + name + "!");
    }

    @GetMapping("/list")
    public ResponseEntity<List<User>> listAllUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (user == null || user.getName() == null || user.getEmail() == null || user.getAge() <= 0 ) {
            return ResponseEntity.badRequest().body("Name and email are required");
        }

        User savedUser = userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        try {
            Optional<User> optionalUser = userRepository.findById(id);
            if (optionalUser.isEmpty()) {
                return ResponseEntity.notFound().build();
            }
            userRepository.deleteById(id);
            return ResponseEntity.ok("User deleted successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user: " + e.getMessage());
        }
    }

    @GetMapping("/searchById")
    public ResponseEntity<?> searchUserById(@RequestParam Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(optionalUser.get());
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        try {
            if (user.getId() == null) {
                return ResponseEntity.badRequest().body("ID not provided for update");
            }
            User existingUser = userRepository.findById(user.getId()).orElse(null);
            if (existingUser == null) {
                return ResponseEntity.notFound().build();
            }
            User updatedUser = userRepository.save(user);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating user: " + e.getMessage());
        }
    }
    @GetMapping("/searchByName")
    @ResponseBody
    public ResponseEntity<List<User>> searchUsersByName( @RequestParam(name="name") String name) {
        List<User> users = userRepository.searchByName(name.trim().toUpperCase());
        return ResponseEntity.ok(users);
    }

}
