package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Player;
import net.javaguides.springboot.repository.PlayerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PlayerController {

	@Autowired
	private PlayerRepository playerRepository;

	// get all players
	@GetMapping("/players")
	public List<Player> getAllPlayers() {
		return playerRepository.findAll();
	}

	// create player rest api
	@PostMapping("/players")
	public Player createPlayer(@RequestBody Player player) {
		return playerRepository.save(player);
	}

	// get player by id rest api
	@GetMapping("/players/{id}")
	public ResponseEntity<Player> getPlayerById(@PathVariable Long id) {
		Player player = playerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Player not exist with id :" + id));
		return ResponseEntity.ok(player);
	}

	// update player rest api

	@PutMapping("/players/{id}")
	public ResponseEntity<Player> updatePlayer(@PathVariable Long id, @RequestBody Player playerDetails) {
		Player player = playerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Player not exist with id :" + id));

		player.setFirstName(playerDetails.getFirstName());
		player.setLastName(playerDetails.getLastName());
		player.setEmailId(playerDetails.getEmailId());
		player.setPseudo(playerDetails.getPseudo());
		Player updatedPlayer = playerRepository.save(player);
		return ResponseEntity.ok(updatedPlayer);
	}

	// delete player rest api
	@DeleteMapping("/players/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePlayer(@PathVariable Long id) {
		Player player = playerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Player not exist with id :" + id));

		playerRepository.delete(player);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
