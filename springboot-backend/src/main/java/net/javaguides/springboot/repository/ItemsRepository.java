package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.Items;

public interface ItemsRepository extends JpaRepository<Items, Long> {

}
