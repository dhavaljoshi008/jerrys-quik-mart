package app.djxlab.jqmartapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import app.djxlab.jqmartapi.service.InventoryService;

@SpringBootApplication
public class Applicaton {

	private static InventoryService inventoryService;
	
	public Applicaton(InventoryService inventoryService) {
		Applicaton.inventoryService = inventoryService;
	}
	public static void main(String[] args) {
		SpringApplication.run(Applicaton.class, args);
		inventoryService.populateInventory();
	}
}
