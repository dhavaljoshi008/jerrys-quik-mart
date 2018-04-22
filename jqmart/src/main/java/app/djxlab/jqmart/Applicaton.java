package app.djxlab.jqmart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import app.djxlab.jqmart.model.InMemoryInventory;
import app.djxlab.jqmart.model.Item;
import app.djxlab.jqmart.service.InventoryService;
import app.djxlab.jqmart.utils.InventoryFileReaderOps;

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
