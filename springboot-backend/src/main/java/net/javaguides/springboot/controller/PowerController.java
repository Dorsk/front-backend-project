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
import net.javaguides.springboot.model.Power;
import net.javaguides.springboot.repository.PowerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PowerController {

	@Autowired
	private PowerRepository powerRepository;

	// get all powers
	@GetMapping("/powers")
	public List<Power> getAllPowers() {
		return powerRepository.findAll();
	}

	// create power rest api
	@PostMapping("/powers")
	public Power createPower(@RequestBody Power power) {
		return powerRepository.save(power);
	}

	// get power by id rest api
	@GetMapping("/powers/{id}")
	public ResponseEntity<Power> getPowerById(@PathVariable Long id) {
		Power power = powerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Power not exist with id :" + id));
		return ResponseEntity.ok(power);
	}

	// update power rest api

	@PutMapping("/powers/{id}")
	public ResponseEntity<Power> updatePower(@PathVariable Long id, @RequestBody Power powerDetails) {
		Power power = powerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Power not exist with id :" + id));

		power.setName(powerDetails.getName());
		power.setDescription(powerDetails.getDescription());
		Power updatedPower = powerRepository.save(power);
		return ResponseEntity.ok(updatedPower);
	}

	// delete power rest api
	@DeleteMapping("/powers/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePower(@PathVariable Long id) {
		Power power = powerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Power not exist with id :" + id));

		powerRepository.delete(power);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
