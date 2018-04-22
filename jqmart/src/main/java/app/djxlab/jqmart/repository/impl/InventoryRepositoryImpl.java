/**
 * InventoryRepositoryImpl.java
 * app.djxlab.jqmart.repository.impl 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.repository.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import app.djxlab.jqmart.model.InMemoryInventory;
import app.djxlab.jqmart.model.Item;
import app.djxlab.jqmart.repository.InventoryRepository;
import app.djxlab.jqmart.utils.InventoryFileReaderOps;

@Repository
public class InventoryRepositoryImpl implements InventoryRepository {
	
	private InventoryFileReaderOps inventoryFileReaderOps;
	
	public InventoryRepositoryImpl(InventoryFileReaderOps inventoryFileReaderOps) {
		this.inventoryFileReaderOps = inventoryFileReaderOps;
	}
	
	@Override
	// Populate inventory.
	public void populateInventory() {
		Map<String, Item> inventory = inventoryFileReaderOps.readInventoryFromFile("classpath:/static/inventory.txt");
		InMemoryInventory.inventory.putAll(inventory);
	}
	
}
