package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {

}
