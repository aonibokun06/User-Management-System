package com.crudapp.config;

import com.crudapp.entity.User;
import com.crudapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        // Only add sample data if no users exist
        if (userRepository.count() == 0) {
            addSampleUsers();
        }
    }

    private void addSampleUsers() {
        User user1 = new User("John Doe", "john.doe@example.com", "Software Developer with 5 years of experience in Java and Spring Boot");
        User user2 = new User("Jane Smith", "jane.smith@example.com", "Frontend Developer specializing in React and modern JavaScript");
        User user3 = new User("Mike Johnson", "mike.johnson@example.com", "DevOps Engineer with expertise in Docker and Kubernetes");
        User user4 = new User("Sarah Wilson", "sarah.wilson@example.com", "Product Manager with a background in agile methodologies");
        User user5 = new User("David Brown", "david.brown@example.com", "Data Scientist working with machine learning and big data");

        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);
        userRepository.save(user4);
        userRepository.save(user5);

        System.out.println("✅ Sample users have been added to the database!");
    }
} 