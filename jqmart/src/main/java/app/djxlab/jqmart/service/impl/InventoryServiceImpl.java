/**
 * InventoryServiceImpl.java
 * app.djxlab.jqmart.service.impl 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import app.djxlab.jqmart.model.Item;
import app.djxlab.jqmart.repository.InventoryRepository;
import app.djxlab.jqmart.service.InventoryService;

@Service
public class InventoryServiceImpl implements InventoryService{

	private InventoryRepository inventoryRepository;
	
	public InventoryServiceImpl(InventoryRepository inventoryRepository) {
		this.inventoryRepository = inventoryRepository;
	}
	
	@Override
	// Populate inventory.
	public void populateInventory() {
		inventoryRepository.populateInventory();
	}

	@Override
	// Get list of items in inventory.
	public List<Item> findAll() {
		return inventoryRepository.findAll();
	}
}
