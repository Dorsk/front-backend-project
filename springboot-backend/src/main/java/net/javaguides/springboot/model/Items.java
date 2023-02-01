package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "items")
public class Items {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "langue")
	private String langue;

	@Column(name = "description")
	private String description;

	@Column(name = "gold")
	private String gold;

	@Column(name = "intelligence")
	private String intelligence;

	@Column(name = "strenght")
	private String strenght;

	@Column(name = "agility")
	private String agility;

	@Column(name = "armordefence")
	private String armordefence;

	@Column(name = "magicdefence")
	private String magicdefence;

	public Items() {

	}

	public Items(String name, String langue, String description, String gold, String intelligence,
			String strenght, String agility, String armordefence, String magicdefence) {
		super();
		this.name = name;
		this.langue = langue;
		this.description = description;
		this.gold = gold;
		this.intelligence = intelligence;
		this.strenght = strenght;
		this.agility = agility;
		this.armordefence = armordefence;
		this.magicdefence = magicdefence;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLangue() {
		return langue;
	}

	public void setLangue(String langue) {
		this.langue = langue;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getGold() {
		return gold;
	}

	public void setGold(String gold) {
		this.gold = gold;
	}

	public String getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(String intelligence) {
		this.intelligence = intelligence;
	}

	public String getForce() {
		return strenght;
	}

	public void setForce(String strenght) {
		this.strenght = strenght;
	}

	public String getAgility() {
		return agility;
	}

	public void setAgility(String agility) {
		this.agility = agility;
	}

	public String getArmorDefence() {
		return armordefence;
	}

	public void setArmorDefence(String armordefence) {
		this.armordefence = armordefence;
	}

	public String getMagicDefence() {
		return magicdefence;
	}

	public void setMagicDefence(String magicdefence) {
		this.magicdefence = magicdefence;
	}

}
