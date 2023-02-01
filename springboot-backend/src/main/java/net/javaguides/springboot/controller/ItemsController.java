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
import net.javaguides.springboot.model.Items;
import net.javaguides.springboot.repository.ItemsRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ItemsController {

	@Autowired
	private ItemsRepository itemsRepository;

	// get all items
	@GetMapping("/items")
	public List<Items> getAllItemss() {
		return itemsRepository.findAll();
	}

	// create items rest api
	@PostMapping("/items")
	public Items createItems(@RequestBody Items items) {
		return itemsRepository.save(items);
	}

	// get items by id rest api
	@GetMapping("/items/{id}")
	public ResponseEntity<Items> getItemsById(@PathVariable Long id) {
		Items items = itemsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Items not exist with id :" + id));
		return ResponseEntity.ok(items);
	}

	// update items rest api

	@PutMapping("/items/{id}")
	public ResponseEntity<Items> updateItems(@PathVariable Long id, @RequestBody Items itemsDetails) {
		Items items = itemsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Items not exist with id :" + id));
		items.setId(itemsDetails.getId());
		items.setName(itemsDetails.getName());
		items.setLangue(itemsDetails.getLangue());
		items.setDescription(itemsDetails.getDescription());
		items.setGold(itemsDetails.getGold());
		items.setIntelligence(itemsDetails.getIntelligence());
		items.setForce(itemsDetails.getForce());
		items.setAgility(itemsDetails.getAgility());
		items.setArmorDefence(itemsDetails.getArmorDefence());
		items.setMagicDefence(itemsDetails.getMagicDefence());

		Items updatedItems = itemsRepository.save(items);
		return ResponseEntity.ok(updatedItems);
	}

	// delete items rest api
	@DeleteMapping("/items/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteItems(@PathVariable Long id) {
		Items items = itemsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Items not exist with id :" + id));

		itemsRepository.delete(items);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
