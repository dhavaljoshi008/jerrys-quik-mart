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

import com.fasterxml.jackson.datatype.jdk8.BaseScalarOptionalDeserializer;

import app.djxlab.jqmart.model.InMemoryInventory;
import app.djxlab.jqmart.model.Item;
import app.djxlab.jqmart.repository.InventoryRepository;
import app.djxlab.jqmart.utils.InventoryFileReaderOps;
import app.djxlab.jqmart.utils.InventoryFileWriterOps;

@Repository
public class InventoryRepositoryImpl implements InventoryRepository {
	
	private InventoryFileReaderOps inventoryFileReaderOps;
	
	private InventoryFileWriterOps inventoryFileWriterOps;

	
	public InventoryRepositoryImpl(InventoryFileReaderOps inventoryFileReaderOps, InventoryFileWriterOps inventoryFileWriterOps) {
		this.inventoryFileReaderOps = inventoryFileReaderOps;
		this.inventoryFileWriterOps = inventoryFileWriterOps;
	}
	
	// Populate inventory.
	@Override
	public void populateInventory() {
		Map<String, Item> inventory = inventoryFileReaderOps.readInventoryFromFile("inventory.txt");
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

	// Update in-memory inventory and write to inventory file.
	@Override
	public void processOrder(List<Item> orderItems) {
		int flag = 0;
		for(Item orderItem : orderItems) {
			String itemName = orderItem.getName();
			if(InMemoryInventory.inventory.containsKey(itemName)) { // Check if in-memory inventory contains order item.
				Item inventoryItem = InMemoryInventory.inventory.get(itemName);
				int resultingQuantity = inventoryItem.getQuantity() - orderItem.getQuantity();
				if(resultingQuantity >= 0) { // Check if sufficient quantity is available in the in-memory inventory.
					inventoryItem.setQuantity(resultingQuantity);
					flag = 1;
				}
			}
		}
		if(flag == 1) {
			List<Item> inventory = new ArrayList<>();
			for(String item : InMemoryInventory.inventory.keySet()) {
				inventory.add(InMemoryInventory.inventory.get(item));
			}
			save(inventory);
		}
	}
	
	public void save(List<Item> inventory) {
		String filename = "inventory.txt";
		inventoryFileWriterOps.writeInventoryToFile(inventory, filename);
	}
}
