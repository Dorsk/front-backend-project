package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.Power;

public interface PowerRepository extends JpaRepository<Power, Long> {

}
