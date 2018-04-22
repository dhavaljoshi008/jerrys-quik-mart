/**
 * InventoryRepositoryImpl.java
 * app.djxlab.jqmart.repository.impl 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.repository.impl;

import java.util.ArrayList;
import java.util.List;
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
	
	// Populate inventory.
	@Override
	public void populateInventory() {
		Map<String, Item> inventory = inventoryFileReaderOps.readInventoryFromFile("classpath:/static/inventory.txt");
		InMemoryInventory.inventory.putAll(inventory);
	}

	// Get list of items in inventory.
	@Override
	public List<Item> findAll() {
		List<Item> inventoryList = new ArrayList<>();
		for(String item: InMemoryInventory.inventory.keySet()) {
			inventoryList.add(InMemoryInventory.inventory.get(item));
		}
		return inventoryList;
	}

	// Update inventory.
	@Override
	public void save(List<Item> inventory) {
		for(Item item : inventory) {
			String itemName = item.getName();
			if(InMemoryInventory.inventory.containsKey(itemName)) {
				Item inventoryItem = InMemoryInventory.inventory.get(itemName);
				int resultingQuantity = inventoryItem.getQuantity() - item.getQuantity();
				if(resultingQuantity >= 0) {
					inventoryItem.setQuantity(resultingQuantity);
				}
			}
		}
	}
}
